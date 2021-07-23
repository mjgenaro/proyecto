import React from 'react';
import './styles.css';
import BG from './../../assets/images/home.png';

const HomePage = (props) =>{
  
  const jwt = window.localStorage.getItem('JWT');
  if (jwt === null) {
    props.history.push('/login');
}

  const HandleClick = (route) => {
    props.history.push(route);
} 
const logOut = () => {
  console.log('logOut');
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('JWT');
  props.history.push('/login');
};

    return (
    <>
      <div className="containerHome">
      <header className="header bg-dark">
                <nav className="navbar text-white bg-dark">
                    <button
                        className="navbar-brand btn-secondary rounded-3"
                        onClick={() => HandleClick('/home')}
                    >
                        HOME
                    </button>
                    <button
                        className="navbar-brand btn-secondary rounded-3"
                        onClick={() => HandleClick('/jugadores')}
                    >
                        JUGADORES
                    </button>
                    <button
                        className="navbar-brand btn-secondary rounded-3"
                        onClick={() => HandleClick('/perfil')}
                    >
                        MI PERFIL
                    </button>
                    <button className="navbar-brand btn-secondary rounded-3" data-toggle="buttons" onClick={logOut}
                        type="button">CERRAR SESION</button>
                </nav>
            </header>
        <body className= "bodyHome">
            <img src={BG} className="imagenHome"/>
        </body>
        <footer>
            <div className="footer row">
                <p className="parrafoHome text-white">2021 - www.hayequipo.com.ar / Para publicidad: marketing@hayequipo.com.ar / contacto: info@hayequipo.com.ar</p>
            </div>
        </footer>
      </div>
    </>
    )

}

export default HomePage;