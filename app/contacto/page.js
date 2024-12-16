'use client';
import '../globals.css';
import Link from 'next/link';
import './estiloscontacto.css';
import Navbar from './navbar';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';

export default function About() {
    // Estado para almacenar el nombre, teléfono y correo
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Función para manejar el cambio en el nombre
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Función para manejar el cambio en el teléfono
    const handlePhoneChange = (value) => {
        setPhone(value);
    };

    // Función para manejar el cambio en el correo
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Datos a enviar
        const formData = {
            name: name,
            phone: phone,
            email: email,
        };

        try {
            // Enviar los datos al servidor utilizando fetch
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convertir los datos a formato JSON
            });

            // Verificar la respuesta del servidor
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                alert('Formulario enviado correctamente');
            } else {
                alert('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el formulario');
        }
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
                        <h1 className="contactanos">Contáctanos</h1>
                        <h3 className="datos">¡Déjanos tus datos y te contactaremos lo más pronto posible!</h3>
                        <form className="formulario-contacto" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Escribe tu nombre"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono:</label>
                                <PhoneInput
                                    international
                                    defaultCountry="CO"
                                    value={phone} // Vinculamos el valor del estado al componente
                                    onChange={handlePhoneChange} // Manejador para actualizar el estado
                                    name="phone"
                                    id="phone"
                                    placeholder="3001234567"
                                    className="phone-input"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="correo@ejemplo.com"
                                    required
                                />
                            </div>
                            <button className="btn-submit" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
