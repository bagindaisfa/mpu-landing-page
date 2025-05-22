import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Feature from './Feature/Feature';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Accordions = [
  {
    title:
      'What is Talent Acquisition and how does it differ from Recruitment?',
    text: 'Talent acquisition is a long-term strategic approach focused on identifying, attracting, and nurturing top talent for future organizational needs. Recruitment, on the other hand, is a short-term process to fill specific job openings. Talent acquisition builds a talent pipeline and employer branding.',
    active: true,
  },
  {
    title: 'How can Talent Acquisition improve business performance?',
    text: 'A well-structured talent acquisition strategy ensures the organization hires the right people with the right skills, leading to increased productivity, innovation, and employee retention—directly impacting business outcomes.',
    active: false,
  },
  {
    title: 'What tools or platforms do you use for Talent Acquisition?',
    text: 'We utilize professional networking platforms like LinkedIn, and data-driven sourcing strategies to ensure efficient and effective hiring processes.',
    active: false,
  },
  {
    title: 'Do you offer customizable Talent Acquisition solutions?',
    text: 'Yes, we provide tailored solutions based on your industry, hiring volume, and business goals. Whether you need end-to-end recruitment or assistance with employer branding and candidate sourcing, we adapt to your needs.',
    active: false,
  },
];

const ServiceDetailsTA = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Talent Acquisition'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'Talent Acquisition'}
      />
      <section className="pt-[120px] pb-[20px] bg-BodyBg4-0">
        <div className="Container">
          <div>
            <img
              src={serviceDetailsThumb}
              draggable="false"
              className="w-full"
              alt="Talent Acquisition Service"
            />
          </div>
          <div className="grid grid-cols-3 mt-[62px]">
            <div className="col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]">
              <h2 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
                Professional Talent Acquisition Solutions
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                We help companies find and recruit the best talent that aligns
                with your organization's vision and values. With a data-driven
                approach and extensive industry experience, we ensure every
                candidate we recommend meets long-term needs.
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                Our services cover end-to-end recruitment, from search,
                screening, interviewing, to onboarding.
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                We are committed to provide a recruitment process that is
                efficient, accurate, and tailored to your organization's work
                culture.
              </p>
            </div>

            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  Benefits of Our Services
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  We believe that the right human resources are the foundation
                  of a company's success.
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Access to a Network of Quality Candidates
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Efficient and Fast Recruitment Process
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Cultural Fit and Competence
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Professional HR Consulting Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion
        accordions={Accordions}
        title={'Talent Acquisition Services'}
      />
    </>
  );
};

export default ServiceDetailsTA;
