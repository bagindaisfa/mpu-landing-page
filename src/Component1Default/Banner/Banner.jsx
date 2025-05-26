import { Link } from 'react-router-dom';
import bannerThumb from '/images/banner-thumb.png';
import bannerShape from '/images/hero_shape.png';
import { FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { IoPlayOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();
  const [toggler, setToggler] = useState(false);
  return (
    <section className="mx-2 xl:mx-5 lg:mt-5 xl:mt-0 2xl:mt-5 bg-Secondarycolor-0 lg:bg-opacity-0 lg:bg-[url('/images/banner.png')] bg-cover xl:bg-contain 2xl:bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[1100px] lg:h-[600px] xl:h-[548px] 2xl:h-[830px] flex items-center relative z-10 overflow-hidden rounded-[40px]">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]">
          <div className="relative">
            <h1
              className={`font-FiraSans font-semibold text-white leading-snug max-w-4xl
        ${
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
              <Link to={'/assessment'}>
                <button className="flex items-center gap-3 text-white font-FiraSans font-medium">
                  <FaEnvelopeOpen />
                  {t('banner.emailButton')}
                </button>
              </Link>

              <Link to={'/contact'}>
                <button className="flex items-center gap-3 text-white font-FiraSans font-medium">
                  <FaPhoneAlt />
                  {t('banner.callButton')}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative md:flex justify-end hidden">
            <img
              src={bannerThumb}
              draggable="false"
              className="md:w-11/12 xl:w-[inherit] 2xl:max-w-[inherit] relative 2xl:left-[124px]"
            />
            <div className="absolute top-[54%] -left-[58px] md:left-0 xl:-left-[58px] 2xl:-left-[42px] -translate-y-1/2">
              <button className="size-14 sm:size-[90px] lg:size-[70px] xl:size-[90px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                <IoPlayOutline
                  size={'30'}
                  className="text-white"
                  onClick={() => setToggler(!toggler)}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bannerShape}
        draggable={false}
        className="absolute top-24 2xl:top-[154px] left-[45%] md:left-3/4 lg:left-[45%] -translate-x-1/2 animate-rotational hidden sm:block"
      />
      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/owCTA9aU8-A']}
      />
    </section>
  );
};

export default Banner;
