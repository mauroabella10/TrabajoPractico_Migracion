import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Galery = ({ navImgs }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (src, alt) => {
        setSelectedImage({ src, alt });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <section className="galleryContainer">
            <div className="container-grid">
                {navImgs.map((img, index) => (
                    <img
                        key={index}
                        src={img.url}
                        alt={img.alt}
                        className={img.class}
                        onClick={() => handleImageClick(img.url, img.alt)}
                    />
                ))}
            </div>

            {isModalOpen && (
                <div className="container-img">
                    <img src={selectedImage.src} alt={selectedImage.alt} className="img-show" />
                    <i className='bx bx-x-circle' onClick={closeModal}></i>
                    <p className="copy">{selectedImage.alt}</p>
                </div>
            )}
        </section>
    );
};

Galery.propTypes = {
    navImgs: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            class: PropTypes.string,
        })
    ).isRequired,
};

export default Galery;
