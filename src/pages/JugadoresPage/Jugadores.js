import React, { useState } from 'react';
import useHTTP from '../../utils/useHTTP';
import './styles.css';

const Jugadores = (props) => {
    const jwt = window.localStorage.getItem("JWT")
    if (jwt === null) {props.history.push("/login")}
    const [jugadores, error] = useHTTP.useGet({
        url: 'http://localhost:9000/jugadores/all'
    });

    // const imagenes = useHTTP.useGet({url:'http://localhost:9000/jugadores/jugadoresImg'})

    const HandleClick = (route) => {
        props.history.push(route);
    };

    const jugadoresPorPagina = 4;

    const x = jugadores.length;
    const paginas = Math.ceil(x / jugadoresPorPagina);

    const [pagina, setPagina] = useState(1);

    const ultimo = jugadoresPorPagina * pagina;
    const primero = ultimo - jugadoresPorPagina;

    const partido = jugadores.slice(primero, ultimo);
    console.log(partido);

    const irAdelante = () => {
     if (pagina < paginas)  setPagina(pagina + 1)
    };

    const irAtras = () => {
      if (pagina !==1) setPagina(pagina - 1);
    };
    const logOut = () => {
        console.log('logOut');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('JWT');
        props.history.push('/login');
    };

    return (
        <>
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
            <div className="bodyJugadores container-fluid">
                <div className="row">
                    {error ? (
                        <h2 className="text-danger">HUBO UN ERROR</h2>
                    ) : (
                        partido.map((jugador) => (
                            <div className="card-deck bg-dark text-white col-6 border border-4">
                                <div className="card-body text-center">
                                    <img
                                        class="card-img-top"
                                        src=""
                                        alt=""
                                    />
                                    <h2 className="card-title">
                                        {jugador.nombreCompleto}
                                    </h2>
                                    <h5 className="card-title">
                                        {jugador.mail}
                                    </h5>
                                    <p className="card-text">
                                        {jugador.edad + 'años'}
                                    </p>
                                    <p className="card-text">
                                        {jugador.posicion}
                                    </p>
                                    <p className="card-text">
                                        {jugador.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div><jugadores data={partido}/>
            
                <div className="container">
                    <div className="row  justify-content-md-center col-12 text-lg text-white">Pagina {pagina}</div>
                        <div className="row justify-content-md-center">
                          <div className="row justify-content-md-center"> 
                            <button onClick={irAtras}  className="botonAtras btn btn-info text-white">ATRAS</button>
                             <button onClick={irAdelante} className="botonAdelante btn btn-info text-white"
                             >ADELANTE</button>
                          </div>
                        </div>
                   </div>
               </div>
          </div>
        </>
    );
};


export default Jugadores;