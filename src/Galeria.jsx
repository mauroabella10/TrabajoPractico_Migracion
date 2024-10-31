import '../public/CSS/index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Galery from './components/Galery';
import tortaFrutilla from '../public/img/tarta_de_frutillas.jpg';
import tortaDurazno from '../public/img/torta-durazno.jpg';
import tortaNegra from '../public/img/tortita-negra.jpg';
import churros from '../public/img/churros.webp';
import pastafrola from '../public/img/pastafrola.jpeg';
import medialunas from '../public/img/medialuna.png';

function Galeria() {

  const navLinks = [
    { name: 'Cards', url: '#' },
    { name: 'Galery', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  const navImgs = [
    {url: churros, alt:'Churros', class:'img img_1'},
    {url: tortaNegra, alt:'Tortita Negra', class:'img img_2'},
    {url: tortaFrutilla, alt:'Torta de Frutillas', class:'img img_3'},
    {url: pastafrola, alt:'Pastafrola', class:'img img_4'},
    {url: medialunas, alt:'Medialunas', class:'img img_5'},
    {url: tortaDurazno, alt:'Torta de Durazno', class:'img img_6'},
];

  const navIcons = [
    { class: 'fa-brands fa-facebook', url: '#' },
    { class: 'fa-brands fa-instagram', url: '#' },
    { class: 'fa-brands fa-x-twitter', url: '#' },
    { class: 'fa-brands fa-youtube', url: '#' }
  ];

  return (
    <>
      <Header brandUrl='#' navLinks={navLinks}/>
      <Galery navImgs={navImgs} />
      <Footer navIcons={navIcons} />
    </>
  );
}

export default Galeria
