import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaUser, FaRegThumbsUp, FaPencilAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import border from '/images/hero_border.png';
import { useUserForm } from '../../../UserFormContext';
import serviceShape3 from '/images/service_shpe2.png';
import Select from 'react-select';
import { FaRegEnvelopeOpen } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Assessment = () => {
  const { t } = useTranslation();
  const { markFormSubmitted } = useUserForm();
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Contact Form Submission',
    number: '',
    company: '',
    issues: [], // array of selected options
    message: '',
  });

  useEffect(() => {
    const fetchQuestions = async () => {
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
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

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

      await saveContact(e);
      markFormSubmitted();
      alert('Email sent successfully!');
    } catch (error) {
      alert('Failed to send email');
      console.error('Failed to send email', error);
      setLoading(false);
    }
  };

  const saveContact = async (e) => {
    e.preventDefault();
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
        company: '',
        issues: [], // array of selected options
        message: '',
      });
      setLoading(false);
    } catch (error) {
      alert('Failed to save contact');
      console.error('Failed to save contact', error);
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-28 bg-[url('/images/faq-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-28 items-flexStart">
          <div className="relative z-10">
            <div>
              <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center gap-2 mb-3 pt-4">
                {t('contact.get_in_touch')}
              </h5>
              <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
                {t('contact.trusted_by_experts')}
                <br />
                {t('contact.driven_by_solutions')}
              </h1>
            </div>
            <div
              className="bg-BodyBg4-0 rounded-xl mt-5"
              style={{ padding: '1rem 2.5rem 0.5rem' }}
            >
              <div className="flex items-center gap-5 group border-b border-dashed border-HeadingColor-0 border-opacity-40 pb-5">
                <div className="size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
                  <FaPhoneAlt size={'20'} />
                </div>
                <div>
                  <h6 className="font-FiraSans text-TextColor2-0">
                    {t('contact.call_us')}
                  </h6>
                  <Link to={'/'}>
                    <button className="font-FiraSans text-xl text-HeadingColor-0 font-medium mt-1">
                      +6221 8428 3681
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-5 group border-b border-dashed border-HeadingColor-0 border-opacity-40 py-5">
                <div className="size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
                  <FaRegEnvelopeOpen size={'20'} />
                </div>
                <div>
                  <h6 className="font-FiraSans text-TextColor2-0">
                    {t('contact.email_us')}
                  </h6>
                  <Link to={'/'}>
                    <button className="font-FiraSans text-xl text-HeadingColor-0 font-medium mt-1">
                      admin@mpupeoplesolution.com
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-5 group pt-5 pb-2">
                <div className="size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100">
                  <IoLocationOutline size={'24'} />
                </div>
                <div>
                  <h6 className="font-FiraSans text-TextColor2-0">
                    {t('contact.our_locations')}
                  </h6>
                  <p className="font-FiraSans text-HeadingColor-0 mt-2">
                    Arkadia Green Park Tower G, 8th Floor <br /> Jakarta
                    Selatan, DKI Jakarta, Indonesia 12520
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="text-center">
              <h1 className="font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[30px] lg:leading-[44px] xl:text-[32px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4">
                {t('contact.letUsHelpYou')}
                <img
                  src={border}
                  draggable="false"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                />
              </h1>
            </div>
            <div className="w-full mx-auto max-w-[850px] mt-12">
              <div>
                <form
                  action="#"
                  method="post"
                  className="flex flex-col gap-y-5 pt-11 pb-[60px]"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative inline-block">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={t('contact.enter_name')}
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
                        placeholder={t('contact.enter_email')}
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
                        placeholder={t('contact.enter_subject')}
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
                        placeholder={t('contact.enter_phone')}
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
                        placeholder={t('contact.enter_company')}
                        required
                        className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <Select
                    isMulti
                    name="issues"
                    options={questions}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder={t('contact.select_issues')}
                    value={formData.issues}
                    onChange={(selectedOptions) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        issues: selectedOptions,
                      }))
                    }
                  />
                  <div className="text-sm text-right text-TextColor-0 -mt-[2px]">
                    You can choose more than one answer
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder={t('contact.enter_message')}
                    className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength="1000"
                  ></textarea>
                  <div className="text-sm text-right text-TextColor-0 -mt-[2px]">
                    {formData.message.length}/1000 characters
                  </div>
                  <label className="font-FiraSans text-TextColor-0 text-sm flex items-center gap-2">
                    {t('contact.disclaimer')}
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
        </div>
      </div>
    </section>
  );
};

export default Assessment;
