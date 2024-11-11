import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();


function UserProvider({children}) {

    const [user, setUser] = useState(null);

    // permite tener seteado el estado del usuario
    useEffect(() =>{
        //get item permite leer ese valor
        const storedUser = sessionStorage.getItem('user');
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // login - crear una sesion
    const handleLogin = loggedInUser => {
        setUser(loggedInUser);
        //set item permite almacenar valor dentro del lcoalstorage
        sessionStorage.setItem('user', JSON.stringify(loggedInUser));
    };


    const handleLogout = () => {
        setUser(null);

        sessionStorage.removeItem('user');
    };
    


  return (
    <UserContext.Provider value={{user, handleLogin, handleLogout}}> 
    {children} 
    </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export { UserContext, UserProvider };