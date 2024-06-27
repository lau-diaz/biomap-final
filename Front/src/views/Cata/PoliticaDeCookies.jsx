import React, { useState } from 'react';
import './PoliticaDeCookies.css'

const PoliticaDeCookies = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <h1>POLÍTICA DE COOKIES</h1>

                <CookieSection 
                    title="1. Introducción"
                    content={<p>En <strong>Biomap</strong>, utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web [URL del Sitio Web] (el "Sitio"). Esta Política de Cookies explica qué son las cookies, cómo las utilizamos y cómo puede gestionarlas.</p>}
                />

                <CookieSection 
                    title="2. ¿Qué son las cookies?"
                    content={<p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Las cookies nos permiten reconocer su dispositivo y recordar sus preferencias o acciones anteriores.</p>}
                />

                <CookieSection 
                    title="3. Tipos de Cookies que Utilizamos"
                    content={
                        <ul>
                            <li><strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento básico de nuestro sitio web. Sin estas cookies, el sitio no puede funcionar correctamente.</li>
                            <li><strong>Cookies de rendimiento:</strong> Nos permiten recopilar información sobre cómo los usuarios interactúan con nuestro sitio, ayudándonos a mejorar su funcionalidad.</li>
                            <li><strong>Cookies de funcionalidad:</strong> Se utilizan para recordar las elecciones que hace el usuario (como su nombre de usuario, idioma o región) y proporcionar características mejoradas y más personales.</li>
                            <li><strong>Cookies de publicidad:</strong> Se utilizan para ofrecer anuncios relevantes para usted y sus intereses.</li>
                        </ul>
                    }
                />

                <CookieSection 
                    title="4. Cómo Utilizamos las Cookies"
                    content={<p>Utilizamos las cookies para:</p>}
                    extraContent={
                        <ul>
                            <li>Recordar sus preferencias y configuraciones.</li>
                            <li>Mejorar la funcionalidad y rendimiento de nuestro sitio.</li>
                            <li>Realizar análisis y estadísticas del uso del sitio.</li>
                            <li>Proporcionar contenido y publicidad personalizados.</li>
                        </ul>
                    }
                />

                <CookieSection 
                    title="5. Gestión de Cookies"
                    content={<p>Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su dispositivo y configurar la mayoría de los navegadores para evitar que se almacenen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.</p>}
                />

                <CookieSection 
                    title="6. Cambios a esta Política de Cookies"
                    content={<p>Podemos actualizar esta Política de Cookies ocasionalmente. Le notificaremos cualquier cambio publicando la nueva política en nuestro sitio web. Le recomendamos que revise esta política periódicamente para estar informado sobre cómo utilizamos las cookies.</p>}
                />

                <CookieSection 
                    title="7. Contacto"
                    content={<p>Si tiene alguna pregunta o inquietud sobre esta Política de Cookies, no dude en ponerse en contacto con nosotros a través de [correo electrónico de contacto] o [dirección física de contacto].</p>}
                />
            </div>
        </div>
    );
};

const CookieSection = ({ title, content, extraContent }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="faq-section">
            <h2 className="faq-question" onClick={toggleContent}>{title}</h2>
            {isVisible && <div className="content">{content}{extraContent}</div>}
        </div>
    );
};

export default PoliticaDeCookies;
