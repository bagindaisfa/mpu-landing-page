import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function VisionMission() {
  const visionPoints = [
    'To be a trusted and innovative consulting firm in HR and leadership development, known for delivering practical and effective solutions that drive operational excellence and sustainable growth.',
    'To create an inclusive and collaborative work environment where employees are valued, respected, and empowered to reach their full potential.',
    'To uphold the highest standards of ethics and integrity in all aspects of business, building trust with clients, partners, and the community.',
  ];

  const missionPoints = [
    'To offer comprehensive HR consulting and development services tailored to client needs, including recruitment, background checks, training and development, performance management, compensation and benefits, and succession planning.',
    'To design and deliver transformative leadership training programs focused on practical skills, effectiveness, and developing competent leaders.',
    'To integrate innovative technologies and methodologies into HR and leadership solutions to enhance efficiency, productivity, and business impact.',
    'To build and maintain a high-quality team with deep expertise, relevant experience, and a commitment to excellent service.',
    'To evaluate the effectiveness of delivered solutions using data and feedback for continuous service improvement and optimal results.',
    'To contribute positively to society through CSR initiatives aligned with company values and sustainability goals.',
    'To establish strategic partnerships with other organizations to expand reach, enhance capabilities, grow networks, and add value to clients.',
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
