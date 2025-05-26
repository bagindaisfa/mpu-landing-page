import React, { useState } from 'react';
import FormProtectedRoute from '../../../Component1Default/FormProtectedRoute';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

const ServiceDetailsPD = () => {
  const { t } = useTranslation();
  const Accordions = [
    {
      title: t('servicePD.accordion1.title'),
      text: t('servicePD.accordion1.text'),
      active: true,
    },
    {
      title: t('servicePD.accordion2.title'),
      text: t('servicePD.accordion2.text'),
      active: false,
    },
    {
      title: t('servicePD.accordion3.title'),
      text: t('servicePD.accordion3.text'),
      active: false,
    },
    {
      title: t('servicePD.accordion4.title'),
      text: t('servicePD.accordion4.text'),
      active: false,
    },
  ];
  return (
    <FormProtectedRoute>
      <BreadCrumb
        breadCrumbTitle={t('servicePD.breadcrumb.title')}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url={'/service'}
        breadCrumbLink={t('servicePD.breadcrumb.link')}
        breadCrumbLink2={t('servicePD.breadcrumb.title')}
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
                {t('servicePD.title')}
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                {t('servicePD.description1')}
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                {t('servicePD.description2')}
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                {t('servicePD.description3')}
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  {t('servicePD.benefits.title')}
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  {t('servicePD.benefits.description')}
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  {[
                    t('servicePD.benefits.list.0'),
                    t('servicePD.benefits.list.1'),
                    t('servicePD.benefits.list.2'),
                    t('servicePD.benefits.list.3'),
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="font-FiraSans text-HeadingColor-0 flex items-center gap-2"
                    >
                      <span className="text-PrimaryColor-0">
                        <FaCheck size="18" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion
        accordions={Accordions}
        title={t('servicePD.accordionTitle')}
      />
    </FormProtectedRoute>
  );
};

export default ServiceDetailsPD;
