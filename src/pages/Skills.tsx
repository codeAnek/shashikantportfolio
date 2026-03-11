import { motion } from 'framer-motion';
import { IconCodeCircle, IconBrandReact, IconBrandJavascript, IconBrandHtml5, IconBrandCss3, IconBrandPhp, IconDatabase, IconBrandTailwind, IconGitBranch, IconBrandBootstrap, IconTools, IconDeviceDesktop, IconBolt } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
    const skills = [
    { label: 'React.js', icon: <IconBrandReact size={32} /> },
    { label: 'JavaScript (ES6+)', icon: <IconBrandJavascript size={32} /> },
    { label: 'HTML5', icon: <IconBrandHtml5 size={32} /> },
    { label: 'CSS3', icon: <IconBrandCss3 size={32} /> },
    { label: 'SCSS', icon: <IconBolt size={32} /> },
    { label: 'Tailwind CSS', icon: <IconBrandTailwind size={32} /> },
    { label: 'Bootstrap', icon: <IconBrandBootstrap size={32} /> },
    { label: 'Context API', icon: <IconCodeCircle size={32} /> },
    { label: 'Redux', icon: <IconTools size={32} /> },
    { label: 'REST APIs', icon: <IconDeviceDesktop size={32} /> },
    { label: 'Axios', icon: <IconDeviceDesktop size={32} /> },
    { label: 'Third-party API', icon: <IconDeviceDesktop size={32} /> },
    { label: 'Core PHP', icon: <IconBrandPhp size={32} /> },
    { label: 'SQL / MySQL', icon: <IconDatabase size={32} /> },
    { label: 'Git', icon: <IconGitBranch size={32} /> },
    { label: 'GitHub', icon: <IconGitBranch size={32} /> },
    { label: 'Postman', icon: <IconTools size={32} /> },
    { label: 'Chrome DevTools', icon: <IconDeviceDesktop size={32} /> },
    { label: 'VS Code', icon: <IconDeviceDesktop size={32} /> },
    { label: 'Lazy Loading', icon: <IconBolt size={32} /> },
    { label: 'Code Splitting', icon: <IconBolt size={32} /> },
    { label: 'Lighthouse Optimization', icon: <IconBolt size={32} /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
