import { useTranslation } from 'react-i18next';
import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import About from '../../../Component2Default/About/About';
import Counter from '../../../Component1Default/Counter/Counter';
import ContentSlider from '../../../Component1Default/ContentSlider/ContentSlider';
import WhyChoose from './WhyChoose/WhyChoose';
import TeamMember from './TeamMember/TeamMember';
import VisionMission from './VisionMission/VisionMission';

const AboutInner = () => {
  const { t } = useTranslation();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={t('aboutPage.aboutUs')}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={t('aboutPage.aboutUs')}
      />
      <About />
      <VisionMission />
      <Counter />
      {/* <TeamMember /> */}
      <ContentSlider />
      <WhyChoose />
    </>
  );
};

export default AboutInner;
