import '../../../public/CSS/index.css';
import Page from '../layout/Page';
import Galery from '../Galery';
import tortaFrutilla from '../../../public/img/tarta_de_frutillas.jpg';
import tortaDurazno from '../../../public/img/torta-durazno.jpg';
import tortaNegra from '../../../public/img/tortita-negra.jpg';
import churros from '../../../public/img/churros.webp';
import pastafrola from '../../../public/img/pastafrola.jpeg';
import medialunas from '../../../public/img/medialuna.png';

function Galeria() {

  const navImgs = [
    {url: churros, alt:'Churros', class:'img img_1'},
    {url: tortaNegra, alt:'Tortita Negra', class:'img img_2'},
    {url: tortaFrutilla, alt:'Torta de Frutillas', class:'img img_3'},
    {url: pastafrola, alt:'Pastafrola', class:'img img_4'},
    {url: medialunas, alt:'Medialunas', class:'img img_5'},
    {url: tortaDurazno, alt:'Torta de Durazno', class:'img img_6'},
];

  return (
    <>
      <Page>
      <Galery navImgs={navImgs} />
      </Page>
    </>
  );
}

export default Galeria
