import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import classNames from 'classnames/bind';
import styles from '../../style.scss';
const cx = classNames.bind(styles);

var imageWoman1 = require('./img/slide_01.png');
var imageWoman2 = require('./img/slide_02.png');
var imageWoman3 = require('./img/slide_03.png');
var imageWoman4 = require('./img/slide_04.png');

var thumb1 = require('./img/card_thumb_b_1.png');
var thumb2 = require('./img/card_thumb_b_2.png');
var thumb3 = require('./img/card_thumb_b_3.png');
var thumb4 = require('./img/card_thumb_b_4.png');
var thumb5 = require('./img/card_thumb_b_5.png');
var thumb6 = require('./img/card_thumb_b_6.png');

const carouselDatas = [
  {
      backImage: imageWoman1,
      title: '인생의 봄, 그꽃을 피워라',
      detail: '최진용 사장님과 함께한 미술관 산책',
      backColor: '#F47D7D'
  },
  {
      backImage: imageWoman2,
      title: '2019년 봄, 대한챔피언',
      detail: '동수상응하게 하여 높은 성과를 달성한 영업의 고수 2인을 만나다',
      backColor: '#79B0E4'
  },
  {
      backImage: imageWoman3,
      title: '도예공방에서 행복을 빚다',
      detail: '해외영업1팀 홍명진 과장 가족의 따뜻한 그릇만들기 강좌',
      backColor: '#5560B2'
  },
  {
      backImage: imageWoman4,
      title: '흔들림없는 의지의 힘으로',
      detail: '대한전선 초고압 절연공정의 살아 있는 전설, 초고압생산팀의 권병선 반장',
      backColor: '#B988D7'
  }
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slick-next"}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"slick-prev"}
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
          arrows = {true}
          fade = {true}
          dots={true}
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
          dots="false"
          arrows = {false}
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
                      <div className="btn"></div>
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
  return (
    <div className="wrap-b">
        <img className="logo" src={require('./img/logo_2.png')} />
        <div className={`burger-click-region ${burgerVis}`} onClick={this.toggleMenu}>
            <span className="burger-menu-piece"></span>
            <span className="burger-menu-piece"></span>
            <span className="burger-menu-piece"></span>
        </div>
        <div className={`gnb-sub-wrap-b ${menuVis}`}>
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

      <div className="container draft-container">
        

        <div className="row">
            <div className="col-12">
              <AsNavFor />
            </div>
        </div>
        <div className="row row-1">      
          <div className="col-12 col-md-5" >
                <div className="card-split-type-01">
                    <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url('./img/card_thumb_b_1.png')`}}></div>
                    <div className="body-wrap">
                        <p className="title">빛나는 내일을 향해 화살을 쏴라!</p>
                        <p className="detail">대한전선 4인방의 양궁체험기</p>
                        <img className="arrow" src={require('./img/card_arrow.png')} />
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-5" >
                <div className="card-split-type-01">
                    <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url('./img/card_thumb_b_2.png')`}} id="card-2"></div>
                    <div className="body-wrap">
                        <p className="title">더 나은 미래를 향해 날개를 달아라</p>
                        <p className="detail">2019년 신입사원 입문교육현장</p>
                        <img className="arrow" src={require('./img/card_arrow.png')} />
                    </div>
                </div>
            </div>          
        </div>

        <div className="row row-2">      
          <div className="col-12 col-md-5 offset-md-2" >
                <div className="card-split-type-01">
                    <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url('./img/card_thumb_b_3.png')`}} id="card-3"></div>
                    <div className="body-wrap">
                        <p className="title">당신의 점심풍경은 식사파? 운동파?</p>
                        <p className="detail">Check & Check</p>
                        <img className="arrow" src={require('./img/card_arrow.png')} />
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-5" >
                <div className="card-split-type-01">
                    <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url('./img/card_thumb_b_4.png')`}} id="card-4"></div>
                    <div className="body-wrap">
                        <p className="title">최고의 기술로 세상을 연결하다</p>
                        <p className="detail">154KV 봉천노들현장</p>
                        <img className="arrow" src={require('./img/card_arrow.png')} />
                    </div>
                </div>
            </div>          
        </div>

        <div className="row row-2">      
          <div className="col-12 col-md-5 push-col-1" >
                <div className="card-split-type-01">
                    <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url('./img/card_thumb_b_5.png')`}} id="card-5"></div>
                    <div className="body-wrap">
                        <p className="title">신조어, 신문화를 대변하다</p>
                        <p className="detail">60초로 읽는 문화</p>
                        <img className="arrow" src={require('./img/card_arrow.png')} />
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-5" >
                <div className="card-split-type-01">
                    <div className="thumb-wrap ratio4x4 " style={{backgroundImage: `url('./img/card_thumb_b_6.png')`}} id="card-6"></div>
                    <div className="body-wrap">
                        <p className="title">가족과 함께 빚는 사랑의 도자기</p>
                        <p className="detail">해외영업1팀 홍명진 과장 가족</p>
                        <img className="arrow" src={require('./img/card_arrow.png')} />
                    </div>
                </div>
            </div>          
        </div>
            <img className="back-circle1" src={require('./img/back_circle1.png')} />
            <img className="back-circle2" src={require('./img/back_circle1.png')} />
      </div>
      </div>
  );
  }
}

export default Home;
