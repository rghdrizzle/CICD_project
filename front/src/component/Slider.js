import React from 'react';
// import SimpleImageSlider from 'react-simple-image-slider';
import { Carousel } from 'react-bootstrap';
import burgerking from '../static/image/upload/버거킹 21621554304656.jpg';
import pizza from '../static/image/pizza.jpg';
import laptop from '../static/image/laptop.jpg';
import coffee from '../static/image/coffee.jpg';

const Slider = () => {
  return (
    <>
      <div className="w-100" style={{ minHeight: '250px', maxHeight: '250px'}}>
        <Carousel className="mt-3" autoPlay={false} slide={false}>
          <Carousel.Item>
            <img src={burgerking} alt="chicken" className="d-block w-100" style={{height: '250px'}} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={laptop} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={coffee} alt="chicken" className="d-block w-100" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
