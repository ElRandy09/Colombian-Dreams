"use client";
import Navbar from './navbar';
import './globals.css';
import Link from 'next/link';
import './inicio.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Head from 'next/head';  // Asegúrate de importar el componente Head

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
      <Head>
        <title>Colombian Dreams</title>
        <meta name="description" content="Transforma tus ideas en realidades con un enfoque en la gestión estratégica y humana de proyectos." />
        <meta name="keywords" content="gestión de proyectos, éxito, transformación, colombian dreams, asesoría" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Colombian Dreams" />
        <meta property="og:description" content="Transforma tus ideas en realidades con un enfoque en la gestión estratégica y humana de proyectos." />
        <meta property="og:image" content="/logoo.png" />
        <meta property="og:url" content="https://www.colombiandreams.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero-container">
        <div className="container">
          <div className="loguis">
            <Link href="/">
              <img src="/logoo.png" alt="Colombian Dreams Logo" />
            </Link>
          </div>

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

        <footer className="footer">
          <p>&copy; 2024 Colombian Dreams. Todos los derechos reservados.</p>
          <p>
            Contáctanos: <a href="mailto:info@colombiandreams.co">info@colombiandreams.co</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
