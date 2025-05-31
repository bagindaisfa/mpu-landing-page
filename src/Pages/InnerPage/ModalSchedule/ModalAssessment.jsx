import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserForm } from '../../../UserFormContext';
import { FaUser, FaRegThumbsUp } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import Select from 'react-select';
import ModalNotifikasi from '../../../Shared/ModalNotifikasi/ModalNotifikasi';

const ModalAssessment = ({ isOpen, onClose, onSuccess }) => {
  const { markFormSubmitted } = useUserForm();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Contact Form Submission',
    number: '',
    company: '',
    issues: [],
    message: '',
  });

  const [showInitialInfoModal, setShowInitialInfoModal] = useState(false);
  const [infoModalContent, setInfoModalContent] = useState('');

  // Show disclaimer modal when opened
  useEffect(() => {
    if (isOpen) {
      setInfoModalContent(t('popup.disclaimer'));
      setShowInitialInfoModal(true);
    }
  }, [isOpen, t]);

  // Fetch assessment questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/assessments/compro`
        );
        if (!res.ok) throw new Error('Failed to fetch questions');
        const data = await res.json();

        const options = data.map((item) => ({
          value: item.question_text,
          label: item.question_text,
        }));
        setQuestions(options);
      } catch (err) {
        console.error('Error fetching questions:', err);
      }
    };

    if (isOpen) fetchQuestions();
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOptions) => {
    setFormData((prev) => ({ ...prev, issues: selectedOptions }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      issues: formData.issues.map((item) => item.value),
    };

    try {
      // Send email
      const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!emailRes.ok) throw new Error('Failed to send email');

      // Save contact to DB
      await saveContact(payload);

      markFormSubmitted();
    } catch (err) {
      alert('Failed to send email');
      console.error(err);
      setLoading(false);
    }
  };

  const saveContact = async (payload) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/user-contact/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error('Failed to save contact');

      setFormData({
        name: '',
        email: '',
        subject: 'New Contact Form Submission',
        number: '',
        company: '',
        issues: [],
        message: '',
      });

      setLoading(false);
      onSuccess();
    } catch (err) {
      alert('Failed to save contact');
      console.error(err);
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[95%] max-w-2xl max-h-[90vh] overflow-y-auto">
          <button
            className="ml-auto block text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="mt-2">
            <h3 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              Please complete the form.
            </h3>

            <form
              className="flex flex-col gap-y-5 pb-[60px]"
              onSubmit={handleSubmit}
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  icon={<FaUser size={14} />}
                  type="text"
                  name="name"
                  placeholder="Enter Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  icon={<HiOutlineMailOpen size={16} />}
                  type="email"
                  name="email"
                  placeholder="Enter E-Mail*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  icon={<MdCall size={16} />}
                  type="text"
                  name="number"
                  placeholder="Enter Phone Number*"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
                <InputField
                  type="text"
                  name="company"
                  placeholder="Enter Company Name*"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Issues Selection */}
              <div>
                <Select
                  isMulti
                  name="issues"
                  options={questions}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder={t('contact.select_issues')}
                  value={formData.issues}
                  onChange={handleSelectChange}
                />
                <div className="text-sm text-right text-TextColor-0 mt-1">
                  You can choose more than one answer
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write a short message..."
                  className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                />
                <div className="text-sm text-right text-TextColor-0 mt-1">
                  {formData.message.length}/1000 characters
                </div>
              </div>

              {/* Disclaimer */}
              <label className="font-FiraSans text-TextColor-0 text-sm flex items-center gap-2">
                Your data will be kept confidential and used solely for the
                related project purposes.
              </label>

              {/* Submit */}
              <div className="inline-block mt-2">
                <button
                  type="submit"
                  className="primary-btn2 !py-[15px]"
                  disabled={loading}
                >
                  <FaRegThumbsUp />
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      {showInitialInfoModal && (
        <ModalNotifikasi
          isOpen={showInitialInfoModal}
          onClose={() => setShowInitialInfoModal(false)}
          message={infoModalContent}
        />
      )}
    </>
  );
};

// Input field component
const InputField = ({ icon, ...props }) => (
  <div className="relative inline-block">
    <input
      {...props}
      className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
    />
    {icon && (
      <span className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5">
        {icon}
      </span>
    )}
  </div>
);

export default ModalAssessment;
