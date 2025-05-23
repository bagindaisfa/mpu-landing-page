import React, { useState } from 'react';
import FormProtectedRoute from '../../../Component1Default/FormProtectedRoute';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const Accordions = [
  {
    title: 'What is Employee Engagement?',
    text: 'Employee Engagement is the level of involvement, commitment, and motivation of employees towards their work and the company they work for. High engagement drives productivity and retention.',
    active: true,
  },
  {
    title: 'What are the benefits of Employee Engagement for companies?',
    text: 'Benefits include increased productivity, employee loyalty, reduced turnover, increased customer satisfaction, and strengthening a healthy work culture.',
    active: false,
  },
  {
    title: 'What services do we offer?',
    text: 'We offer People Development & Growth Programs, Recognition & Appreciation Programs, Wellness & Work-Life Balance Initiatives, Culture & Values Activation, Employee Voice & Participation, Team Engagement Activities and Onboarding & Offboarding Experience',
    active: false,
  },
  {
    title: 'How does the implementation process work?',
    text: 'We start with an initial assessment, followed by designing a program that fits your needs, implementing interventions, and evaluating results periodically.',
    active: false,
  },
];

const ServiceDetailsEE = () => {
  return (
    <FormProtectedRoute>
      <BreadCrumb
        breadCrumbTitle={'Employee Engagement'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'Employee Engagement'}
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
                Employee Engagement
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                Employee Engagement is a strategic approach that focuses on
                creating optimal conditions for employees to contribute fully to
                the success of the organization. This program aims to build
                emotional involvement and commitment between employees and the
                company.
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                Through initiatives such as People Development & Growth
                Programs, Recognition & Appreciation Programs, Wellness &
                Work-Life Balance Initiatives, Culture & Values Activation,
                Employee Voice & Participation, Team Engagement Activities and
                Onboarding & Offboarding Experience.
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                Investing in Employee Engagement has been proven to reduce
                turnover rates, increase employee loyalty, and build a
                collaborative and innovative work environment.
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
                      Employee Engagement Survey
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Identifying the overall level of employee satisfaction and
                      engagement for decision making purposes.
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
                      Cultural Development Program
                    </h5>
                    <p className="font-FiraSans text-TextColor2-0 mt-2">
                      Forming a positive work culture that increases employee
                      motivation and loyalty to the company.
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
                  Leadership skill before media innovation customer directed
                  alignments
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Improving Employee Retention
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Better Team Productivity
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Positive Work Culture
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>{' '}
                    Loyalty and Job Satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion accordions={Accordions} title={'Employee Engagement'} />
    </FormProtectedRoute>
  );
};

export default ServiceDetailsEE;
