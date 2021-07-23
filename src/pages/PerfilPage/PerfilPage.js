import React, { useState } from 'react';
import useHTTP from '../../utils/useHTTP';
import axios from 'axios';
import './styles.css';

const Perfil = (props) => {
    const id = window.localStorage.getItem('id');
    const jwt = window.localStorage.getItem('JWT');

    if (jwt === null) {
        props.history.push('/login');
    }
    const [perfil, error] = useHTTP.useGet({
        url: `http://localhost:9000/jugadores/single/${id}`,
    });

    // const imagenes = async () => await axios.get('http://localhost:9000/jugadores/jugadoresImg',
    //     {
    //       id_jugadores: id
    //     }
    //   )
    //   const res = imagenes()
    //   console.log(res)

    

    const HandleClick = (route) => {
        props.history.push(route);
    };

    const [foto, setFoto] = useState(null);



    // const subirImagen = (event) => {
    //     console.log(event.target.files[0]);
    //     if (event.target.files && event.target.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = (e) => {
    //             postImagen(e.target.result);
    //             setFoto({ image: e.target.result });
    //         };
    //         reader.readAsDataURL(event.target.files[0]);
    //         //   postImagen (foto);
    //     }
    // };

    // const postImagen = async (imagen) => {
    //     console.log(imagen);
    //     try {
    //         const bodyFormData = new FormData();
    //         bodyFormData.append('imagen', imagen);
    //         const urlFoto = 'http://localhost:9000/jugadores/createFoto';
    //         const params = { imagen: imagen };
    //         const header = { headers: { authorization: jwt } };
    //         const pic = await axios.post(urlFoto, bodyFormData, header);
    //         console.log(pic);
    //     } catch (err) {}
    // };

    const volver = () => {
        props.history.push('/home');
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
            <div className="containerPerfil bg-dark">
                <div className="row">
                    {error ? (
                        <h2 className="text-danger">HUBO UN ERROR</h2>
                    ) : (
                        perfil.map((jugador) => (
                            <div className="card bg-dark">
                                <div className="foto container-lg col-12 bg-dark">

                                    <input
                                        className="botonSubir"
                                        name="imagen"
                                        // onChange={subirImagen}
                                        type="file"
                                    />
                                </div>
                                <div className="card-deck bg-dark text-white col-12">
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
                <div className="row justify-content-md-center">
                    <button
                        onClick={volver}
                        className="botonVolver btn btn-info text-white"
                    >
                        VOLVER
                    </button>
                </div>
            </div>
        </>
    );
};

export default Perfil;