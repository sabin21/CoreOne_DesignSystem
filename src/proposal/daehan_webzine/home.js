import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import classNames from 'classnames/bind';
import styles from '../../style.scss';
const cx = classNames.bind(styles);

var imageWoman1 = require('./img/woman_01.jpg');
var imageWoman2 = require('./img/woman_02.jpg');
var imageWoman3 = require('./img/woman_03.jpg');
var imageWoman4 = require('./img/woman_04.jpg');

const carouselDatas = [
  {
      backImage: imageWoman1,
      title: '인생의 봄, 그꽃을 피워라',
      detail: '최진용 사장님과 함께한 미술관 산책',
      backColor: '#F47D7D'
  },
  {
      backImage: imageWoman2,
      title: '우리모두가 대한전선의 얼굴입니다',
      detail: '사원증 사진 촬영현장 스케치',
      backColor: '#79B0E4'
  },
  {
      backImage: imageWoman3,
      title: '원가혁신을 이끄는 3인의 히어로',
      detail: '원가절감팀을 만나다',
      backColor: '#5560B2'
  },
  {
      backImage: imageWoman4,
      title: '도예공방에서 행복을 빚다',
      detail: '해외영업1팀 홍명진 과장 가족',
      backColor: '#B84488'
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
          className="split-block2"
        >
          { carouselDatas.map((carouselData , index) => {
            return(
                  <div key={index} className="slide-inner">
                      <div className="inner-wrap" style={{backgroundColor: carouselData.backColor}}>
                        <div className="text-wrap">
                          <h2>{carouselData.title}</h2>
                          <p className="hero-p">{carouselData.detail}</p>
                        </div>
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

function Home() {
  return (
    <Wrapper>
      <div className="container draft-container">
        <div className="row">
            <div className="col-12">
              <AsNavFor />
            </div>
        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);  
`;

export default Home;
