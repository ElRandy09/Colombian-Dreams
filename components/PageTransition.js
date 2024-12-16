import './styiles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Lista de 6 pilares
const pillars = [1, 2, 3, 4, 5, 6];

const PageTransition = ({ children }) => {
  const [showContent, setShowContent] = useState(false);  // Estado para controlar la visibilidad del contenido

  useEffect(() => {
    // Mostrar el contenido después de que los pilares suban y bajen
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);  // Ajusta este tiempo según la duración total de la animación de los pilares

    return () => clearTimeout(timer);  // Limpiar el temporizador cuando el componente se desmonte
  }, []);

  return (
    <AnimatePresence mode="wait">
      {/* Overlay de transición que oscurece la pantalla */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page-transition-overlay"
      >
        {/* Pilares que suben y luego bajan */}
        {pillars.map((pillar, index) => (
          <motion.div
            key={`pillar-${pillar}`}
            className={`pillar pillar-${pillar}`}
            animate={{
              y: ['0vh', '2200vh', '0vh'],  // Suben hasta la parte superior, luego bajan
             
              transition: {
                duration: 1,  // Duración total para cada pilar
                delay: index * 0.1,  // Retraso secuencial para que los pilares se muevan uno por uno
              }
            }}
            exit={{
              opacity: 0,  // Asegurarse de que los pilares desaparezcan al salir
            }}
          />
        ))}
      </motion.div>

      {/* Mostrar contenido solo después de que los pilares hayan terminado */}
      {showContent && (
        <motion.div
          key="content"
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
