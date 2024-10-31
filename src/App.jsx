import '../public/CSS/index.css';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Slider from './components/Slider';
import History from './components/History';
import slider1 from '../public/img/Slider1.svg';
import slider2 from '../public/img/Slider2.svg';
import slider3 from '../public/img/Slider3.svg';

function App() {

  const navLinks = [
    { name: 'Cards', url: '/Cards' },
    { name: 'Galery', url: '/Galery' },
    { name: 'Contact', url: '/Contact' }
  ];

  const navIcons = [
    { class: 'fa-brands fa-facebook', url: '#' },
    { class: 'fa-brands fa-instagram', url: '#' },
    { class: 'fa-brands fa-x-twitter', url: '#' },
    { class: 'fa-brands fa-youtube', url: '#' }
  ];

  const navSliders = [
    { imageSrc: slider1, imageAlt: 'Slider 1' },
    { imageSrc: slider2, imageAlt: 'Slider 2' },
    { imageSrc: slider3, imageAlt: 'Slider 3' },
  ];

  return (
    <>
      <Header brandUrl='/' navLinks={navLinks}/>
      <Slider navSliders={navSliders} />
      <History />
      <Footer navIcons={navIcons} />
    </>
  );
}


export default App
