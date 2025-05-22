import aboutThumb from '/images/about_thumb.png';
import aboutShape from '/images/about_shape.png';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { FaEnvelopeOpen } from 'react-icons/fa';

const About = () => {
  return (
    <section className="mx-2 xl:mx-5 mt-5 rounded-[40px] py-[120px] bg-BodyBg-0 relative">
      <div className="Container">
        {/* <h1 className="font-FiraSans font-semibold text-center text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px] mb-[58px]">
          Empower Your Team with Tailored <br /> Leadership & Performance
          Solutions
        </h1> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-28 items-center">
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="w-full 2xl:w-[inherit]"
            />
            <div className="absolute top-0 right-0 2xl:right-[36px] size-[74px] sm:size-[142px] lg:size-[120px] xl:size-[142px] bg-PrimaryColor-0 rounded-full flex items-center justify-center">
              <div className="text-inner size-14 sm:size-24 lg:size-20 xl:size-24 animate-rotational relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:size-[15px] before:rounded-full before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2"
                    className="fill-transparent"
                  ></path>
                  <text className="font-FiraSans text-[38px]">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-white"
                    >
                      * Leadership * HR Strategy * Growth * Culture
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              ABOUT COMPANY
            </h5>
            <h1 className="font-FiraSans font-medium text-HeadingColor-0 text-[20px] leading-[30px] sm:text-[22px] sm:leading-[32px] md:text-[28px] lg:text-[22px] lg:leading-[32px] xl:text-[26px] xl:leading-[36px] 2xl:text-[28px] 2xl:leading-[38px]">
              Since 2024, we’ve helped companies build
              <br className="hidden sm:block" />
              stronger teams and unlock leadership
              <br className="hidden sm:block" />
              potential through customized consulting & training.
            </h1>
            <p className="font-FiraSans text-TextColor2-0 mt-6">
              We help organizations improve employee performance through
              practical training, performance assessments, and strategic HR
              solutions.
            </p>
            <ul className="mt-5">
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor-0">
                <FaCheck size={'22'} className="text-PrimaryColor-0" />
                Professional Trainer
              </li>
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor-0 mt-3">
                <FaCheck size={'22'} className="text-PrimaryColor-0" />
                Certified HR & Leadership Consultants
              </li>
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor-0 mt-3">
                <FaCheck size={'22'} className="text-PrimaryColor-0" />
                Tailored Training Programs
              </li>
              <li className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor-0 mt-3">
                <FaCheck size={'22'} className="text-PrimaryColor-0" />
                Measurable Performance Results
              </li>
            </ul>
            {/* <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:items-center lg:items-start 2xl:items-center gap-7 mt-9">
              <Link to={'/assessment'}>
                <button className="flex items-center gap-2 font-FiraSans font-medium text-HeadingColor-0">
                  <FaEnvelopeOpen />
                  admin@mpupeoplesolution.com
                </button>
              </Link>
            </div> */}
            <img
              src={aboutShape}
              draggable="false"
              className="absolute bottom-0 right-0 2xl:-right-20 animate-movebtn hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
