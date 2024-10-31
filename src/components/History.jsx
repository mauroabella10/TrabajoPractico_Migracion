import PropTypes from 'prop-types';

function History ({ 
    title = "¿Quienes somos?", 
    text1 = "Somos una familia dedicada a la elaboración de productos de altísima calidad, con la experiencia de más de 45 años en el rubro y una trayectoria de más de XX años en la zona de XXXX.", 
    text2 = "Empezando por la selección de primeras marcas en materias primas, recetas únicas e innovación permanente, como así también el cuidado de los productos desde el inicio de la elaboración hasta la mesa de nuestros clientes, logramos la calidad que nos caracteriza.", 
    text3 = "Tenemos como principio fundamental la cordialidad en la atención, creando un excelente vínculo, la confianza y toda la seguridad del buen producto final. Gracias a esto, a nuestros maestros, al compromiso y placer que nos da poder brindar lo mejor, generamos el crecimiento permanente de nuestro negocio."
}) {
    return (
        <main className="history-container">
            <div className="info">
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>       
        </main>
    )
}

History.propTypes = {
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
};


export default History 