'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#ff0080" },
  };

  return (
    <motion.nav
      className="navbar4"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration:0.6 }}
    >
      <div className="navbar-links4">
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="/servicios" className="navbar-link4">
            Servicios
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="/historia" className="navbar-link4">
          ¿Quiénes somos?
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="/quienes-somos" className="navbar-link4">
          Nuestro equipo
          </Link>
        </motion.div>
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="/contacto" className="navbar-link4">
            Contacto
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
