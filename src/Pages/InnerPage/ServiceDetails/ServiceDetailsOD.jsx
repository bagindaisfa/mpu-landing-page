import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Accordions = [
  {
    title: 'What is Organisation Development?',
    text: 'Organisation Development (OD) is a planned, systemic approach to improving organizational effectiveness through interventions in its processes, structures, and culture.',
    active: true,
  },
  {
    title: 'Why is OD important?',
    text: 'OD helps organizations adapt to change, improve communication, build a positive culture, and increase overall performance and employee engagement.',
    active: false,
  },
  {
    title: 'What services are included?',
    text: 'Our OD services include strategic planning, leadership development, team building, change management, culture assessment, and performance improvement programs.',
    active: false,
  },
  {
    title: 'How do we approach OD projects?',
    text: 'We collaborate closely with clients to diagnose challenges, co-design interventions, implement programs, and evaluate outcomes for continuous improvement.',
    active: false,
  },
];

const ServiceDetailsOD = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Organisation Development'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'Organisation Development'}
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
                Organisation Development
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                Our Organisation Development (OD) service is designed to help
                companies enhance their structure, culture, and processes for
                long-term success. We support organizations in navigating
                change, building leadership capabilities, and fostering an
                adaptive and engaged workforce.
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                Through diagnostics, strategic planning, and tailored
                interventions, we help you achieve sustainable performance
                improvements and a thriving organizational culture.
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                Whether you're managing transformation, scaling teams, or
                improving cross-functional collaboration, our experienced
                consultants work closely with you to design impactful,
                data-driven solutions.
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
                      Culture Transformation
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Align your organizational culture with strategic goals to
                      drive engagement and performance.
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
                      Leadership & Team Development
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Strengthen leadership capabilities and foster
                      high-performing, collaborative teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px] md:pb-[60px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  Benefits of Our OD Services
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  Tailored solutions that build resilience and drive
                  transformation in your organization.
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Improved Organizational Culture
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Enhanced Team Collaboration
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Strategic Alignment and Execution
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    Leadership Development
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
      <Accordion accordions={Accordions} title={'Organisation Development'} />
    </>
  );
};

export default ServiceDetailsOD;
