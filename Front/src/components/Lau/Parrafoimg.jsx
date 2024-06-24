import React from "react"
import './Parrafoimg.css'

const Parrafoimg = ({titulo, texto, imagen}) => {
    return (
        <div className="fondotexto">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="container">
                        <h1 className="text-center mt-5 pt-5">
                            {titulo}
                        </h1>
                    </div>
                    <div className="text-center texto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc mi, dapibus et enim nec, mattis lacinia turpis. Curabitur in condimentum tortor, id aliquam eros. Nullam non nulla quis dui vulputate molestie. Sed fringilla urna nec erat viverra auctor. Aliquam malesuada facilisis molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce pretium quam ut dui dictum pharetra. Nunc eu turpis facilisis risus luctus tincidunt at quis nisi. Vivamus vulputate odio nibh, non feugiat massa luctus rhoncus. Maecenas in vehicula dolor.</p>
                    </div>
                </div>
                <div className="text-center pt-3">
                    <img id="logoPrincipio"
                        src={imagen} />
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    )
}

export default Parrafoimg