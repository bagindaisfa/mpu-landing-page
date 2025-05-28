import React from 'react';
import FormProtectedRoute from '../../../Component1Default/FormProtectedRoute';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service-detail-OD.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Accordion from './Accordion/Accordion';

const ServiceDetailsOD = () => {
  const { t } = useTranslation();

  const Accordions = [
    {
      title: t('od.faq1.title'),
      text: t('od.faq1.text'),
      active: true,
    },
    {
      title: t('od.faq2.title'),
      text: t('od.faq2.text'),
      active: false,
    },
    {
      title: t('od.faq3.title'),
      text: t('od.faq3.text'),
      active: false,
    },
    {
      title: t('od.faq4.title'),
      text: t('od.faq4.text'),
      active: false,
    },
  ];

  return (
    <FormProtectedRoute>
      <BreadCrumb
        breadCrumbTitle={t('od.breadcrumb.title')}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url="/service"
        breadCrumbLink={t('od.breadcrumb.link1')}
        breadCrumbLink2={t('od.breadcrumb.link2')}
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
                {t('od.title')}
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                {t('od.paragraph1')}
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                {t('od.paragraph2')}
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                {t('od.paragraph3')}
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  {t('od.benefitsTitle')}
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  {t('od.benefitsDesc')}
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    {t('od.benefits.culture')}
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    {t('od.benefits.collaboration')}
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    {t('od.benefits.alignment')}
                  </li>
                  <li className="font-FiraSans text-HeadingColor-0 flex items-center gap-2">
                    <span className="text-PrimaryColor-0">
                      <FaCheck size={'18'} />
                    </span>
                    {t('od.benefits.leadership')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion accordions={Accordions} title={t('od.title')} />
    </FormProtectedRoute>
  );
};

export default ServiceDetailsOD;
