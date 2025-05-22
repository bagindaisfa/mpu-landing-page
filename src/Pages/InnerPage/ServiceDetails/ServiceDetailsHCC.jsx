import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Accordions = [
  {
    title: 'What is Human Resource Consultancy?',
    text: 'Human Resource Consultancy involves strategic advisory services that help organizations maximize the value and effectiveness of their workforce. It covers areas such as talent management, leadership development, and organizational design.',
    active: true,
  },
  {
    title: 'Why is it important for organizations?',
    text: 'A strong human resource strategy enables organizations to attract, retain, and develop top talent, align workforce capabilities with business goals, and drive long-term performance and resilience.',
    active: false,
  },
  {
    title: 'What services do we provide?',
    text: 'We offer workforce assessments, leadership development programs, organizational structure analysis, HR process improvement, succession planning, and talent strategy consulting.',
    active: false,
  },
  {
    title: 'How do we work with clients?',
    text: 'We begin with a diagnostic assessment to understand your needs, followed by tailored solution design, implementation support, and ongoing advisory to ensure sustainable impact.',
    active: false,
  },
];

const ServiceDetailsHCC = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Human Resource Consultancy'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'Human Resource Consultancy'}
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
              <h2 className="font-FiraSans font-semibold text-2xl sm:text-[42px] text-HeadingColor-0">
                Human Resource Consultancy
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                We help organizations optimize their human resource potential
                through strategic planning, leadership development, and
                performance improvement initiatives. Our consultancy services
                are grounded in deep industry insight, research-based
                frameworks, and proven implementation strategies.
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                Whether your organization is undergoing transformation, scaling
                for growth, or addressing talent retention challenges, we bring
                tailored solutions that align with your goals. We collaborate
                with HR leaders to shape and execute people strategies that
                deliver measurable business impact.
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                From leadership coaching to workforce planning and culture
                transformation, our consultancy services are designed to empower
                your workforce and enhance organizational performance at all
                levels.
              </p>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-14">
                <div
                  className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5"
                  style={{ minHeight: 108 }}
                >
                  <div className="size-[76px] flex items-center justify-center rounded-full bg-BodyBg-0">
                    <img src={Icon} alt="Icon" draggable="false" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-FiraSans font-medium text-xl text-HeadingColor-0">
                      Strategic Work Planning
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      We assist in aligning your workforce capabilities with
                      business goals by designing and implementing strategic
                      work plans that drive productivity, efficiency, and future
                      readiness.
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
                      Business Solutions
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Our tailored business solutions focus on improving
                      organizational structure, leadership effectiveness, and HR
                      operations to unlock human resource value across all
                      levels.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  Benefits of Our Services
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  Partnering with us brings tangible value to your organization
                  by transforming human resource into a competitive advantage.
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Customized HR Strategies
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Enhanced Leadership Capability
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Measurable Workforce Impact
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Scalable Talent Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion accordions={Accordions} title={'Human Resource Consultancy'} />
    </>
  );
};

export default ServiceDetailsHCC;
