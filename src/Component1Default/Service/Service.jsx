import serviceThumb from '/images/service_thumb01.png';
import serviceThumb2 from '/images/service_thumb02.png';
import serviceThumb3 from '/images/service_thumb03.png';
import ServiceCard from './ServiceCard';
import { LuMoveRight } from 'react-icons/lu';
import serviceShape from '/images/service_rotate.png';

const ServiceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceTitle: 'Custom Leadership Development Framework',
    serviceDesc:
      'We design customized leadership frameworks to support the development of leadership competencies at various levels of the organization.',
  },
  {
    id: 2,
    serviceThumb: serviceThumb2,
    serviceTitle: 'Building a Future-Ready Leadership Bench',
    serviceDesc:
      'Building future leadership talent that is ready for transformation through acceleration programs and strengthening role readiness.',
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceTitle: 'Driving Efficiency and Workforce Agility',
    serviceDesc:
      'Improve operational efficiency and organizational agility through HR optimization and data-driven management practices.',
  },
];

const Service = () => {
  return (
    <section className="mx-2 xl:mx-5 bg-[url(/images/service-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[206px] pb-[150px] relative lg:-mt-28 rounded-[40px] sm:rounded-b-[40px]">
      <div className="size-[97px] rounded-full bg-PrimaryColor-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[36px]">
        <img src={serviceShape} className="animate-rotational" />
      </div>
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            SOLUTION APPROACH
          </h5>
          <h1 className="font-FiraSans font-semibold text-white text-sm leading-[24px] sm:text-2xl sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Human Capital & Leadership Consulting
            <br />
            for Sustainable Growth
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-14">
          {ServiceData.map(
            ({ id, serviceThumb, serviceTitle, serviceDesc }) => {
              return (
                <div key={id}>
                  <ServiceCard
                    serviceThumb={serviceThumb}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
