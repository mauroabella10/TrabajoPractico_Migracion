import PropTypes from 'prop-types';

function Card({ 
    navCards,
    btnSrc = '#',
    btnTitle = 'Leer Más',
}) {
    return (
        <section className="container">
            {navCards.map((card, index) =>(
                <div className="card" key={index}>
                <figure>
                    <img src={card.url} alt={card.name} />
                </figure>
                <div className="contenido">
                    <h3>{card.name}</h3>
                    <p>{card.descr}</p>
                    <a href={btnSrc}>{btnTitle}</a>
                </div>
            </div>
            ))} 
        </section> 
    )
}

Card.propTypes = {
    navCards: PropTypes.array.isRequired,
    btnSrc: PropTypes.string,
    btnTitle: PropTypes.string,
};


export default Card