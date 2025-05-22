import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Contact from './Contact';
import Map from './Map';

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Schedule With Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Schedule With Us'}
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactInner;
