import React, { useEffect, useState } from 'react';
import { FaUser, FaRegThumbsUp, FaPencilAlt } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import border from '/images/hero_border.png';
import { useNavigate } from 'react-router-dom';
import serviceShape3 from '/images/service_shpe2.png';
import Select from 'react-select';

const Assessment = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      alert('Email sent successfully!');
      saveContact(e);
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
        subject: '',
        number: '',
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
        <div className="absolute -z-10 right-48 bottom-10 hidden 2xl:block animate-rotate">
          <img src={serviceShape3} draggable="false" />
        </div>
        <div className="text-center">
          {/* <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            ASSESSMENT REQUEST
          </h5> */}
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[30px] lg:leading-[44px] xl:text-[32px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4">
            Let Us Help You to Understand Your People Chalanges
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
                <div className="relative inline-block">
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
                </div>
                <div className="relative inline-block">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="Enter Number*"
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
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                <div className="relative inline-block">
                  <Select
                    isMulti
                    name="issues"
                    options={questions}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    placeholder="Select Issues..."
                    value={formData.issues}
                    onChange={(selectedOptions) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        issues: selectedOptions,
                      }))
                    }
                  />
                </div>
              </div>

              <textarea
                name="message"
                id="message"
                placeholder="Write a short meassage..."
                className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
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
    </section>
  );
};

export default Assessment;
