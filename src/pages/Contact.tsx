import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  // IconBrandCampaignmonitor,
  // IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
  IconMail,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'WhatsApp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: '+91 8368843054, 8791564415',
      link: 'https://wa.me/+918368843054',
    },
    {
      id: 2,
      name: 'Email',
      image: <IconMail style={iconStyles} />,
      description: 'anekmishra44@gmail.com',
      link: 'mailto:anekmishra44@gmail.com',
    },
    {
      id: 3,
      name: 'LinkedIn',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'Shashi Kant Mishra',
      link: 'https://linkedin.com/in/shashi-kant-mishra-538717152',
    },
    {
      id: 4,
      name: 'GitHub',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'codeAnek',
      link: 'https://github.com/codeAnek',
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
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
