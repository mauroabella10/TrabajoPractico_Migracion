import PropTypes from 'prop-types';

function Contact ({
    title = 'Contactanos!',
    text1 = 'Si pasaste por algunos de nuestros locales y probastes nuestros productos o confiaste en nosotros para organizar tu fiesta y queres compartir tu opinión, no dudes escribirnos a info@bakery.com.ar. Tu opinión nos interesa y nos ayuda a mejorar día a día.',
    text2 = 'Si queres formar parte de nuestro equipo de trabajo, envíanos tu curriculum a info@bakery.com.ar',
    btnTitle = 'ENVIAR',
    btnTitle2 = 'RESET',

}) {
    return (
    <main className="main-container">
        <div className="info-container">
            <h1>{title}</h1>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        <form className="form-container">
            <input type="text" placeholder="Nombre Completo" />
            <input type="email" placeholder="Email" />
            <input type= "tel" placeholder="Telefono" />
            <textarea placeholder="Dejanos un mensaje..." rows="6"></textarea>
            <div  className='form-buttons'>
                <button type='submit'>{btnTitle}</button>
                <button type='reset'>{btnTitle2}</button>
            </div>
        </form>
    </main>
    )
}

Contact.propTypes = {
   title: PropTypes.string.isRequired,
   text1: PropTypes.string.isRequired,
   text2: PropTypes.string.isRequired,
   btnTitle: PropTypes.string.isRequired,
};

export default Contact 