import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useEffect } from 'react';

const Cardcaro = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };

  return (
    <>
    
      
      <Slider {...settings}>
        <div >
          <div className='ducar'>
            <h3 className='tit'>1</h3>
          </div>
        </div>
        

      </Slider>
    
    </>
  );
};

export default Cardcaro;
