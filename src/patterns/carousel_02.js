import React from 'react';
import Slider from "react-slick";
import classNames from 'classnames/bind';
import styles from '../../src/style.scss';
const cx = classNames.bind(styles);

var imageWoman1 = require('../img/photo_sample/1280/woman_01.jpg');
var imageWoman2 = require('../img/photo_sample/1280/woman_02.jpg');
var imageWoman3 = require('../img/photo_sample/1280/woman_03.jpg');
var imageWoman4 = require('../img/photo_sample/1280/woman_04.jpg');

var imageRandom1 = require('../img/photo_sample/1280x720/01.jpg');
var imageRandom2 = require('../img/photo_sample/1280x720/02.jpg');
var imageRandom3 = require('../img/photo_sample/1280x720/03.jpg');
var imageRandom4 = require('../img/photo_sample/1280x720/04.jpg');


const carouselDatas = [
    {
        backImage: imageWoman1,
        title: 'Carousel Split Type Test',
        detail: '2018년형 Macbook Pro'
    },
    {
        backImage: imageWoman2,
        title: 'Carousel Split Type Test',
        detail: '2018년형 Macbook Pro'
    },
    {
        backImage: imageWoman3,
        title: 'Carousel Split Type Test',
        detail: '2018년형 Macbook Pro'
    },
    {
        backImage: imageWoman4,
        title: 'Carousel Split Type Test',
        detail: '2018년형 Macbook Pro'
    }
]


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

export class AsNavFor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null        
      };
    }
  
    componentDidMount() {
        
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2,
        currentSlide: 1,
        slideTotal: 4
      });
    }
  
    render() {
      return (
        <div className="slider-split-01">
          
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            autoplay = {true}
            afterChange = {
                (currentSlide) => {
                    this.setState({ currentSlide: currentSlide + 1 })
                  }
            }
            nextArrow = {<SampleNextArrow />}
            prevArrow = {<SamplePrevArrow />}
            arrows = {false}
            fade = {true}
            className="split-block1"
          >
            { carouselDatas.map((carouselData , index) => {
              return(
                    <div key={index} className="slide-inner">
                        <div className="back-image" style={{backgroundImage: `url(${carouselData.backImage})`}}>
                        </div>
                    </div>
                    )
                })
            }
          </Slider>
          
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)} 
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            dots={false}
            className="split-block2"
          >
            { carouselDatas.map((carouselData , index) => {
              return(
                    <div key={index} className="slide-inner">
                        <div className="inner-wrap">
                            <h2>{carouselData.title}</h2>
                            <p>{carouselData.detail}</p>
                        </div>
                    </div>
                    )
                })
            }
          </Slider>
          <p className="slide-indicator-num">{this.state.currentSlide} / {this.state.slideTotal}</p>
        </div>
      );
    }
  }

export class CarouselPattern02 extends React.Component {
    render() {
      return (
        <div className="page-wrap">
            <div className="content-wrap">

                <div className="system-header">
                    <div className="container guide">
                        <h1 className="system-chapter-title">Carousel <span>- Patterns 2</span></h1>
                        <p>Slick 라이브러리를 활용한 다양한 유형의 Carousel 패턴</p>
                    </div>
                </div>

                <div className="container guide">

                    <h4 className="tiny-title">Carousel - Split Type01</h4>
                    <div className="row">
                        <div className="col-12">
                          <AsNavFor />
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
      );
    }
  }

export default CarouselPattern02;
