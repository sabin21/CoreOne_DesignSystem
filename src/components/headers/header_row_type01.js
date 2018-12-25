import React from 'react';

export class HeaderRowType01 extends React.Component {
    
    render() {
        
      return (
        
            <div className="c1--header-row-type01">
                <div className="logo" style={{backgroundImage: `url(${this.props.logoImage})`}}></div>
                <ul className="menu-row">
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">제품소개</a></li>
                    <li><a href="#">고객지원</a></li>
                    <li><a href="#">홍보센터</a></li>
                    <li><a href="#">채용센터</a></li>            
                </ul>
                <ul className="util-menu">
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                </ul>
            </div>
            
        
      );
    }
  }

export default HeaderRowType01;
