import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carosual = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='container-fluid bg-warning p-5'>

        <Slider {...settings}>
          <div className='slick'>

            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
          <div className='slick'>
            <img className='caroimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gZ9Dy0-Sk7Yoln9W_s1S7lq-2bMfmxuhFO8-VZT8Gd-tOTJV' />
          </div>
        </Slider>
      </div>
      
    </>
  );
}

export default Carosual;
