import '../public/CSS/index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contact from './components/Contact';

function Contacto() {

  const navLinks = [
    { name: 'Cards', url: '#' },
    { name: 'Galery', url: '#' },
    { name: 'Contact', url: '#' }
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
      <Contact />
      <Footer navIcons={navIcons} />
    </>
  );
}

export default Contacto
