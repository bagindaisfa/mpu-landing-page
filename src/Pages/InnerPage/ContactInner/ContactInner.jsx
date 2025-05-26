import { useTranslation } from 'react-i18next';
import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Contact from './Contact';
import Map from './Map';

const ContactInner = () => {
  const { t } = useTranslation();
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={t('schedule.scheduleWithUs')}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={t('schedule.scheduleWithUs')}
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactInner;
