import React, { useState } from 'react';
import './PoliticaDePrivacidad.css';

const PoliticaDePrivacidad = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <h1>Política de Privacidad</h1>

                <PrivacySection 
                    title="1. Introducción"
                    content={<p>En <strong>Biomap</strong>, nosotros respetamos su privacidad y estamos comprometidos a proteger la información personal que usted nos proporciona a través de nuestro sitio web. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos y compartimos, y sus derechos con respecto a su información.</p>}
                />

                <PrivacySection 
                    title="2. Información que Recopilamos"
                    content={
                        <ul>
                            <li><strong>Información que usted nos proporciona:</strong> Incluye la información que nos proporciona al registrarse en nuestro sitio, suscribirse a nuestros servicios, completar formularios o comunicarse con nosotros.</li>
                            <li><strong>Información recopilada automáticamente:</strong> Incluye información técnica, como la dirección IP, datos de inicio de sesión, tipo de navegador y versión, configuración de la zona horaria, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
                            <li><strong>Información de terceros:</strong> Podemos recibir información sobre usted de terceros, como socios comerciales, proveedores de servicios técnicos, de pago y de entrega, redes de publicidad, proveedores de análisis y proveedores de información de búsqueda.</li>
                        </ul>
                    }
                />

                <PrivacySection 
                    title="3. Uso de la Información"
                    content={
                        <ul>
                            <li>Proporcionar y mejorar nuestros servicios.</li>
                            <li>Administrar su cuenta y proporcionarle soporte al cliente.</li>
                            <li>Enviar comunicaciones, incluidas actualizaciones de productos, ofertas especiales y otra información que pueda ser de su interés.</li>
                            <li>Cumplir con nuestras obligaciones legales y reglamentarias.</li>
                            <li>Analizar y comprender cómo se utiliza nuestro sitio para mejorar su funcionalidad y la experiencia del usuario.</li>
                        </ul>
                    }
                />

                <PrivacySection 
                    title="4. Compartir su Información"
                    content={
                        <ul>
                            <li><strong>Proveedores de servicios:</strong> Terceros que nos ayudan a operar nuestro sitio web y a proporcionar nuestros servicios.</li>
                            <li><strong>Cumplimiento de la ley:</strong> Autoridades legales y reguladoras cuando estamos obligados a hacerlo por ley.</li>
                            <li><strong>Transferencias comerciales:</strong> En el caso de una fusión, adquisición o venta de activos, su información puede ser transferida a la entidad adquirente.</li>

                        </ul>
                    }
                />

                <PrivacySection 
                    title="5. Seguridad de la Información"
                    content={<p>Tomamos medidas técnicas y organizativas adecuadas para proteger su información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de su información en Internet.</p>}
                />

                <PrivacySection 
                    title="6. Sus Derechos"
                    content={
                        <ul>
                            <li>Acceder a su información personal.</li>
                            <li>Solicitar la corrección de cualquier información inexacta.</li>
                            <li>Solicitar la eliminación de su información personal.</li>
                            <li>Oponerse al procesamiento de su información personal.</li>
                            <li>Solicitar la restricción del procesamiento de su información personal.</li>
                            <li>Solicitar la transferencia de su información personal a otra organización.</li>
                        </ul>
                    }
                />

                <PrivacySection 
                    title="7. Cambios a esta Política de Privacidad"
                    content={<p>Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos cualquier cambio publicando la nueva política en nuestro sitio web. Le recomendamos que revise esta política periódicamente para estar informado sobre cómo protegemos su información.</p>}
                />

                <PrivacySection 
                    title="8. Contacto"
                    content={<p>Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad, no dude en ponerse en contacto con nosotros a través de <strong>contacto@biomap.cl</strong>.</p>}
                />
            </div>
        </div>
    );
};

const PrivacySection = ({ title, content }) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="faq-section">
            <h2 className="faq-question" onClick={toggleContent}>{title}</h2>
            {isVisible && <div className="content">{content}</div>}
        </div>
    );
};

export default PoliticaDePrivacidad;
