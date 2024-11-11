const apiUrl = import.meta.env.VITE_BASE_URL_USERS;

export async function getUsers (){
    try {
        const response = await fetch(apiUrl);

        if (!response.ok){
            throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        //retornamos los usuarios
        return data;

    } catch (error) {
        console.log(error);
    }
}