import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserForm } from '../../../UserFormContext';
import { FaUser, FaRegThumbsUp } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import Select from 'react-select';
import ModalNotifikasi from '../../../Shared/ModalNotifikasi/ModalNotifikasi';

const ModalAssessment = ({ isOpen, onClose, onSuccess }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Contact Form Submission',
    number: '',
    company: '',
    issues: [], // array of selected options
    message: '',
  });
  const [showInitialInfoModal, setShowInitialInfoModal] = useState(false);
  const [infoModalContent, setInfoModalContent] = useState('');
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setInfoModalContent(t('popup.disclaimer'));
      setShowInitialInfoModal(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoadingQuestions(true);
      setFetchError('');
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/assessments/compro`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch blog');
        }

        const data = await res.json();
        const issueOptions = data.map((issue) => ({
          value: issue.question_text,
          label: issue.question_text,
        }));

        setQuestions(issueOptions);
      } catch (error) {
        setFetchError('Failed to fetch options. Please refresh the page.');
        console.error('Error fetching questions:', error);
      } finally {
        setLoadingQuestions(false);
      }
    };

    if (isOpen) {
      fetchQuestions(); // hanya fetch saat modal terbuka
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        issues: formData.issues.map((issue) => issue.value), // hanya ambil nilai string
      };
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error('Failed to send email');
      }

      await saveContact();
    } catch (error) {
      alert('Failed to send email');
      console.error('Failed to send email', error);
      setLoading(false);
    }
  };

  const saveContact = async () => {
    try {
      const payload = {
        ...formData,
        issues: formData.issues.map((issue) => issue.value), // hanya ambil nilai string
      };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user-contact/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        setLoading(false);
        throw new Error('Failed to save contact');
      }
      setFormData({
        name: '',
        email: '',
        subject: 'New Contact Form Submission',
        number: '',
        message: '',
      });
      setLoading(false);
      onSuccess();
    } catch (error) {
      alert('Failed to save contact');
      console.error('Failed to save contact', error);
      setLoading(false);
    }
  };

  return (
    <>
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
              action="#"
              method="post"
              className="flex flex-col gap-y-5 pb-[60px]"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name*"
                    required
                    className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FaUser
                    size={'14'}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
                <div className="relative inline-block">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter E-Mail*"
                    required
                    className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <HiOutlineMailOpen
                    size={'16'}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* <div className="relative inline-block">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter Subject*"
                    required
                    className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <FaPencilAlt
                    size={'14'}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div> */}
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Phone Number*"
                    required
                    className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    value={formData.number}
                    onChange={handleChange}
                  />
                  <MdCall
                    size={'16'}
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Enter Company Name*"
                    required
                    className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <Select
                  isMulti
                  name="issues"
                  options={questions}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  value={formData.issues}
                  onChange={(selectedOptions) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      issues: selectedOptions,
                    }))
                  }
                  isLoading={loadingQuestions}
                  placeholder={
                    loadingQuestions
                      ? 'Loading options...'
                      : fetchError
                      ? 'Failed to load selection'
                      : t('contact.select_issues')
                  }
                  noOptionsMessage={() =>
                    loadingQuestions
                      ? 'Loading options...'
                      : fetchError
                      ? 'Unable to load selection'
                      : 'No options available'
                  }
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: fetchError ? 'red' : base.borderColor,
                    }),
                  }}
                />
                {fetchError && (
                  <p className="text-red-500 text-sm mt-1">{fetchError}</p>
                )}
              </div>
              <div className="text-sm text-right text-TextColor-0 -mt-[2px]">
                You can choose more than one answer
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write a short meassage..."
                className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
                value={formData.message}
                onChange={handleChange}
                maxLength="1000"
              ></textarea>
              <div className="text-sm text-right text-TextColor-0 -mt-[2px]">
                {formData.message.length}/1000 characters
              </div>
              <label className="font-FiraSans text-TextColor-0 text-sm flex items-center gap-2">
                Your data will be kept confidential and used solely for the
                related project purposes.
              </label>
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

export default ModalAssessment;
