import '../public/CSS/index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CardContainer from './components/CardContainer';


function Cards() {

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

  return (
    <>
      <Header brandUrl='/' navLinks={navLinks}/>
      <CardContainer />
      <Footer navIcons={navIcons} />
    </>
  );
}

export default Cards
