import React from 'react';
import classNames from 'classnames/bind';
import CardOverlay01 from '../components/cards/overlay_type01';
import styles from '../../src/style.scss';
const cx = classNames.bind(styles);

var backImage1 = require('../img/photo_sample/1280/woman_01.jpg');
var backImage2 = require('../img/photo_sample/1280/woman_02.jpg');
var backImage3 = require('../img/photo_sample/1280/woman_03.jpg');

const post1s = [
    {   
        thumbnail: backImage1,
        title: '홀로 떠나는 여행의 추억과 그 기억의 흔적들을 만나다.',
        detail: '2019.10.25 | Ghost Writer',
        isVideo: false,
        darkScreen: false
    },
    {   
        thumbnail: backImage2,
        title: '홀로 떠나는 여행의 추억과 그 기억의 흔적들을 만나다.',
        detail: '2019.10.25 | Ghost Writer',
        isVideo: true,
        darkScreen: true
    },
    {   
        thumbnail: backImage3,
        title: '홀로 떠나는 여행의 추억과 그 기억의 흔적들을 만나다.',
        detail: '2019.10.25 | Ghost Writer',
        isVideo: false,
        darkScreen: false
    }
]

export class CardPattern01 extends React.Component {
    render() {
        
        const basicCards = post1s.map((post1, index) => {
               
            return(
                <div className="col-4 c1--card-basic" key={index}>
                    <div className="thumb-wrap ratio4x4" style={{backgroundImage: `url(${post1.thumbnail})`}}>
                        <span className="action-wrap">
                            <button className="btn-play">
                                <svg id="ad4c3f97-1e75-45ce-8f8b-0aeeb8d2d1ef" data-name="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path className="icon-action-play" d="M456.27,279.1,211.93,138A24.62,24.62,0,0,0,175,159.34V441.49a24.62,24.62,0,0,0,36.93,21.32L456.27,321.74A24.61,24.61,0,0,0,456.27,279.1Z"/></svg>
                            </button>
                        </span>
                        <span className={cx('dark-overlay',{'is-active': post1.darkScreen})}></span>
                    </div>
                    <div className="text-block">
                        <p className="title">{post1.title}</p>
                        <p className="detail">{post1.detail}</p>
                    </div>
                </div>
            )
        });
        const basicCardWhite = post1s.map((post1, index) => {        
            return(
                <div className="col-4 c1--card-basic" key={index}>
                    <div className="thumb-wrap ratio4x3" style={{backgroundImage: `url(${post1.thumbnail})`}}></div>
                    <div className="text-block back-white">
                        <p className="title">{post1.title}</p>
                        <p className="detail">{post1.detail}</p>
                    </div>
                </div>
            )
        });
        const CardOverlay01Sample = post1s.map((post1, index) => {
            return(
                <div className="col-12 col-sm-6 col-md-4">
                <CardOverlay01 key={index} {...post1} />
                </div>
            );
        })
      return (
        <div className="page-wrap" style={{background: '#f7f7f7'}}>
            <div className="content-wrap">
                <div className="system-header">
                    <div className="container guide">
                        <h1 className="system-chapter-title">Cards</h1>
                        <p>Slick 라이브러리를 활용한 다양한 유형의 Carousel 패턴</p>
                    </div>
                </div>
                <div className="container guide">
                    <h4 className="tiny-title">Card / basic / ratio4x4</h4>
                    <div className="row">
                        {basicCards}
                    </div>
                    <h4 className="tiny-title">Card / back-white / ratio4x3</h4>
                    <div className="row">
                        {basicCardWhite}
                    </div>

                    <h4 className="tiny-title">Card / back-white / ratio4x3</h4>
                    <div className="row">
                        {CardOverlay01Sample}
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  }

export default CardPattern01;
