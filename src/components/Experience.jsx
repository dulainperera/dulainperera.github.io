import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    period: '2023 - 2027',
    title: 'BSc Computer Science',
    institution: 'Informatics Institute of Technology',
    details: '',
  },
  {
    period: '2009 - 2022',
    title: 'School Education',
    institution: 'Maliyadeva College',
    details: '',
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-12 px-4  text-white" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        {EXPERIENCES.sort((a, b) => {
          const startYearA = parseInt(a.period.split(' - ')[0], 10);
          const startYearB = parseInt(b.period.split(' - ')[0], 10);
          return startYearB - startYearA;
        }).map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row w-full items-center justify-center gap-2 lg:gap-4"
          >
            {/* Time Period */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <p className="text-sm text-neutral-400 text-center">{experience.period}</p>
            </motion.div>

            {/* Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 flex flex-col items-center"
            >
              <p className="mb-1 font-semibold text-lg text-center">{experience.title}</p>
              <p className="text-sm text-blue-200 text-center">{experience.institution}</p>
              {experience.details && (
                <p className="text-sm text-gray-300 text-center mt-1">{experience.details}</p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
