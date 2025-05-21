import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Accordions = [
  {
    title: 'What is People Development and why is it important?',
    text: 'People Development refers to a strategic approach to enhancing employees’ skills, competencies, and overall performance. It includes training, mentoring, coaching, and leadership development programs. Investing in people development helps build a high-performing workforce, improves retention, and drives long-term business success.',
    active: true,
  },
  {
    title: 'How can People Development impact organizational growth?',
    text: 'By continuously developing employee capabilities, organizations create a culture of learning and innovation. This leads to higher productivity, better leadership succession, increased employee engagement, and a stronger competitive edge.',
    active: false,
  },
  {
    title:
      'What kind of programs are included in your People Development services?',
    text: 'Our services include leadership training, soft skills workshops, performance coaching, competency mapping, career pathing, and customized learning & development (L&D) strategies tailored to your company’s goals.',
    active: false,
  },
  {
    title: 'Do you provide personalized development plans for employees?',
    text: 'Yes, we design individualized development plans that align with both organizational goals and personal career aspirations. These plans may include targeted training modules, mentoring programs, and performance feedback cycles.',
    active: false,
  },
];

const ServiceDetailsPD = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'People Development'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'People Development'}
      />
      <section className="py-[120px] bg-BodyBg4-0">
        <div className="Container">
          <div>
            <img
              src={serviceDetailsThumb}
              draggable="false"
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-3 mt-[62px]">
            <div className="col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]">
              <h2 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
                Empowering Human Resource Through People Development
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                We believe that people are the core of every organization’s
                success. Our People Development services aim to foster
                leadership capabilities, improve employee engagement, and build
                sustainable performance through structured learning experiences
                and coaching frameworks.
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                From leadership training to competency-based development
                programs, we help individuals and teams unlock their full
                potential. Our tailored approach ensures alignment with your
                organization’s values and long-term goals.
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                Investing in your people is investing in your future. With our
                solutions, your workforce will be equipped to adapt, lead, and
                thrive in today’s dynamic business environment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-14">
                <div
                  className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5"
                  style={{ minHeight: 108 }}
                >
                  <div className="size-[76px] flex items-center justify-center rounded-full bg-BodyBg-0">
                    <img src={Icon} alt="Icon" draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-FiraSans font-medium text-xl text-HeadingColor-0">
                      Leadership & Talent Development
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Programs designed to enhance leadership competencies and
                      succession planning.
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5"
                  style={{ minHeight: 108 }}
                >
                  <div className="size-[76px] flex items-center justify-center rounded-full bg-BodyBg-0">
                    <img src={Icon2} alt="Icon" draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-FiraSans font-medium text-xl text-HeadingColor-0">
                      Team & Performance Coaching
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Practical tools to boost team synergy, agility, and
                      performance outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px] md:pb-[60px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  Service Benefits
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  Develop people-centric strategies that enhance capability,
                  resilience, and innovation.
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Certified Trainers and Coaches
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Customized Training Programs
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Measurable Performance Outcomes
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Ongoing Post-Training Support
                  </li>
                </ul>
                <Link to={'/contact'}>
                  <button className="primary-btn">{`Contact With Us`}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion
        accordions={Accordions}
        title={'People Development Services'}
      />
    </>
  );
};

export default ServiceDetailsPD;
