import { Link } from 'react-router-dom';
import bannerThumb from '/images/banner-thumb.png';
import bannerShape from '/images/hero_shape.png';
import { FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import { IoPlayOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const banners = [
  '/images/banner-thumb.png',
  '/images/banner-thumb-2.png',
  '/images/banner-thumb-3.png',
  '/images/banner-thumb-4.png',
];

const Banner = () => {
  const { t, i18n } = useTranslation();
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner-section mx-2 xl:mx-5 lg:mt-5 xl:mt-0 2xl:mt-5 bg-Secondarycolor-0 lg:bg-opacity-0 lg:bg-[url('/images/banner.png')] bg-cover xl:bg-contain 2xl:bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[1100px] lg:h-[600px] xl:h-[548px] 2xl:h-[830px] flex items-center relative z-10 overflow-hidden rounded-[40px]">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]">
          <div className="hero-text relative px-4 md:px-6 lg:px-0 text-center lg:text-left">
            <h1
              className={`font-FiraSans font-semibold text-white leading-snug max-w-4xl ${
                i18n.language === 'id'
                  ? 'text-[26px] sm:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px]'
                  : 'text-[30px] sm:text-[46px] lg:text-[50px] xl:text-[54px] 2xl:text-[56px]'
              }`}
            >
              {t('banner.title')}
            </h1>
            <p className="font-FiraSans text-TextColor-0 mb-[38px] mt-[22px]">
              {t('banner.subtitle1')}{' '}
              <br className="hidden xl:block 2xl:hidden" />
              {t('banner.subtitle2')}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-8">
              <a href="mailto:admin@mpupeoplesolution.com?subject=Consultation%20Request&body=Hello%20MPU%20team,%0AI%20would%20like%20to%20ask%20about...">
                <button className="banner-button flex items-center gap-3 text-white font-FiraSans font-medium">
                  <FaEnvelopeOpen />
                  {t('banner.emailButton')}
                </button>
              </a>
              <Link to={'/contact'}>
                <button className="banner-button flex items-center gap-3 text-white font-FiraSans font-medium">
                  <FaPhoneAlt />
                  {t('banner.callButton')}
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full flex justify-center items-center">
            {/* Banner image (desktop only) */}
            <div className="banner-image relative hidden md:flex w-full h-[500px] justify-end">
              {banners.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 z-10'
                      : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>

            {/* Play button - always visible */}
            <div
              className="
              play-button
              absolute
              top-1/2
              left-4
              -translate-y-1/2
              z-20
              md:top-[187px]
              md:-left-[65px]
              xl:-left-[58px]
              2xl:-left-[42px]
            "
            >
              <button
                className="
        button-play-banner
        w-[56px] h-[56px]        /* mobile */
        sm:w-[80px] sm:h-[80px]
        lg:w-[70px] lg:h-[70px]
        xl:w-[90px] xl:h-[90px]
        rounded-full
        bg-PrimaryColor-0
        flex justify-center items-center
        relative z-10
        before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full
        before:animate-ping
      "
                onClick={() => setToggler(!toggler)}
              >
                <IoPlayOutline size={30} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bannerShape}
        draggable={false}
        className="banner-shape absolute top-24 2xl:top-[154px] left-[45%] md:left-3/4 lg:left-[45%] -translate-x-1/2 animate-rotational hidden sm:block"
      />
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://www.youtube.com/embed/7gxco_8QinI?rel=0&modestbranding=1',
        ]}
      />
    </section>
  );
};

export default Banner;
