import PropTypes from 'prop-types';
import logo from '../../../public/img/logo.jpg';

function Footer({ 
    imageSrc = logo, 
    imageAlt = "Logo Bakery", 
    title = "Sobre nosotros", 
    text1 = "Para saber mas de nosotros los esperamos en XXX", 
    text2 = "No olvide las mejores medialunas pueden ser suyas!", 
    title2 = "Contactenos", 
    navIcons, 
    text3 = "&copy; 2024 Bakery - Todos los Derechos Reservados."
}) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="box">
                    <figure>
                        <img src={imageSrc} alt={imageAlt} className="logo" />
                    </figure>
                </div>
                <div className="box box2">
                    <h2>{title}</h2>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
                <div className="box">
                    <h2>{title2}</h2>
                    {navIcons.map((icon, index)=>(
                        <a key={index} href={icon.url} className={icon.class}></a>
                    ))}
                </div>
            </div>
            <div className="footer-copy">
                <p>{text3}</p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    imageSrc: PropTypes.string, 
    imageAlt: PropTypes.string, 
    title: PropTypes.string, 
    text1: PropTypes.string, 
    text2: PropTypes.string, 
    title2: PropTypes.string, 
    navIcons: PropTypes.array.isRequired, 
    text3: PropTypes.string,
};


export default Footer 