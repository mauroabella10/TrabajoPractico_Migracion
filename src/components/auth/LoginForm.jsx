import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../API/User/getUsers";
import { UserContext } from "../contexts/UserContext";


function LoginForm () {

    const { user, handleLogin, handleLogout } = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const [users, setUsers] = useState([]);

    const emptyFields = formData.email === "" || formData.password === "";

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const getAllUsers = async () => {
        try {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const loggedUser = users.find(user => user.email === formData.email && user.password === formData.password); 

        if (loggedUser) {
            handleLogin(loggedUser);
            setError("loggeado correctamente");
        } else {
            setError("datos erroneos");
        }
    };
 
    return(
        <form className="formLayout" onSubmit={handleSubmit}>
            { user ? (<button onClick={handleLogout}> Logout </button>) : <></>}
            <h4 className="formTitle">Login de usuario</h4>
            
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" name="email" onChange={handleChange} value={formData.email}/>

            <label htmlFor="password">Ingrese su contraseña</label>
            <input type="password" name="password" onChange={handleChange} value={formData.password}/>
 
            {error && <p> {error} </p>}

            <div className="formButtonContainer">
                <button type="submit" disabled={emptyFields}>Enviar</button>
                <button type="reset">Borrar</button>
            </div>
      </form>
    )
}

export default LoginForm