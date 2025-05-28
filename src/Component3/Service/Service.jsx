import { useTranslation } from 'react-i18next';
import serviceTA from '/images/service-banner-TA.png';
import serviceEE from '/images/service-banner-EE.png';
import serviceHRC from '/images/service-banner-HRC.png';
import serviceVBC from '/images/service-banner-VBC.png';
import serviceOD from '/images/service-banner-OD.png';
import servicePD from '/images/service-banner-PD.png';
import thumbIcon from '/images/service_icon.png';
import serviceThumbShape from '/images/service_shpe.png';
import serviceShape from '/images/boxs.png';
import serviceShape2 from '/images/service_shape.png';
import serviceShape3 from '/images/service_shpe2.png';
import contentShape from '/images/service_dot2.png';
import serviceShape4 from '/images/tir.png';
import border from '/images/hero_border.png';
import ServiceCard from './ServiceCard';
import { GoArrowUpRight } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const Service = () => {
  const { t } = useTranslation();
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    centeredSlides: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  const getServiceData = (t) => [
    {
      id: 1,
      serviceSubTitle: t('services.items.1.subtitle'),
      serviceTitle: t('services.items.1.title'),
      serviceDesc: t('services.items.1.description'),
      serviceUrl: '/service/people-development',
      btnContent: t('services.items.1.button'),
      btnIcon: <GoArrowUpRight />,
      serviceThumb: servicePD,
      serviceThumbShape: serviceThumbShape,
      thumbIcon: thumbIcon,
      contentShape: contentShape,
    },
    {
      id: 2,
      serviceSubTitle: t('services.items.2.subtitle'),
      serviceTitle: t('services.items.2.title'),
      serviceDesc: t('services.items.2.description'),
      serviceUrl: '/service/talent-acquisition',
      btnContent: t('services.items.2.button'),
      btnIcon: <GoArrowUpRight />,
      serviceThumb: serviceTA,
      serviceThumbShape: serviceThumbShape,
      thumbIcon: thumbIcon,
      contentShape: contentShape,
    },
    {
      id: 3,
      serviceSubTitle: t('services.items.3.subtitle'),
      serviceTitle: t('services.items.3.title'),
      serviceDesc: t('services.items.3.description'),
      serviceUrl: '/service/employee-engagement',
      btnContent: t('services.items.3.button'),
      btnIcon: <GoArrowUpRight />,
      serviceThumb: serviceEE,
      serviceThumbShape: serviceThumbShape,
      thumbIcon: thumbIcon,
      contentShape: contentShape,
    },
    {
      id: 4,
      serviceSubTitle: t('services.items.4.subtitle'),
      serviceTitle: t('services.items.4.title'),
      serviceDesc: t('services.items.4.description'),
      serviceUrl: '/service/human-capital-consultancy',
      btnContent: t('services.items.4.button'),
      btnIcon: <GoArrowUpRight />,
      serviceThumb: serviceHRC,
      serviceThumbShape: serviceThumbShape,
      thumbIcon: thumbIcon,
      contentShape: contentShape,
    },
    {
      id: 5,
      serviceSubTitle: t('services.items.5.subtitle'),
      serviceTitle: t('services.items.5.title'),
      serviceDesc: t('services.items.5.description'),
      serviceUrl: '/service/vetting-background-check',
      btnContent: t('services.items.5.button'),
      btnIcon: <GoArrowUpRight />,
      serviceThumb: serviceVBC,
      serviceThumbShape: serviceThumbShape,
      thumbIcon: thumbIcon,
      contentShape: contentShape,
    },
    {
      id: 6,
      serviceSubTitle: t('services.items.6.subtitle'),
      serviceTitle: t('services.items.6.title'),
      serviceDesc: t('services.items.6.description'),
      serviceUrl: '/service/organisation-development',
      btnContent: t('services.items.6.button'),
      btnIcon: <GoArrowUpRight />,
      serviceThumb: serviceOD,
      serviceThumbShape: serviceThumbShape,
      thumbIcon: thumbIcon,
      contentShape: contentShape,
    },
  ];

  const ServiceData = getServiceData(t);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };

  return (
    <section className="Service relative z-10 pt-28 pb-[120px] bg-gradient-to-t to-BodyBg-0 from-transparent">
      <div className="absolute -z-10 top-28 left-[22%] hidden 2xl:block animate-rotate">
        <img src={serviceShape} draggable="false" />
      </div>
      <div className="absolute -z-10 top-40 right-[11rem] hidden 2xl:block animate-rotate">
        <img src={serviceShape3} draggable="false" />
      </div>
      <div className="absolute -z-10 bottom-52 left-32 hidden 2xl:block animate-wiggle">
        <img src={serviceShape2} draggable="false" />
      </div>
      <div className="absolute -z-10 top-36 right-[22%] hidden 2xl:block animate-rotate">
        <img src={serviceShape4} draggable="false" />
      </div>
      <div className="Container">
        <div className="text-center">
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4">
            {t('services.sectionTitle')}
            <img
              src={border}
              draggable="false"
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </h1>
        </div>
        <div className="mt-[66px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            {ServiceData.map(
              ({
                id,
                serviceIcon,
                serviceSubTitle,
                serviceTitle,
                serviceDesc,
                btnContent,
                contentShape,
                serviceUrl,
                btnIcon,
                serviceThumbShape,
                serviceThumb,
                thumbIcon,
              }) => {
                return (
                  <>
                    <SwiperSlide key={id} className="pb-[70px]">
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceSubTilte={serviceSubTitle}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                        btnContent={btnContent}
                        serviceUrl={serviceUrl}
                        btnIcon={btnIcon}
                        contentShape={contentShape}
                        serviceThumbShape={serviceThumbShape}
                        serviceThumb={serviceThumb}
                        thumbIcon={thumbIcon}
                      />
                    </SwiperSlide>
                  </>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
