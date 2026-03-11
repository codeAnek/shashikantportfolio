import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';

  const educations = [
    {
      id: 1,
      image: '/Education.svg',
      name: 'Dewan Institute of Management Studies',
      position: 'MCA – Master of Computer Applications',
      startDate: '2017',
      endDate: '2019',
      duration: '2 years',
      location: 'India',
    },
    {
      id: 2,
      image: '/Education.svg',
      name: 'Dewan Institute of Management Studies',
      position: 'BCA – Bachelor of Computer Applications',
      startDate: '2014',
      endDate: '2017',
      duration: '3 years',
      location: 'India',
    },
    {
      id: 3,
      image: '/Education.svg',
      name: 'Uttar Pradesh Board',
      position: '12th Standard',
      startDate: '2012',
      endDate: '2014',
      duration: '2 years',
      location: 'India',
    },
    {
      id: 4,
      image: '/Education.svg',
      name: 'Uttar Pradesh Board',
      position: '10th Standard',
      startDate: '2010',
      endDate: '2012',
      duration: '2 years',
      location: 'India',
    },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6 "
    >
      <SectionHeader
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-center">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};