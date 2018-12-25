import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../src/style.scss';
import HeaderRowType01 from '../components/headers/header_row_type01';
const cx = classNames.bind(styles);

const LogoImgDummy = require('../img/patterns/logo_dummy.png');
const Type01Datas = [
    { imgLogo : ""}
]

export class SiteHeaders01 extends React.Component {
    render() {
                        
      return (
        <div className="page-wrap" style={{background: '#f7f7f7'}}>
            <div className="content-wrap">
                <div className="system-header">
                    <div className="container guide">
                        <h1 className="system-chapter-title">Headers</h1>
                        <p>Website의 GNB역할을 수행하는 Header의 주요 패턴 예시</p>
                    </div>
                </div>
                <div className="container guide">
                    
                    <h4 className="tiny-title">Card / back-white / ratio4x3</h4>
                </div>
                <div className="content-full-wrap">
                    <HeaderRowType01 logoImage={LogoImgDummy} />
                </div>

                
                
            </div>
        </div>
      );
    }
  }

export default SiteHeaders01;
