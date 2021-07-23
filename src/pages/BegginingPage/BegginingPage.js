import React from 'react';
import logo from './../../assets/images/HAYEQUIPOportada.png';
import './styles.css'


const PaginaInicio = (props) => {
    const ingresar = () => {
        props.history.push("/login");
    }

    const registrarse = () => {props.history.push("/register");
}
    return (
  <div className= "backInicio">
    <div className="bodyInicio">
        <div>
            <img src={logo} className="logo" alt="HAYEQUIPO"/>
                <div className="col-4">
                    <div className="col-2 offset 8">
					<button onClick={ingresar} className="boton1 btn btn-dark btn-lg">Ingresar</button>
					<button onClick={registrarse} className="boton2 btn btn-dark btn-lg">Registrarse</button>
                    </div>
				</div>
            </div>
        </div>
    </div>
    )
};


export default PaginaInicio;