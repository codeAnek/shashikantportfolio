import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';

  const portfolios = [
    {
      id: 1,
      name: 'Century Ply',
      image: '/portfolio.webp', // replace with real project screenshot if available
      link: 'https://www.centuryply.com/',
      tech: 'Next.js, React.js, SCSS, REST APIs',
      description: [
        'Developed responsive product pages and improved navigation UX.',
        'Optimized UI performance and enhanced mobile compatibility.',
      ],
    },
    {
      id: 2,
      name: 'Intercont Liner',
      image: '/portfolio.webp',
      link: 'https://www.intercontliner.com/',
      tech: 'HTML, CSS, JavaScript, jQuery',
      description: [
        'Designed professional layouts for global logistics platform.',
        'Improved user journey and content structure.',
      ],
    },
    {
      id: 3,
      name: 'Vinsys',
      image: '/portfolio.webp',
      link: 'https://www.vinsys.com/',
      tech: 'React.js',
      description: [
        'Built dynamic course pages and integrated backend data.',
        'Enhanced learning experience through structured UI.',
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
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};