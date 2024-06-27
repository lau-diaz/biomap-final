import React from 'react';
import './PreguntasFrecuentes.css'; 
import { useState, useEffect } from 'react';

const PreguntasFrecuentes = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <h1>PREGUNTAS FRECUENTES (FAQ)</h1>
                
                <FaqSection 
                    question="¿Qué es Biomap?" 
                    answer="Biomap es una plataforma educativa con un mapa interactivo que muestra la biodiversidad de Chile y sus ecosistemas, enfocándose en la conservación de especies nativas. Ofrece cápsulas informativas y es accesible para todo público." 
                />

                <FaqSection 
                    question="¿Cómo puedo crear una cuenta en Biomap?" 
                    answer={(
                        <ol>
                            <li>Haz clic en el botón "Registrarse" en la esquina superior derecha de la página de inicio.</li>
                            <li>Rellena el formulario de registro con tu información personal.</li>
                            <li>Revisa y acepta nuestros Términos y Condiciones.</li>
                            <li>Haz clic en "Crear cuenta" y sigue las instrucciones que recibirás por correo electrónico.</li>
                        </ol>
                    )} 
                />

                <FaqSection 
                    question="He olvidado mi contraseña. ¿Qué debo hacer?" 
                    answer={(
                        <ol>
                            <li>Ve a la página de inicio de sesión.</li>
                            <li>Haz clic en "¿Olvidaste tu contraseña?".</li>
                            <li>Introduce la dirección de correo electrónico asociada a tu cuenta.</li>
                            <li>Recibirás un correo electrónico con un enlace para restablecer tu contraseña.</li>
                        </ol>
                    )} 
                />

                <FaqSection 
                    question="¿Cómo puedo contactar con el servicio de atención al cliente?" 
                    answer={(
                        <ul>
                            <li><strong>Correo electrónico:</strong> Envíanos un mensaje a contacto@biomap.cl</li>
                            <li><strong>Teléfono:</strong> Llámanos al +569 5555-9999 de lunes a viernes, de 09:00 a 18:00 hrs.</li>
                            <li><strong>Formulario de contacto:</strong> Completa el formulario de contacto haciendo click en CONTACTO al final de nuestra página.</li>
                        </ul>
                    )} 
                />
                
                              
                <FaqSection 
                    question="¿Cómo puedo actualizar mi información personal?" 
                    answer={(
                        <ol>
                            <li>Inicia sesión en tu cuenta.</li>
                            <li>Ve a "Configuración de cuenta" o "Perfil".</li>
                            <li>Actualiza la información que deseas cambiar y guarda los cambios.</li>
                        </ol>
                    )} 
                />

                <FaqSection 
                    question="¿Cómo puedo suscribirme o cancelar la suscripción a su boletín informativo?" 
                    answer={(
                        <div>
                            <p>Para suscribirte a nuestro boletín informativo:</p>
                            <ol>
                                <li>Ve a nuestra página principal.</li>
                                <li>Busca la sección de suscripción al boletín en el pie de página.</li>
                                <li>Introduce tu dirección de correo electrónico y haz clic en "Suscribirse".</li>
                            </ol>
                            <p>Para cancelar tu suscripción:</p>
                            <ol>
                                <li>Haz clic en el enlace "Cancelar suscripción" que se encuentra al final de cualquier correo electrónico del boletín.</li>
                                <li>Sigue las instrucciones para confirmar tu solicitud.</li>
                            </ol>
                        </div>
                    )} 
                />
            </div>
        </div>
    );
};

const FaqSection = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-section">
            <div 
                className="faq-question" 
                onClick={toggleAnswer}
                style={{ cursor: 'pointer', backgroundColor: isOpen ? '#f0f0f0' : 'white' }}
            >
                {question}
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

export default PreguntasFrecuentes;
