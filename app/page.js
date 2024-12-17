"use client";
import Navbar from './navbar';
import './globals.css';
import Link from 'next/link';
import './inicio.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
  
        <div>
          <div className="logo">
            <Link href="/">Colombian Dreams</Link>
          </div>

          <div className="hero-container">
            <div className="container">
              <Navbar />
              <div className="text-main">
                <h1 className="heading-primary-inicio">
                  Transforma tus ideas en realidades
                </h1>
                <h2 className="heading-secondary-inicio">
                  Con un enfoque en la gestión estratégica y humana de proyectos, te acompañamos
                </h2>
                <h2 className="heading-secondary-inicio">
                  en cada paso para que logres el éxito.
                </h2>
                <button
                  className="boton-inicio"
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send/?phone=573229567177&text=Hola,%20quiero%20agendar%20una%20sesión.&type=phone_number&app_absent=0",
                      "_blank"
                    );
                  }}
                >
                  AGENDAR SESIÓN
                </button>
              </div>
            </div>
          </div>
        </div>
  
  );
}
