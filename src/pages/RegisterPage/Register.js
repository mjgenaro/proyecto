import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import './styles.css'
import axios from 'axios'

const schema = yup.object().shape({
    
    username: yup.string().required("campo obligatorio").min(5, "el usuario debe tener como mínimo 5 caracteres").max(10, "el usuario debe tener como máximo 10 caracteres"),
    password: yup.string().required("campo obligatorio"),
    nombreCompleto: yup.string().required("campo obligatorio"),
    mail: yup.string().email("ingrese una direccion de mail valida").required("campo obligatorio"),
    edad: yup.number().required("campo obligatorio").min(18).max(50),
    experiencia: yup.string().required("campo obligatorio"),
    descripcion: yup.string().required("campo obligatorio"),

})

const Register = (props) => {

const [ form, setForm ] = useState({username:"", password:""})
const onHandleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
};

const { formState: { errors } } = useForm({
  resolver: yupResolver(schema)
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      console.log(form)
      const result = await axios.post(`http://localhost:9000/registro`, form);
      console.log(result)
      props.history.push("/login")
     } 
  catch (err) {
      console.log(err)
  }
};

  return (
    <>
      <div className= "containerRegister">  
        <div><h1 className="text-white"> HAY EQUIPO -    Formulario de         Registro</h1></div>
          <form onSubmit={handleSubmit} className="formRegister">
            <div className="form-group text-white">
              <label htmlFor="username">Username</label>
                <input type="text" className="form-control" onChange={onHandleChange} name = "username" placeholder= "Ingrese su username"/>
                  {errors.username ? <p className="text-danger">{errors.username.message}</p> : null}
            </div>
            <div className="form-group text-white">
              <label htmlFor="password">Password</label>
                <input type="password" className="form-control" onChange={onHandleChange} name = "password" placeholder= "Ingrese su contraseña"/>
                  {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}
            </div>
            <div className="form-group text-white">
              <label htmlFor="nombreCompleto">Nombre Completo</label>
                <input type="text" className="form-control" onChange={onHandleChange} name = "nombreCompleto" placeholder= "Ingrese su nombre completo"/>
                  {errors.nombreCompleto ? <p className="text-danger">{errors.nombreCompleto.message}</p> : null}
            </div>
            <div className="form-group text-white">
              <label htmlFor="mail">E-Mail</label>
                <input type="text" className="form-control" onChange={onHandleChange} name = "mail" placeholder= "Ingrese su E-Mail"/>
                  {errors.mail ? <p className="text-danger">{errors.mail.message}</p> : null}
            </div> 
            <div className="form-group text-white">
             <label htmlFor="edad">Edad</label>
                <input type="text" className="form-control" onChange={onHandleChange} name = "edad" placeholder= "Ingrese su edad"/>
                  {errors.edad ? <p className="text-danger">{errors.edad.message}</p> : null}
            </div>
            <div className="form-group text-white">
              <label htmlFor="posicion">Posicion
                  <select type="text" name= "posicion" className="form-control inputPosicion" onChange={onHandleChange}>
                  <option value="select">seleccione una opción</option>
                  <option value="arquero">arquero</option>
                  <option value="defensor">defensor</option>
                  <option value="defensor">volante</option>
                  <option value="defensor">delantero</option>
                  </select>
              </label>
            </div>
            <div className="form-group text-white">
              <label htmlFor="descripcion">Descripción</label>
                <input type="text" className="form-control" onChange={onHandleChange} name = "descripcion" placeholder= "Describa sus atributos"/>
                  {errors.descripcion ? <p className="text-danger">{errors.descripcion.message}</p> : null}
            </div>
            <div className="d-grid gap-2 mt-2 " >
            <button type="submit" className="botonRegister btn btn-info text-white">Registrarse
            </button>
            </div>
          </form>
      </div>
    </>
)   

}

export default Register;