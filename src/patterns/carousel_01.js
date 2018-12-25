import React from 'react';
import Slider from "react-slick";

var imageProduct1 = require('../img/products/macbook.png');
var imageProduct2 = require('../img/products/iphone.png');
var imageProduct3 = require('../img/products/surface.png');

const products = [
  {
    thumbnail: imageProduct1,
    title: '2018년형 Macbook Pro',
    detail: '2018년형 Macbook Pro'
  },
  {
    thumbnail: imageProduct2,
    title: '2018년형 Macbook Pro',
    detail: '2018년형 Macbook Pro'
  },
  {
    thumbnail: imageProduct3,
    title: '2018년형 Macbook Pro',
    detail: '2018년형 Macbook Pro'
  },
  {
    thumbnail: imageProduct1,
    title: '2018년형 Macbook Pro',
    detail: '2018년형 Macbook Pro'
  },
  {
    thumbnail: imageProduct2,
    title: '2018년형 Macbook Pro',
    detail: '2018년형 Macbook Pro'
  },
  {
    thumbnail: imageProduct3,
    title: '2018년형 Macbook Pro',
    detail: '2018년형 Macbook Pro'
  }
]

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
        <div className="slider-wrap" id="back-1">
          <h3 className="slide-title">Carousel Patterns 타이틀</h3>
        </div>
        <div className="slider-wrap" id="back-2">
          <h3 className="slide-title">Carousel Patterns 타이틀</h3>
        </div>
        <div className="slider-wrap" id="back-3">
          <h3 className="slide-title">Carousel Patterns 타이틀</h3>
        </div>
        <div className="slider-wrap" id="back-4">
          <h3 className="slide-title">Carousel Patterns 타이틀</h3>
        </div>
      </Slider>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slide-control-num01 slick-next"}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slide-control-num01 slick-prev"}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ></div>
  );
}

class SimpleSliderNum extends React.Component {
  state = {
    currentSlide: 1,
    slideTotal: 4
  }
  render() {
    var settings = {
      customPaging: function(i){             
        return(
          <span className="pager-line-wrap">{(i)}</span>    
        )
      },
      afterChange: 
        (currentSlide) => {
          this.setState({ currentSlide: currentSlide + 1 })
        },
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider-num-wrap">
        <Slider {...settings} className="carousel-type01 slide-control-num01">
          <div className="slider-wrap" id="back-1">
            <h3 className="slide-title">Carousel Patterns 타이틀</h3>
          </div>
          <div className="slider-wrap" id="back-2">
            <h3 className="slide-title">Carousel Patterns 타이틀</h3>
          </div>
          <div className="slider-wrap" id="back-3">
            <h3 className="slide-title">Carousel Patterns 타이틀</h3>
          </div>
          <div className="slider-wrap" id="back-4">
            <h3 className="slide-title">Carousel Patterns 타이틀</h3>
          </div>
        </Slider>
        <p className="slide-indicator-num">{this.state.currentSlide} / {this.state.slideTotal}</p>
      </div>
    );
  }
}


class SliderMulti extends React.Component {    
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Slider {...settings} className="carousel-multi">
        { products.map((product, index) => {
          return(
            <div className="slide-wrap" key={index}>
              <div className="slide-inner tlc">
                <img src={product.thumbnail} />
                <p className="slide-title">{product.title}</p>
                <p className="slide-desc">{product.detail}</p>
              </div>
            </div>
          )
          }) 
        }     
      </Slider>
    );
  }
}

class SliderMultiCenter extends React.Component {    
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      className: "slick-center",
      centerMode: true,
      centerPadding: "60px"
    };
    return (
      <div className="slider-num-wrap">
      <Slider {...settings} className="carousel-multi big-height">
        { products.map((product, index) => {
          return(
            <div className="slide-wrap" key={index}>
              <div className="slide-inner tlc">
                <img src={product.thumbnail} />
                <p className="slide-title">{product.title}</p>
                <p className="slide-desc">{product.detail}</p>
              </div>
            </div>
          )
          }) 
        }     
      </Slider>
      </div>
    );
  }
}



export class CarouselPattern01 extends React.Component {
    render() {
      return (
        <div className="page-wrap">
            <div className="content-wrap">

                <div className="system-header">
                    <div className="container guide">
                        <h1 className="system-chapter-title">Carousel <span>- Patterns 1</span></h1>
                        <p>Slick 라이브러리를 활용한 다양한 유형의 Carousel 패턴</p>
                    </div>
                </div>

                <div className="container guide">
                    <h4 className="tiny-title">Carousel - Basic</h4>
                    <div className="row">
                        <div className="col-12">
                          <SimpleSlider />
                        </div>
                    </div>
                    <h4 className="tiny-title">Carousel - Line indicator, Number</h4>
                    <div className="row">
                        <div className="col-12">
                          <SimpleSliderNum />
                        </div>
                    </div>

                    <h4 className="tiny-title">Carousel - Multiple Slides</h4>
                    <div className="row">
                        <div className="col-12">
                          <SliderMulti />
                        </div>
                    </div>

                    <h4 className="tiny-title">Carousel - Multiple Center Mode </h4>
                    <div className="row">
                        <div className="col-12">
                          <SliderMultiCenter />
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
      );
    }
  }

export default CarouselPattern01;
