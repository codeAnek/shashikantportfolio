import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  const experiences = [
    {
      id: 1,
      image: '/user-experience.png', 
      name: 'Interactive iBees Pvt Ltd',
      position: 'Frontend Developer',
      startDate: 'Sept 2022',
      endDate: 'Nov 2025',
      duration: '3 Years',
      location: 'Delhi',
      details: [
        'Improved development efficiency by introducing reusable React components.',
        'Integrated multiple REST APIs ensuring seamless data flow across modules.',
        'Optimized application performance using code splitting and lazy loading.',
        'Ensured full mobile responsiveness and cross-browser compatibility.',
        'Collaborated with cross-functional teams in Agile environment to deliver production-ready features.',
      ],
    },
    {
      id: 2,
      image: '/user-experience.png', 
      name: 'Sabato Exports',
      position: 'UI Developer',
      startDate: 'Aug 2021',
      endDate: 'Sept 2022',
      duration: '1 Year 1 Month',
      location: 'Delhi',
      details: [
        'Built responsive and interactive UI layouts using HTML, CSS, Bootstrap & JavaScript.',
        'Optimized UI performance across mobile, tablet, and desktop devices.',
        'Assisted in developing scalable UI modules for enterprise-level web applications.',
      ],
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {experiences.map((experience) => (
          <CommonCard  key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
