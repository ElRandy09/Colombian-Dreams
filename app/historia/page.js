'use client';
import '../globals.css';
import Link from 'next/link';
import './estilos2.css';
import Navbar from './navbar'; 

export default function About() {
    return (
    <>



        <div className="hero-container5">
                <div className="container3">
                <div className="logo4">
  <Link href="/">
    <img src="/logoo.png" alt="Colombian Dreams Logo" />
  </Link>
</div>
                    <Navbar />
                    <div className="text-main">
                        <h1 className="heading-primary-quienes-somos5">¿Quiénes somos?</h1>
                        <h3 className='vision5'>Somos tu impulso para hacer realidad tus ideas y proyectos.</h3>
                        <div className="about-text-wrapper">
                            <div className="text-section">
                                <h2 className="heading-secondary-quienes-somos5">
                                    En Colombian Dreams, creemos en el poder transformador de las ideas. Nos dedicamos a empoderar a personas y organizaciones para convertir sus sueños en realidades tangibles. Nuestro enfoque se basa en una gestión estratégica, personalizada y empática, asegurando que cada proyecto sea un éxito.
                                </h2>
                                <h1 className="heading-primary-quienes-somos6">Misión</h1>
                                            <p className='heading-secondary-quienes-somos6'>
                                                Empoderar a las personas y organizaciones para transformar ideas en realidades tangibles, a través de una gestión estratégica, personalizada y empática.
                                            </p>

                                            <h1 className="heading-primary-quienes-somos7">Visión</h1>
                                            <p className='heading-secondary-quienes-somos7'>
                                                Ser reconocido como un aliado clave en la construcción de sueños y proyectos exitosos, estableciendo un estándar de excelencia que combine estrategia, humanidad y resultados.
                                            </p>  
                                <h2 className='texto3'></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footerHistoria">
                    <p>&copy; 2024 Colombian Dreams. Todos los derechos reservados.</p>
                    <p>
                        Contáctanos: <a href="mailto:info@colombiandreams.co">info@colombiandreams.co</a>
                    </p>
                </footer>
            </div>
           
            </>
            
       
    );
}
