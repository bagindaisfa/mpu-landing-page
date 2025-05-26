import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function VisionMission() {
  const { t } = useTranslation();

  const visionPoints = [t('visionMission.visionPoints.0')];

  const missionPoints = [
    t('visionMission.missionPoints.0'),
    t('visionMission.missionPoints.1'),
    t('visionMission.missionPoints.2'),
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
          {t('visionMission.sectionTitle')}
        </h5>
        <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[18px] leading-[26px] sm:text-[18px] sm:leading-[35px] md:text-[18px] md:leading-[40px] lg:text-[20px] lg:leading-[44px] xl:text-[25px] xl:leading-[50px] 2xl:text-[30px] 2xl:leading-[52px] mb-4">
          {t('visionMission.heading')}
        </h1>
        <p className="font-FiraSans text-TextColor2-0">
          {t('visionMission.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8"
        >
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
            {t('visionMission.vision')}
          </h5>
          <ul className="space-y-4 text-left">
            {visionPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="min-w-[25px] mt-1">
                  <CheckCircle
                    className="text-PrimaryColor-0"
                    style={{ width: 20 }}
                  />
                </div>
                <p className="font-FiraSans text-TextColor2-0">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8"
        >
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
            {t('visionMission.mission')}
          </h5>
          <ul className="space-y-4 text-left">
            {missionPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="min-w-[25px] mt-1">
                  <CheckCircle
                    className="text-PrimaryColor-0"
                    style={{ width: 20 }}
                  />
                </div>
                <p className="font-FiraSans text-TextColor2-0">{point}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
