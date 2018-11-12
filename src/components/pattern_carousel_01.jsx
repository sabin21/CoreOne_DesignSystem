import React from 'react';
import Slider from "react-slick";

import "../scss/slick.css";
import "../scss/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <Slider {...settings} className="carousel-type01">
        <div className="slider-wrap">
          <h3>1</h3>
        </div>
        <div className="slider-wrap">
          <h3>2</h3>
        </div>
        <div className="slider-wrap">
          <h3>3</h3>
        </div>
        <div className="slider-wrap">
          <h3>4</h3>
        </div>
      </Slider>
    );
  }
}

export class CarouselPattern01 extends React.Component {
    render() {
      return (
        <div className="page-wrap">
            <div className="content-wrap">
                <div className="system-header">
                    <div className="container">
                        <h1 className="system-chapter-title">Carousel</h1>
                        <p>React bootstrap Carousel 및 기타 Carousel 샘플</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="system-chapter-subtitle">React Bootstrap <span>- Controlled Carousel</span></h4>
                    <div className="row">
                        <div className="col-12">
                          <SimpleSlider />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  }

export default CarouselPattern01;
