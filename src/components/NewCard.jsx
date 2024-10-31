import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewCard({
    title1 = 'Tus nuevos productos',
    title2 = 'Crea tus Producto!',
    text1 = 'Nombre del producto:',
    text2 = 'Descripcion del producto:',
    text3 = 'Precio del producto:',
    text4 = 'URL del producto:',
    title3 = 'Personaliza tu producto!',
    text5 = 'Color de fondo:',
    text6 = 'Color del borde:',
    btnTitle = 'Añadir Producto',
}) {
    const [formData, setFormData] = useState({
        title: '',
        descripcion: '',
        price: '',
        imageUrl: 'https://picsum.photos/200',
        bgColor: '#ffffff',
        borderColor: '#000000',
    });

    // Manejo de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejo del envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        // Mostrar datos por consola
        console.log(formData);

        // Crear la carta
        const cardContainer = document.getElementById("new-cards-content");
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.backgroundColor = formData.bgColor;
        newCard.style.border = `4px solid ${formData.borderColor}`;
        newCard.style.borderRadius = "40px";

        // Maquetar la carta
        newCard.innerHTML = `
            <div class="card">
                <img src="${formData.imageUrl}" alt="Imagen de producto" />
                <p>${formData.title}</p>
                <span><strong>${formData.price}</strong></span>
                <button>Comprar</button>
            </div>`;

        // Añadir carta al contenedor
        cardContainer.appendChild(newCard);

        // Limpiar formulario
        setFormData({
            title: '',
            descripcion: '',
            price: '',
            imageUrl: 'https://picsum.photos/200',
            bgColor: '#ffffff',
            borderColor: '#000000',
        });
    };

    return (
        <section className="new-cards-container" id="new-cards-container">
            <h2>{title1}</h2>
            <hr />
            <div className="new-cards-content" id="new-cards-content"></div>
            <div id="card-form-container" className="card-form-container">
                <h3>{title2}</h3>
                <form className="card-form" id="card-form" onSubmit={handleSubmit}>
                    <label htmlFor="card-title">{text1}</label>
                    <input
                        type="text"
                        name="title"
                        id="card-title"
                        className="input-cards"
                        value={formData.title}
                        minLength="4"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="card-description">{text2}</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="card-description"
                        className="input-cards"
                        value={formData.descripcion}
                        minLength="10"
                        onChange={handleChange}
                    />
                    <label htmlFor="card-price">{text3}</label>
                    <input
                        type="number"
                        name="price"
                        id="card-price"
                        className="input-cards"
                        min="30"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="card-img">{text4}</label>
                    <input
                        type="url"
                        name="imageUrl"
                        id="card-img"
                        className="input-cards"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://picsum.photos/200"
                    />
                    <h3>{title3}</h3>
                    <div className="inputs-color">
                        <label htmlFor="card-bg-color" className="input-color">{text5}</label>
                        <input
                            type="color"
                            name="bgColor"
                            id="card-bg-color"
                            className="input-color"
                            value={formData.bgColor}
                            onChange={handleChange}
                        />
                        <label htmlFor="card-border-color" className="input-color">{text6}</label>
                        <input
                            type="color"
                            name="borderColor"
                            id="card-border-color"
                            className="input-color"
                            value={formData.borderColor}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="button-cards">{btnTitle}</button>
                </form>
            </div>
        </section>
    );
}

NewCard.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    title3: PropTypes.string,
    text5: PropTypes.string,
    text6: PropTypes.string,
    btnTitle: PropTypes.string,
};

export default NewCard;
