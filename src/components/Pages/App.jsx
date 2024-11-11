import '../../../public/CSS/index.css';
import Page from '../layout/Page';
import Slider from '../Slider';
import History from '../History';
import slider1 from '../../../public/img/Slider1.svg';
import slider2 from '../../../public/img/Slider2.svg';
import slider3 from '../../../public/img/Slider3.svg';

function App() {

  const navSliders = [
    { imageSrc: slider1, imageAlt: 'Slider 1' },
    { imageSrc: slider2, imageAlt: 'Slider 2' },
    { imageSrc: slider3, imageAlt: 'Slider 3' },
  ];

  return (
    <>
      <Page>
      <Slider navSliders={navSliders} />
      <History />
      </Page>
    </>
  );
}


export default App
