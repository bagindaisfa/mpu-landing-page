import React from 'react';
import FormProtectedRoute from '../../../Component1Default/FormProtectedRoute';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Accordion from './Accordion/Accordion';

import serviceDetailsThumb from '/images/service-detail-VBC.png';
import Icon2 from '/images/service-icon2.png';

const ServiceDetailsVBC = () => {
  const { t } = useTranslation();

  const accordions = [
    {
      title: t('vbc.faq1.title'),
      text: t('vbc.faq1.text'),
      active: true,
    },
    {
      title: t('vbc.faq2.title'),
      text: t('vbc.faq2.text'),
      active: false,
    },
    {
      title: t('vbc.faq3.title'),
      text: t('vbc.faq3.text'),
      active: false,
    },
    {
      title: t('vbc.faq4.title'),
      text: t('vbc.faq4.text'),
      active: false,
    },
  ];

  const benefits = [
    'vbc.benefits.verified',
    'vbc.benefits.confidence',
    'vbc.benefits.risks',
    'vbc.benefits.culture',
  ];

  return (
    <FormProtectedRoute>
      <BreadCrumb
        breadCrumbTitle={t('vbc.breadcrumb.title')}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url="/service"
        breadCrumbLink={t('vbc.breadcrumb.link1')}
        breadCrumbLink2={t('vbc.breadcrumb.link2')}
      />

      <section className="py-[120px] bg-BodyBg4-0">
        <div className="Container">
          <img
            src={serviceDetailsThumb}
            alt="Service"
            draggable="false"
            className="w-full"
          />
          <div className="grid grid-cols-3 mt-[62px]">
            <div className="col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]">
              <h2 className="font-FiraSans font-semibold text-2xl sm:text-[42px] text-HeadingColor-0">
                {t('vbc.title')}
              </h2>

              {[1, 2, 3].map((i) => (
                <p
                  key={i}
                  className={`font-FiraSans text-TextColor2-0 ${
                    i > 1 ? 'mt-7' : 'mt-[26px]'
                  }`}
                >
                  {t(`vbc.paragraph${i}`)}
                </p>
              ))}
            </div>

            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  {t('vbc.benefitsTitle')}
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  {t('vbc.benefitsDesc')}
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="font-FiraSans text-HeadingColor-0 flex items-center gap-2"
                    >
                      <span className="text-PrimaryColor-0">
                        <FaCheck size={18} />
                      </span>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Accordion accordions={accordions} title={t('vbc.title')} />
    </FormProtectedRoute>
  );
};

export default ServiceDetailsVBC;
