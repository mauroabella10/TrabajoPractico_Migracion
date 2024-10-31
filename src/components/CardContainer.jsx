import PropTypes from 'prop-types';
import Card from './Card';
import NewCard from './NewCard.jsx';
import tortaFrutilla from '../../public/img/tarta_de_frutillas.jpg';
import tortaDurazno from '../../public/img/torta-durazno.jpg';
import tortaNegra from '../../public/img/tortita-negra.jpg';
import churros from '../../public/img/churros.webp';
import pastafrola from '../../public/img/pastafrola.jpeg';
import medialunas from '../../public/img/medialuna.png';

function CardContainer(){
    
    const navCards = [
        { name:'Torta de Frutillas', url: tortaFrutilla, descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates maiores? Beatae corrupti maiores inventore vel? Adipisci itaque hic accusantium.'},
        { name:'Torta de Durazno', url: tortaDurazno, descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates maiores? Beatae corrupti maiores inventore vel? Adipisci itaque hic accusantium.'},
        { name:'Tortita Negra', url: tortaNegra, descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates maiores? Beatae corrupti maiores inventore vel? Adipisci itaque hic accusantium.'},
        { name:'Churros', url: churros, descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates maiores? Beatae corrupti maiores inventore vel? Adipisci itaque hic accusantium.'},
        { name:'Pastafrola', url: pastafrola, descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates maiores? Beatae corrupti maiores inventore vel? Adipisci itaque hic accusantium.'},
        { name:'Medialunas', url: medialunas, descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates maiores? Beatae corrupti maiores inventore vel? Adipisci itaque hic accusantium.'},
    ];
    
    return (
        <>
            <Card navCards={navCards}/>
            <NewCard />
        </>    
    )
}

CardContainer.propTypes = {
    navCards: PropTypes.array,
};



export default CardContainer 
