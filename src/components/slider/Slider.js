import Carousel from 'react-bootstrap/Carousel';
import Slides from './Slides';
import './Slider.css';
function IndividualIntervalsExample() {
  return (
    <Carousel>
      {Slides.map((item) => (
        <Carousel.Item interval={5000} key={item.index} >
          <img style={{ paddingTop:'80px',height: '100vh', width: '100vw' }} alt="First slide" src={item.image} />
          <Carousel.Caption className='fade-in' style={{ left: '5%', width: '40%', bottom: '5%', textAlign: 'left'}}>
            <h3 className='animating' style={{ fontSize: '60px', marginLeft: '60px'}}>{item.title}</h3>
            <p style={{ fontSize: '20px',color:'white' }}>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;