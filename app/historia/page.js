'use client';
import '../globals.css';
import Link from 'next/link';
import './estilos2.css';
import Navbar from './navbar'; 
import { useState } from 'react';

export default function About() {
    const [isOpen1, setIsOpen1] = useState(false);  // Controlar el estado del dropdown
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <>
       
    <div className="logo">
                <Link href="/">Colombian Dreams</Link>
            </div>
            <div className="hero-container">
            <div className="container">
            <Navbar /> 
                <div className="text-main">
                    <h1 className="heading-primary-quienes-somos">¿Quiénes somos?</h1>
                    <h3 className='vision'>Somos tu impulso para hacer realidad tus ideas y proyectos.</h3>
                    <div className="about-text-wrapper">
                        <div className="text-section">
                            <h2 className="heading-secondary-quienes-somos">
                            En Colombian Dreams, creemos en el poder transformador de las ideas. Nos dedicamos a empoderar a personas y organizaciones para convertir sus sueños en realidades tangibles. Nuestro enfoque se basa en una gestión estratégica, personalizada y empática, asegurando que cada proyecto sea un éxito.
            
                            </h2>
                            <div className="dropdown">
                                <button className="dropbtn" onClick={toggleDropdown1}>
                                    Misión ▼
                                </button>
                                {isOpen1 && (
                                    <div className="dropdown-content">
                                        <p>
                                        Empoderar a las personas y organizaciones para transformar ideas en realidades tangibles, a través de una gestión estratégica, personalizada y empática.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="dropdown2">
                                <button className="dropbtn2" onClick={toggleDropdown2}>
                                    Visión ▼
                                </button>
                                {isOpen2 && (
                                    <div className="dropdown-content2">
                                        <p>
                                        Ser reconocido como un aliado clave en la construcción de sueños y proyectos exitosos, estableciendo un estándar de excelencia que combine estrategia, humanidad y resultados.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <h2 className='texto3'></h2>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="/logo.jpeg" alt="Logo" className="profile-image" />
                </div>
                </div>
            </div>
            
        </>
    );
}
