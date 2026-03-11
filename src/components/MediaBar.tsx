import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandCampaignmonitor,
} from '@tabler/icons-react';

export const MediaBar = () => {
  const media = [
    {
      icon: <IconBrandGithub />,
      link: 'https://github.com/codeAnek',
      label: 'GitHub',
    },
    {
      icon: <IconBrandLinkedin />,
      link: 'https://www.linkedin.com/in/shashi-kant-mishra-538717152/',
      label: 'LinkedIn',
    },
    {
      icon: <IconBrandInstagram />,
      link: 'https://www.instagram.com/anekmishra77/',
      label: 'Instagram',
    },
    {
      icon: <IconBrandWhatsapp />,
      link: 'https://wa.me/8368843054',
      label: 'WhatsApp',
    },
    {
      icon: <IconBrandCampaignmonitor />,
      link: 'mailto:anekmishra44@gmail.com',
      label: 'Email',
    },
  ];

  const { container } = MediaBarMotion;

  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col w-10 p-2 bg-teal-500 items-center rounded-md bottom-0 md:bottom-auto md:top-80 space-y-4"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          target='_blank'
          className="text-black hover:text-white"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};