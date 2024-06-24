import React, { useEffect } from 'react';
import './BotonSubir.css';

function BotonSubir() {
    useEffect(() => {
        let mybutton = document.getElementById("myBtn");

        window.onscroll = function() {seVeElBotonONo()};

        function seVeElBotonONo() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez, después de montar el componente
    function paArriba() {
        document.documentElement.scrollTop = 0;
      }

    return (
        <div>
            <div id="button">
                <button onClick={paArriba} id="myBtn" title="Subir">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default BotonSubir