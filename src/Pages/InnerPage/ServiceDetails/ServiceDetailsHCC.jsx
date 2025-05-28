import React from 'react';
import FormProtectedRoute from '../../../Component1Default/FormProtectedRoute';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service-detail-HRC.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Icon2 from '/images/service-icon2.png';
import Accordion from './Accordion/Accordion';

const ServiceDetailsHCC = () => {
  const { t } = useTranslation();

  const accordions = t('serviceHCC.accordions', { returnObjects: true });

  return (
    <FormProtectedRoute>
      <BreadCrumb
        breadCrumbTitle={t('serviceHCC.breadcrumb.title')}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        url="/service"
        breadCrumbLink={t('serviceHCC.breadcrumb.link')}
        breadCrumbLink2={t('serviceHCC.breadcrumb.title')}
      />
      <section className="py-[120px] bg-BodyBg4-0">
        <div className="Container">
          <div>
            <img
              src={serviceDetailsThumb}
              draggable="false"
              className="w-full"
              alt="Service"
            />
          </div>
          <div className="grid grid-cols-3 mt-[62px]">
            <div className="col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]">
              <h2 className="font-FiraSans font-semibold text-2xl sm:text-[38px] text-HeadingColor-0">
                {t('serviceHCC.title')}
              </h2>
              <p className="font-FiraSans text-TextColor2-0 mt-[26px]">
                {t('serviceHCC.description1')}
              </p>
              <p className="font-FiraSans text-TextColor2-0 mt-7 mb-7">
                {t('serviceHCC.description2')}
              </p>
              <p className="font-FiraSans text-TextColor2-0">
                {t('serviceHCC.description3')}
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px]">
                <h4 className="font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0">
                  {t('serviceHCC.benefits.title')}
                </h4>
                <p className="font-FiraSans text-TextColor2-0 mt-2">
                  {t('serviceHCC.benefits.description')}
                </p>
                <ul className="space-y-3 mt-5 mb-12">
                  {t('serviceHCC.benefits.list', { returnObjects: true }).map(
                    (item, index) => (
                      <li
                        key={index}
                        className="font-FiraSans text-HeadingColor-0 flex items-center gap-2"
                      >
                        <span className="text-PrimaryColor-0">
                          <FaCheck size={18} />
                        </span>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion
        accordions={accordions}
        title={t('serviceHCC.accordionTitle')}
      />
    </FormProtectedRoute>
  );
};

export default ServiceDetailsHCC;
