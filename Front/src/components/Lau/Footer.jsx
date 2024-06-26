import React from "react"
import './Footer.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
                <footer id="footer" className="bg-body-tertiary text-start">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <h5 className="text-uppercase">Redes Sociales</h5>
                                <ul className="list-unstyled mb-0 listasFooter">
                                    <li>
                                        <a href="#!" className="text-body">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body">Twitter / X</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Nosotros</h5>

                                <ul className="list-unstyled mb-0 listasFooter">
                                    <li>
                                        <Link to='/contacto' className="text-body">Contacto</Link>
                                    </li>
                                    <li>
                                        <Link to='/quienes-somos' className="text-body">Información Corporativa</Link>
                                    </li>
                                    <li>
                                        <Link to='/quienes-somos' className="text-body">Nuestro Equipo</Link>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body">Afiliados</a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Ayuda</h5>

                                <ul className="list-unstyled mb-0 listasFooter">
                                    <li>
                                        <Link to='/faq' className="text-body">Preguntas frecuentes</Link>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-body">Términos de uso</a>
                                    </li>
                                    <li>
                                        <Link to='/privacidad' className="text-body">Política de privacidad</Link>
                                    </li>
                                    <li>
                                        <Link to='/cookies' className="text-body">Política de cookies</Link>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="container-fluid">
                                    <img id="imagenFooter" src="https://i.imgur.com/cvngJzg.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
                        © 2024 Copyright:
                        <a className="text-body" href="inicio.html">Biomap</a>
                    </div> */}
                </footer>
    )
}

export default Footer