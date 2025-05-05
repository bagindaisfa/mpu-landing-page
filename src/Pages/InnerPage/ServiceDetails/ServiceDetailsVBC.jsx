import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Accordions = [
  {
    title: 'What is Vetting & Background Check?',
    text: 'It is a process of verifying an individual’s credentials, criminal records, education, work history, and other relevant background information before employment or partnership.',
    active: true,
  },
  {
    title: 'Why is background checking important?',
    text: 'It reduces the risk of fraud, protects workplace safety, ensures compliance, and helps organizations make informed hiring decisions.',
    active: false,
  },
  {
    title: 'What areas do we check?',
    text: 'We check criminal records, employment history, education verification, reference checks, and social media screening based on the client’s needs.',
    active: false,
  },
  {
    title: 'How fast can we deliver the report?',
    text: 'Depending on the complexity and type of checks, most reports can be delivered within 3–5 business days.',
    active: false,
  },
];

const ServiceDetailsVBC = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Vetting & Background Check'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'Vetting & Background Check'}
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
                Vetting & Background Check
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                Our vetting and background check services help organizations
                ensure the integrity and trustworthiness of individuals before
                making hiring or partnership decisions. We conduct thorough
                verifications tailored to each role and industry requirement.
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                With a proven process and advanced tools, we verify identities,
                education, employment history, criminal records, and more. Our
                team is trained to deliver accurate, discreet, and timely
                reports that support confident decision-making.
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                Let us help reduce risk and enhance compliance in your
                recruitment and onboarding process through comprehensive
                background screening.
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
                      Trusted Methodology
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Standardized and compliant screening processes that ensure
                      fairness and accuracy.
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
                      Fast & Reliable
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Reports delivered in a timely manner to support quick
                      decision making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px] md:pb-[60px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  Benefits of Vetting Services
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  Empower your hiring with reliable insights and reduced risks.
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Verified Candidate Background
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Enhanced Hiring Confidence
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Reduced Legal & Compliance Risks
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Secure Workplace Culture
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
      <Accordion accordions={Accordions} title={'Vetting & Background Check'} />
    </>
  );
};

export default ServiceDetailsVBC;
