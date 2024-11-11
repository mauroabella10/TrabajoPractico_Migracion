import React, { useState } from "react";
import { addUser } from "../API/User/addUser";

function RegisterForm () {

    const urlBase = 'https://672ba1991600dda5a9f5d136.mockapi.io/api/users';
    
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        password: "",
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function sendUser(e){
        e.preventDefault();
        addUser(formData);
    }

    return(
        <form className="formLayout" onSubmit={sendUser}>
            <h4 className="formTitle">Registro de usuario</h4>
            <div className="formLayout-container">
                <label htmlFor="email">Correo Electronico: </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="formLayout-container">
                <label htmlFor="firstName">Nombre: </label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="formLayout-container">
                <label htmlFor="lastName">Apellido: </label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>
            <div className="formLayout-container">
                <label htmlFor="gender">Sexo: </label>
                <select name="gender"  value={formData.gender} onChange={handleChange}>
                    <option value="#" selected>Seleccione Genero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="NB">No binario</option>
                    <option value="O">Otro</option>
                </select>
            </div>
            <div className="formLayout-container">
            <label htmlFor="password">Su contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="formButtonContainer">
                <button type="submit">Enviar</button>
                <button type="reset">Borrar</button>
            </div>
      </form>
    )
}

export default RegisterForm