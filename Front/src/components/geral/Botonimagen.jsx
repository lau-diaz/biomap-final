import React, { useState } from 'react'

function Botonimagen() {
    const [mostrar, setMostrar]=useState(null)
  return (
    <div>
        
        <div className="container text-center my-5">
    <div className="row g-3">
      <div className="col">
        
        <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYC-xXCGNqjzjFuNx8chaKge3zRL3asxwGA_pPDjl51fT3qoJuV71M9EUvDu3F-32T4Vu8Grlch66St8LJV1jIH33FOq7icBcM=w1920-h878-rw-v1" className="img-fluid" alt="Button " onClick={()=> setMostrar("info1")} lang="150" width="150"/>
      </div>
      <div className="col">
        <img src="https://lh3.google.com/u/0/d/19R0CXHPHmQjZfoClAnCFIs1biiH79Jxw=w1227-h878-iv1" className="img-fluid" alt="Button 2" onClick={()=> setMostrar("info2")} lang="150" width="150"/>
      </div>
      <div className="col">
        <img src="https://lh3.google.com/u/0/d/17qpUOK6CDcFsnorMw8AlCGp_uOTc5f3j=w1920-h878-iv1" className="img-fluid" alt="Button 3" onClick={()=> setMostrar("info3")} lang="150" width="150"/>
      </div>
      <div className="col">
        <img src="https://lh3.google.com/u/0/d/1q1MiCN7A6RQUB-0LO3vYhJb4D_nqNqmi=w1227-h878-iv1" className="img-fluid" alt="Button 4" onClick={()=> setMostrar("info4")} lang="150" width="150"/>
      </div>
      <div className="col">
        <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbzOKsE5KLh_DLQD_a4Bq2LBSELMFMUbmUa9eY0giJsrdmorZ8VH58eN5g9m2sVC0h05Q_NxEIjYcWbzP8WOurZAYlOMCV66w=w1920-h878-rw-v1" className="img-fluid" alt="Button 5" onClick={()=> setMostrar("info5")} lang="150" width="150"/>
      </div>
    </div>


    <div id="info1" className="info-container" style={{display:mostrar === "info1"?"flex":"none"}}>
      <div className="row">
        <div className="col-md-6 , d-flex flex-column justify-content-center">
           
            <p className="card card-custom" style={{ textAlign: 'justify' }}>Soy una desarrolladora con unas impetuosas ganas de aprender. Considero que complemento mis habilidades técnicas con una mirada fresca desde el mundo de las artes y las humanidades. Acostumbro a vivir a través de ese tipo de dualidades, como por ejemplo a través del trabajo individual y en equipo. Disfruto mis momentos en línea y también desconectada. Busco oportunidades para crecer y aprender, pero también donde pueda poner a prueba mis habilidades y conocimientos de manera efectiva.</p>
        </div>
        <div className="col-md-6 , d-flex justify-content-center align-items-center">
          <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYC-xXCGNqjzjFuNx8chaKge3zRL3asxwGA_pPDjl51fT3qoJuV71M9EUvDu3F-32T4Vu8Grlch66St8LJV1jIH33FOq7icBcM=w1920-h878-rw-v1" className="img-fluid" alt="Info 1" lang="200" width="200"/>
        </div>
      </div>
    </div>

    <div id="info2" className="info-container" style={{display:mostrar === "info2"?"flex":"none"}}>
      <div className="row">
        <div className="col-md-6 , d-flex flex-column justify-content-center">
          <p className="card card-custom" style={{ textAlign: 'justify' }}>Profesional con experiencia en diversas áreas de la industria de la construcción, ahora enfocada en adentrarse en el mundo del desarrollo digital. Apasionada por el software y las aplicaciones multiplataforma, me considero una persona decidida y comprometida, que no se detiene hasta alcanzar sus metas. Busco activamente oportunidades para crecer y desarrollarme tanto a nivel personal como profesional en el campo del desarrollo digital.</p>
            
        </div>
        <div className="col-md-6 , d-flex justify-content-center align-items-center">
          <img src="https://lh3.google.com/u/0/d/19R0CXHPHmQjZfoClAnCFIs1biiH79Jxw=w1227-h878-iv1" className="img-fluid" alt="Info 2" lang="200" width="200"/>
        </div>
      </div>
    </div>

    <div id="info3" className="info-container" style={{display:mostrar === "info3"?"flex":"none"}}>
      <div className="row">
        <div className="col-md-6 , d-flex flex-column justify-content-center">
          <p className="card card-custom" style={{ textAlign: 'justify' }}>Profesional apasionada por la interacción entre la tecnología, el medio ambiente y la creatividad. Con formación en agroecología y programación, junto con habilidades en ilustración y modelado en 3D. Proactiva, autodidacta y colaborativa, con habilidades blandas sólidas y una fuerte capacidad para aprender rápidamente y encontrar soluciones creativas.</p>
        </div>
       
        <div className="col-md-6 , d-flex justify-content-center align-items-center">
          <img src="https://lh3.google.com/u/0/d/17qpUOK6CDcFsnorMw8AlCGp_uOTc5f3j=w1920-h878-iv1" className="img-fluid" alt="Info 3" lang="200" width="200"/>
        </div>
      </div>
    </div>

    <div id="info4" className="info-container" style={{display:mostrar === "info4"?"flex":"none"}}>
      <div className="row">
        <div className="col-md-6 , d-flex flex-column justify-content-center">
          <p className="card card-custom" style={{ textAlign: 'justify' }}>Amplia experiencia en el entorno virtual, estableciendo conexiones sólidas con clientes y optimizando la presencia en línea de las empresas a través de ventas B2B desde hace 6 años. Me encuentro inmersa en el aprendizaje profundo de la programación, SEO y desarrollo web. Mi pasión radica en generar resultados excepcionales, lo cual me impulsa a ser autodidacta ya mejorar continuamente. Estoy decidida a aprovechar al máximo mis capacidades para alcanzar y superar los objetivos propuestos. Cuento con sólidos conocimientos en diversos lenguajes de programación y un alto desarrollo de habilidades blandas, soy capaz de trabajar de forma dinámica y estoy en busqueda de desafíos y oportunidades de expansión profesional.</p>
        </div>
        <div className="col-md-6 , d-flex justify-content-center align-items-center">
          <img src="https://lh3.google.com/u/0/d/1q1MiCN7A6RQUB-0LO3vYhJb4D_nqNqmi=w1227-h878-iv1" className="img-fluid" alt="Info 4" lang="200" width="200"/>
        </div>
      </div>
    </div>

    <div id="info5" className="info-container" style={{display:mostrar === "info5"?"flex":"none"}}>
      <div className="row">
        <div className="col-md-6 , d-flex flex-column justify-content-center">
          <p className="card card-custom" style={{ textAlign: 'justify' }}>Soy una desarrolladora fullstack especializada en JavaScript con un fuerte compromiso hacia la responsabilidad y la empatía. Mi enfoque cordial y mi habilidad para comunicarme eficazmente me permiten colaborar de manera efectiva en equipos multidisciplinarios. Además, poseo un gran manejo de habilidades blandas, lo que me permite adaptarme fácilmente a nuevos entornos y resolver problemas de manera creativa.</p>
        </div>
        <div className="col-md-6 , d-flex justify-content-center align-items-center">
          <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbzOKsE5KLh_DLQD_a4Bq2LBSELMFMUbmUa9eY0giJsrdmorZ8VH58eN5g9m2sVC0h05Q_NxEIjYcWbzP8WOurZAYlOMCV66w=w1920-h878-rw-v1" className="img-fluid" alt="Info 5" lang="200" width="200"/>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Botonimagen