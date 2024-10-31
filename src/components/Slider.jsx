import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';

const Slider = ({ navSliders }) => {
    const [counter, setCounter] = useState(0);
    const sliderRef = useRef(null);
    const widthImg = 100 / navSliders.length;

    // Función para mover a la derecha
    const moveToRight = () => {
        setCounter(prevCounter => {
            if (prevCounter >= navSliders.length - 1) {
                return 0; // Volver al inicio
            }
            return prevCounter + 1;
        });
    };

    // Función para mover a la izquierda
    const moveToLeft = () => {
        setCounter(prevCounter => {
            if (prevCounter <= 0) {
                return navSliders.length - 1; // Volver al final
            }
            return prevCounter - 1;
        });
    };

    // Efecto para el intervalo de cambio automático
    useEffect(() => {
        const interval = setInterval(moveToRight, 5000);
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    // Efecto para actualizar la transformación del slider
    useEffect(() => {
        if (sliderRef.current) {
            const operacion = counter * widthImg;
            sliderRef.current.style.transform = `translate(-${operacion}%)`;
            sliderRef.current.style.transition = 'all ease .6s';
        }
    }, [counter, widthImg]);

    return (
        <section className="container-carrousel">
            <div className="carruseles" ref={sliderRef}>
                {navSliders.map((slider, index) => (
                    <section className="slider-section" key={index}>
                        <img src={slider.imageSrc} alt={slider.imageAlt} />
                    </section>
                ))}
            </div>
            <div className="btn-left" onClick={moveToLeft}>
                <i className="fa-solid fa-less-than"></i>
            </div>
            <div className="btn-right" onClick={moveToRight}>
                <i className="fa-solid fa-greater-than"></i>
            </div>
        </section>
    );
};

Slider.propTypes = {
    navSliders: PropTypes.arrayOf(
        PropTypes.shape({
            imageSrc: PropTypes.string.isRequired,
            imageAlt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Slider;
