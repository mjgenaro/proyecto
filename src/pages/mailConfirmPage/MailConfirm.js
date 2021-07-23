import React from 'react';
import axios from 'axios';
import './styles.css';

const MailConfirm = (props) => {
    const path = props.location.pathname;
    const uuid = path.split('/')[2]
    const url = `http://localhost:9000/users/verify/${uuid}`
    const verify = axios.get(url);

    const ingresar = () => {
        props.history.push("/login");
    }

    return (

        <div className="containerMail">
            <span> <h2 className="textoHayequipo">HAY EQUIPO</h2>
                    <h2 className="textoRegistrado">USTED SE HA REGISTRADO EXITOSAMENTE </h2>
            </span>
            <div>
              <button onClick={ingresar} className="botonLogin1 btn btn-dark btn-lg">login</button>
            </div>
            </div>  

    )
};



export default MailConfirm;