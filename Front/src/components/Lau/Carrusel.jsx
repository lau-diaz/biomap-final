import React from 'react'
import './Carrusel.css'

function Carrusel() {
    return (
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-6 d-flex justify-content-center'>
                <div className='container-flex m-2'>
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaEiVbgJ2nCqYIUbI3f4HrDFC3ZjCQ54wDXu3xRls1qp9FEo40DBvWZ7W5kXY0K7zmj5CuXRZ4nAEzcaAYhNzOEU2wi2_7bsl8=w1920-h838-rw-v1" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Zorro Culpeo</h5>
                                    <p>¡Si quieres saber más sobre el Zorro Culpeo, regístrate!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaqAd3zDP-2Fn4Ug8Vg_PRoFj36XHZJqOsiQSzkztV7cxYRw1_DQSPLlFYag3rxQToJqD3PmqwGCvRHudTuwLZpDE3PTaCZ5w=w1920-h838-rw-v1" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Picaflor de Arica</h5>
                                    <p>¡Si quieres saber más sobre el Picaflor de Arica, regístrate!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYa90kSwvuknXGyptNECrFtz6Em_bHUzpR67Kri47azm8Yiw5rRwrKcSQzpAf0wHTWgxphRbHcEqLzg2nJy2idOyqZcU4U6jQ4=w1920-h838-rw-v1" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Chungungo</h5>
                                    <p>¡Si quieres saber más sobre el Chungungo, regístrate!</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-3'></div>
        </div>
    )
}

export default Carrusel