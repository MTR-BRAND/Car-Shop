import Carousel from 'react-bootstrap/Carousel';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='container'>
          <div className='text-center mt-lg-5'>
            <p className='grayC'>Meet your new car</p>
            <h1 className='heroFont'>Honda Civic Type R</h1>
            <div className='d-flex justify-content-center align-items-center gap-3 mt-4'>
              <button className='btnB1'>More Details</button>
              <button className='btnB2'>Test Drive</button>
            </div>
            <div className='mt-4'>
              <img src="image/Header.png" className="img-fluid" alt="Car Image" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container'>
          <div className='text-center mt-lg-5'>
            <p className='grayC'>Buy your new car</p>
            <h1 className='heroFont'>BMW Civic Type R</h1>
            <div className='d-flex justify-content-center align-items-center gap-3 mt-4'>
              <button className='btnB1'>More Details</button>
              <button className='btnB2'>Test Drive</button>
            </div>
            <div className='mt-4'>
              <img src="image/bmw.png" className="img-fluid" alt="Car Image" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container'>
          <div className='text-center mt-lg-5'>
            <p className='grayC'>See your new car</p>
            <h1 className='heroFont'>Audi Civic Type R</h1>
            <div className='d-flex justify-content-center align-items-center gap-3 mt-4'>
              <button className='btnB1'>More Details</button>
              <button className='btnB2'>Test Drive</button>
            </div>
            <div className='mt-4'>
              <img src="image/audi2.png" className="img-fluid" alt="Car Image" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
