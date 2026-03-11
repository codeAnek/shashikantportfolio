import { IconMenu2, IconRobot } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Drawer } from './Drawer';
import { INavLink } from '../types/common';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navLink: INavLink[] = [
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Experience', path: 'experience' },
    { name: 'Education', path: 'education' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Contact', path: 'contact' },
  ];

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  return (
    <motion.header className="w-full sticky top-0 z-20 bg-gray-950 flex items-center justify-between px-4 md:px-20 py-4">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center space-x-2 font-bold text-md md:text-3xl text-teal-400 cursor-pointer"
      >
        <IconRobot width={35} height={35} />
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70} 
          className="cursor-pointer"
        >
          Shashi Kant Mishra
        </ScrollLink>
      </motion.div>

     
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:flex space-x-10"
      >
        {navLink.map((item) => (
          <ScrollLink
            key={item.path}
            to={item.path}
            smooth={true}
            duration={500}
            offset={-70} 
            className="text-white font-bold hover:text-teal-400 cursor-pointer"
          >
            {item.name}
          </ScrollLink>
        ))}
      </motion.nav>

      
      <IconMenu2
        onClick={toggleDrawer}
        className="flex lg:hidden cursor-pointer"
      />

     
      {openDrawer && <Drawer onClick={toggleDrawer} links={navLink} />}
    </motion.header>
  );
};