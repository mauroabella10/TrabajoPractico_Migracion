import { useRouteError } from "react-router-dom";

function Error() {

    const error = useRouteError();

    return (
        <div>
            <h1>Error!</h1>
            <p>Ha ocurrido un error inesperado, lo sentimos</p>
            <p>{error.statusText || error.message}</p>
            <p>{error.status ? `Error del tipo: ${error.status}` : ""}</p>
        </div>
    );
}

export default Error