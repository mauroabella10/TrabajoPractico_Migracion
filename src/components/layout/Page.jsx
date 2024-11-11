import '../../../public/CSS/index.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';


function Page({children}) {

  const navLinks = [
    { name: 'Cards', url: '/cards' },
    { name: 'Galery', url: '/galery' },
    { name: 'Contact', url: '/contact' },
    { name: 'Register', url: '/register' },
    { name: 'Login', url: '/login' }
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
      {children}
      <Footer navIcons={navIcons} />
    </>
  );
}

Page.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Page