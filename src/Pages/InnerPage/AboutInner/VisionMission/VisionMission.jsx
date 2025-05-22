import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function VisionMission() {
  const visionPoints = [
    'To be a trusted and innovative HR and leadership partner that empowers people and organizations through practical solutions to support operational excellence for sustainable growth.',
  ];

  const missionPoints = [
    'Deliver tailored and practical HR & leadership solutions',
    'Empower people and strengthen organizational capability',
    'Promote operational excellence and long-term sustainability',
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
          OUR VISION & MISSION
        </h5>
        <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[18px] leading-[26px] sm:text-[18px] sm:leading-[35px] md:text-[18px] md:leading-[40px] lg:text-[20px] lg:leading-[44px] xl:text-[25px] xl:leading-[50px] 2xl:text-[30px] 2xl:leading-[52px] mb-4">
          Driving Excellence in People and Leadership Development
        </h1>
        <p className="font-FiraSans text-TextColor2-0">
          We are committed to delivering innovative and practical HR and
          leadership solutions that empower our clients and communities to
          thrive with integrity, collaboration, and lasting impact.
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
            Vision
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
            Mission
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
