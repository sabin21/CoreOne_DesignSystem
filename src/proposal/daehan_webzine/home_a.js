import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import classNames from 'classnames/bind';
import styles from '../../style.scss';
const cx = classNames.bind(styles);

import '../../scss/components/_burger_01.scss';

var slidePict1 = require('./img/slide_pict1.png');
var slidePict2 = require('./img/slide_pict2.png');
var slidePict3 = require('./img/slide_pict3.png');
var slidePict4 = require('./img/slide_pict4.png');
var slideCopy1 = require('./img/slide_copy1.png');
var slideCopy2 = require('./img/slide_copy2.png');
var slideCopy3 = require('./img/slide_copy3.png');
var slideCopy4 = require('./img/slide_copy4.png');
var cardThumb1 = require('./img/card_thumb_1.png');
var cardThumb2 = require('./img/card_thumb_2.png');
var cardThumb3 = require('./img/card_thumb_3.png');
var cardThumb4 = require('./img/card_thumb_4.png');
var cardThumb5 = require('./img/card_thumb_5.png');
var cardThumb6 = require('./img/card_thumb_6.png');
var cardThumb7 = require('./img/card_thumb_7.png');
var cardThumb8 = require('./img/card_thumb_8.png');

const carouselDatas = [
  {
    backImage: slidePict1,
    copyImage: slideCopy1,
    title: "인생의 봄,\n그꽃을 피워라",
    detail: '최진용 사장님과 함께한 미술관 산책',
    backColor: '#F47D7D'
  },
  {
    backImage: slidePict2,
    copyImage: slideCopy2,
    title: '우리모두가 대한전선의 얼굴입니다',
    detail: '사원증 사진 촬영현장 스케치',
    backColor: '#79B0E4'
  },
  {
    backImage: slidePict3,
    copyImage: slideCopy3,
    title: '원가혁신을 이끄는 3인의 히어로',
    detail: '원가절감팀을 만나다',
    backColor: '#5560B2'
  },
  {
    backImage: slidePict4,
    copyImage: slideCopy4,
    title: '도예공방에서 행복을 빚다',
    detail: '해외영업1팀 홍명진 과장 가족',
    backColor: '#B84488'
  }
]

const post1s = [
    {   
        thumbnail: cardThumb1,
        title: '대한전선 4인방의 양궁체험기 내일을 향해 화살을 쏴라!',
        detail: '따로 또 같이'
    },
    {   
        thumbnail: cardThumb2,
        title: '대한전선의 더 나은 미래를 향해 날개를 달아라',
        detail: '2019년 신입사원 입문교육현장'
    },
    {   
        thumbnail: cardThumb3,
        title: '당신의 점심풍경은 식사파? 운동파?',
        detail: 'Check & Check'
    },
    {   
        thumbnail: cardThumb4,
        title: '154KV 봉천노들현장. 최고의 기술로 세상을 연결하다',
        detail: '대한통신원'
    },
    {   
        thumbnail: cardThumb5,
        title: '신조어,신문화를 대변하다',
        detail: '60초로 읽는 문화'
    },
    {   
        thumbnail: cardThumb6,
        title: '자동차의 오래된 미래, 전기자동차의 현재와 미래상',
        detail: 'Electricity World'
    },
    {   
        thumbnail: cardThumb7,
        title: '"집중" 휴가사진 Contest. 마음에 드는 사진에 투표하세요 ',
        detail: '와글와글+기경영'
    },
    {   
        thumbnail: cardThumb8,
        title: '가족과 함께 빚는 사랑의 도자기',
        detail: '해외영업1팀 홍명진 과장 가족'
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
      nav2: this.slider2
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
          fade = {true}
          dots = {true}
          className="split-block2"
        >
          { carouselDatas.map((carouselData , index) => {
            return(
                  <div key={index} className="slide-inner">
                      <div className="inner-wrap"  style={{backgroundImage: `url(${carouselData.copyImage})`}}>
                        
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


export class Home extends React.Component {
    state = { 
        showMenu: false,
        burgerActive: false
    }

    toggleMenu = () =>{
        this.setState({
            showMenu: !this.state.showMenu,
            burgerActive: !this.state.burgerActive
        })
    }
    
    render(){
        
        const menuVis = this.state.showMenu ? 'show' : 'hide';
        const burgerVis = this.state.burgerActive ? 'active' : 'closing';
        const BasicCardWhite = post1s.map((post1, index) => {        
            return(
                <div className="col-12  col-sm-6 col-md-3" key={index} style={{marginBottom: '1.5rem'}}>
                    <div className="c1--card-basic card-shadow ">
                        <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url(${post1.thumbnail})`}}></div>
                        <div className="text-block back-white">
                            <p className="title">{post1.title}</p>
                            <p className="detail">{post1.detail}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className ="draft-a-container">
                <div className={`burger-click-region ${burgerVis}`} onClick={this.toggleMenu}>
                    <span className="burger-menu-piece"></span>
                    <span className="burger-menu-piece"></span>
                    <span className="burger-menu-piece"></span>
                </div>
                <div className={`gnb-sub-wrap ${menuVis}`}>
                    <ul className="menu-wrap">
                        <li>
                            <ul className="menu-sub">
                                <li>파이팅</li>
                                <li>위드 CEO</li>
                                <li>대한뉴스</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-sub">
                                <li>한마음</li>
                                <li>대한챔피언</li>
                                <li>따로 또 같이</li>
                                <li>찰칵 패밀리데이</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-sub">
                                <li>새롭게</li>
                                <li>테크이슈</li>
                                <li>대한스페셜</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="menu-sub">
                                <li>즐기자</li>
                                <li>시네마테라피</li>
                                <li>체헐리즘 1박2일</li>
                                <li>이벤트</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="hero-wrap">
                    <div className="logo-wrap"></div>
                    <div className="visual-back"></div>
                    <div className="visual-cover"></div>
                    <div className="slider-deco"></div>
                    <div className="slider-copy-back"></div>
                    <AsNavFor />
                </div>
                
            <div className="container" style={{margin: '4rem auto'}}>
                
                <div className="row">
                    {BasicCardWhite}
                </div>

            </div>
            </div>
        );
        }
}

export default Home;
