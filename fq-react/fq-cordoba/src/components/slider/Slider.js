import React from 'react';
import "@brainhubeu/react-carousel/lib/style.css";
import slides from '../slider/Slides';
import Carousel from 'react-bootstrap/Carousel';



function Slider() {
  return (
      <Carousel className='Carousell mt-5'>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-5"
            src="https://i.pinimg.com/564x/df/b3/e5/dfb3e51c8c23b177e7ddd05c837d9da2.jpg"
            alt="First slide"
            height={400}
             
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-50 w-100 mt-5"
            src="https://i.pinimg.com/564x/db/04/0f/db040f1d439905c3a1c20ad8a9d1638f.jpg"
            alt="Second slide"
            height={400}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mt-5"
            src="https://i.pinimg.com/564x/27/2c/21/272c211506d70cc3d474996968f89c1f.jpg"
            alt="Third slide"
            height={400}
          />
          

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Slider;