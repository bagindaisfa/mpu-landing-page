import featureIcon from '/images/feature_icon01.png';
import featureIcon2 from '/images/feature_icon02.png';
import featureIcon3 from '/images/feature_icon03.png';
import featureIcon4 from '/images/feature_icon04.png';
import FeatureCard from './FeatureCard';
import featureShape from '/images/arrow.png';

const featureData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: 'People Development',
    featureDesc:
      'Tailored learning, leadership development, and coaching programs to build future-ready capabilities.',
    featureUrl: '/service/people-development',
    featureNumber: '01',
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: 'Talent Acquisition',
    featureDesc:
      'Strategic sourcing and recruitment to attract top talent aligned with your organizational goals.',
    featureUrl: '/service/talent-acquisition',
    featureNumber: '02',
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: 'Employee Engagement Events',
    featureDesc:
      'Creative, high-impact experiences that boost morale, teamwork, and organizational connection.',
    featureUrl: '/service/employee-engagement',
    featureNumber: '03',
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: 'Human Resource Consultancy',
    featureDesc:
      'Advisory support to optimize HR strategy, workforce planning, and organizational design.',
    featureUrl: '/service/human-capital-consultancy',
    featureNumber: '04',
  },
  {
    id: 5,
    featureIcon: featureIcon, // ganti dengan icon kelima jika tersedia
    featureTitle: 'Vetting & Background Check',
    featureDesc:
      'Comprehensive screening services to support compliant, secure, and trustworthy hiring decisions.',
    featureUrl: '/service/vetting-background-check',
    featureNumber: '05',
  },
  {
    id: 6,
    featureIcon: featureIcon2, // ganti dengan icon keenam jika tersedia
    featureTitle: 'Organisation Development',
    featureDesc:
      'Process and performance improvement to enhance operational efficiency and business agility.',
    featureUrl: '/service/organisation-development',
    featureNumber: '06',
  },
];

const Feature = () => {
  return (
    <section className="mx-2 xl:mx-5 my-5 pt-28 pb-[120px] lg:pb-[196px] bg-[url(/images/feature_bg.png)] bg-cover bg-no-repeat bg-left lg:bg-bottom rounded-[40px] relative z-10">
      <div className="Container relative">
        <img
          src={featureShape}
          className="absolute top-0 right-16 animate-swing hidden xl:block"
        />
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            Featured Service
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Empowering Growth through People,
            <br className="hidden sm:block" />
            Culture, and Performance.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {featureData
            .slice(0, 4)
            .map(
              ({
                id,
                featureIcon,
                featureTitle,
                featureDesc,
                featureUrl,
                featureNumber,
              }) => (
                <div key={id} className="feature-box">
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureNumber={featureNumber}
                  />
                </div>
              )
            )}
        </div>

        <div
          className="flex flex-wrap justify-center gap-7 mt-7"
          style={{ marginTop: 40 }}
        >
          {featureData
            .slice(4)
            .map(
              ({
                id,
                featureIcon,
                featureTitle,
                featureDesc,
                featureUrl,
                featureNumber,
              }) => (
                <div
                  key={id}
                  className="feature-box w-full md:w-[45%] lg:w-[22%]"
                >
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureNumber={featureNumber}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
