const apiUrl = import.meta.env.VITE_BASE_URL_USERS;

export async function addUser (user){
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        if (!response.ok){
            throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}