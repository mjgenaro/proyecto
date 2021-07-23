import React,  {useState} from 'react'
import useCustomForm from '../../utils/useCustomForm'
import { useForm } from 'react-hook-form';
import logo from './../../assets/images/login.png'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './styles.css'
import axios from 'axios'

const schema = yup.object().shape({
    username: yup.string().required("campo obligatorio"),
    password: yup.string().required("campo obligatorio"),
})


const Login = (props) => {
    const [ form, setForm ] = useState({username:"", password:""})
    const onHandleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(form)
             const result = await axios.post(`http://localhost:9000/login`, form);
             console.log(result.data.info.id)
             window.localStorage.setItem("id", result.data.info.id)
             window.localStorage.setItem("JWT", result.data.JWT)
             props.history.push("/home")
           } 
        catch (err) {
            console.log(err)
        }
    };

    return (
        <>
    <div className= "containerLogin"> 
        <img src={logo} className="imagenLogin" alt="HAYEQUIPO"/>
        <form onSubmit={handleSubmit} className="formLogin">
            <div className="form-group text-white">
                <label htmlFor="username">Username</label>
                    <input onChange={onHandleChange} name="username" type="text" className="form-control" id = "username"></input>
            </div>
            <div className="form-group text-white">
                <label htmlFor="password">Password</label>
                     <input onChange={onHandleChange} name="password" type="password" className="form-control" id = "password"></input>
            </div>
            <div className="d-grid gap-2 mt-2 ">
                <button type="submit" className="botonLogin btn btn-info text-white">Ingresar</button>
            </div>  
        </form>

    </div>
     </>
    )
}

export default Login;