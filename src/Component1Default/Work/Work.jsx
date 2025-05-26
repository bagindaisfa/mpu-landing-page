/* eslint-disable no-unused-vars */
import workIcon from '/images/steps_1.png';
import workIcon2 from '/images/steps_2.png';
import workIcon3 from '/images/steps_3.png';
import WorkCard from './WorkCard';
import { LuMoveRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();

  const WorkData = [
    {
      id: 1,
      workNumber: '01',
      workIcon: workIcon,
      workTitle: t('work.strategicPlanning.title'),
      workDesc: t('work.strategicPlanning.desc'),
      workUrl: '/service_details',
      workBtn: <LuMoveRight />,
    },
    {
      id: 2,
      workNumber: '02',
      workIcon: workIcon2,
      workTitle: t('work.monitoringEvaluation.title'),
      workDesc: t('work.monitoringEvaluation.desc'),
      workUrl: '/service_details',
      workBtn: <LuMoveRight />,
    },
    {
      id: 3,
      workNumber: '03',
      workIcon: workIcon3,
      workTitle: t('work.completedWorks.title'),
      workDesc: t('work.completedWorks.desc'),
      workUrl: '/service_details',
      workBtn: <LuMoveRight />,
    },
  ];

  return (
    <section className="mx-2 xl:mx-5 rounded-t-[40px] pt-28 pb-[120px] bg-BodyBg-0 relative z-10">
      <div className="Container">
        <div className="text-center">
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            {t('work.sectionTitle')}
          </h1>
          <p className="font-FiraSans text-TextColor2-0 pt-4">
            {t('work.sectionDesc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[54px]">
          {WorkData.map(
            ({
              id,
              workNumber,
              workIcon,
              workTitle,
              workDesc,
              workUrl,
              workBtn,
            }) => (
              <div key={id}>
                <WorkCard
                  workNumber={workNumber}
                  workIcon={workIcon}
                  workTitle={workTitle}
                  workDesc={workDesc}
                  workUrl={workUrl}
                  workBtn={workBtn}
                />
              </div>
            )
          )}
        </div>
        <div className="text-center mt-9 px-7 mx-auto">
          <p className="font-FiraSans text-HeadingColor-0 font-medium text-sm">
            {t('work.contactPrompt.part1')}{' '}
            <Link
              to={'/service'}
              className="text-PrimaryColor-0 underline-offset-4 underline"
            >
              {t('work.contactPrompt.link')}
            </Link>{' '}
            {t('work.contactPrompt.part2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
