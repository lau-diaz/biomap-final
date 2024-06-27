import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <h1>FORMULARIO DE CONTACTO</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="asunto" className="form-label">Asunto</label>
                        <input type="text" className="form-control" id="asunto" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="mensaje" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
