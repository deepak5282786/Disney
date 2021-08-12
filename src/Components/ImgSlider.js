import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
        return (
            <Slider {...settings} className="slide">
              <div>
                <img src="/images/slider-badging.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slider-badag.jpg" alt="" />
              </div>
    
              <div>
                <img src="/images/slider-scale.jpg" alt="" />
              </div>
              <div>
                <img src="/images/slider-scales.jpg" alt="" />
              </div>
    

            </Slider>
          );
}

export default ImgSlider
