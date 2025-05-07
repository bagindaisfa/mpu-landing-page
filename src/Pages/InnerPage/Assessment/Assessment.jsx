import React, { useEffect, useState } from 'react';
import {
  FaUser,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaBuilding,
} from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import border from '/images/hero_border.png';
import appoinmentShape from '/images/contact_shape.png';
import serviceShape3 from '/images/service_shpe2.png';

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showUserInfoForm, setShowUserInfoForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const countYesNo = () => {
    const yes = Object.values(answers).filter((a) => a === 'yes').length;
    const no = Object.values(answers).filter((a) => a === 'no').length;
    return { yes, no };
  };

  const handleInitialSubmit = () => {
    const { yes, no } = countYesNo();
    if (yes >= no) {
      setShowUserInfoForm(true);
    } else {
      submitAssessment({ answers }); // langsung kirim
    }
  };

  const submitAssessment = async (data) => {
    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/assessments/answare/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        }
      );
      alert('Assessment submitted successfully.');
    } catch (err) {
      alert('Submission failed.');
    }
  };

  const handleUserInfoSubmit = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      return alert('Lengkapi semua data terlebih dahulu.');
    }
    submitAssessment({ answers, user_info: userInfo });
  };

  return (
    <section className="relative overflow-hidden py-28 bg-[url('/images/faq-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="absolute -z-10 right-48 bottom-10 hidden 2xl:block animate-rotate">
          <img src={serviceShape3} draggable="false" />
        </div>
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            ASSESSMENT REQUEST
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[30px] lg:leading-[44px] xl:text-[32px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4">
            Let Us Help You Assess Your Team
            <img
              src={border}
              draggable="false"
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </h1>
        </div>
        <div className="w-full mx-auto max-w-[850px] mt-12">
          <div>
            {questions.map((q) => (
              <div key={q.id}>
                <p className="font-FiraSans text-TextColor2-0 pt-4">
                  {q.question_text}
                </p>
                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => handleAnswerChange(q.id, 'yes')}
                    className={`px-4 !py-[15px] rounded ${
                      answers[q.id] === 'yes'
                        ? 'bg-PrimaryColor-0 text-white'
                        : 'bg-gray-200'
                    }`}
                  >
                    <p className="font-FiraSans text-white">Yes</p>
                  </button>
                  <button
                    onClick={() => handleAnswerChange(q.id, 'no')}
                    className={`px-4 !py-[15px] rounded ${
                      answers[q.id] === 'no'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200'
                    }`}
                  >
                    <p className="font-FiraSans text-white">No</p>
                  </button>
                </div>
              </div>
            ))}
            {!showUserInfoForm ? (
              <form className="flex justify-right gap-y-5 pt-5 pb-[60px]">
                <button
                  onClick={handleInitialSubmit}
                  className="primary-btn2 !py-[15px]"
                >
                  Submit Assessment
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-y-5 pt-11 pb-[60px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative inline-block">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name*"
                      required
                      className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
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
                      name="number"
                      id="number"
                      placeholder="Enter Number*"
                      required
                      className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    />
                    <MdCall
                      size={'16'}
                      className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                    />
                  </div>
                  <div className="relative inline-block">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      placeholder="Enter Your Company Name*"
                      required
                      className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
                    />
                    <FaBuilding
                      size={'14'}
                      className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                    />
                  </div>
                </div>
                <div className="flex justify-right gap-2 mt-4">
                  <button id="saveBtn" className="primary-btn2 !py-[15px]">
                    <FaRegThumbsUp />
                    {`Submit Now`}
                  </button>
                  <button
                    id="cancelBtn"
                    className="primary-btn2 !py-[15px]"
                    onClick={() => setShowUserInfoForm(false)}
                  >
                    <FaRegThumbsDown />
                    {`Cancel`}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
