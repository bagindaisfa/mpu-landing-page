import aboutThumb from '/images/about_thumb.png';
import aboutShape from '/images/about_shape.png';
import { FaCheck } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-2 xl:mx-5 mt-5 rounded-[40px] py-[120px] bg-BodyBg-0 relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-28 items-center">
          <div className="relative z-10">
            <img
              src={aboutThumb}
              draggable="false"
              className="w-full 2xl:w-[inherit]"
            />
            <div className="absolute top-0 right-0 2xl:right-[36px] size-[74px] sm:size-[142px] lg:size-[120px] xl:size-[142px] bg-PrimaryColor-0 rounded-full flex items-center justify-center">
              <div className="text-inner size-14 sm:size-24 lg:size-20 xl:size-24 animate-rotational relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:size-[15px] before:rounded-full before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2"
                    className="fill-transparent"
                  ></path>
                  <text className="font-FiraSans text-[38px]">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-white"
                    >
                      * Leadership * HR Strategy * Growth * Culture
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              {t('about.sectionLabel')}
            </h5>
            <h1 className="font-FiraSans font-medium text-HeadingColor-0 text-[20px] leading-[30px] sm:text-[22px] sm:leading-[32px] md:text-[28px] lg:text-[22px] lg:leading-[32px] xl:text-[26px] xl:leading-[36px] 2xl:text-[28px] 2xl:leading-[38px]">
              {t('about.title')}
            </h1>
            <p className="font-FiraSans text-TextColor2-0 mt-6">
              {t('about.description')}
            </p>
            <ul className="mt-5">
              {[...Array(4)].map((_, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 font-FiraSans font-medium text-lg text-HeadingColor-0 mt-3 first:mt-0"
                >
                  <FaCheck size={22} className="text-PrimaryColor-0" />
                  {t(`about.points.${idx}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
