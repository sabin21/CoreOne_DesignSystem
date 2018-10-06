import React from 'react';

export class StyleIcon extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Iconography</h1>
                            <p>Typography 관련 가이드 중 기본적인 Body Text의 기준 사이즈와 행간, 헤드라인 텍스트의 설정</p>
                        </div>
                    </div>
                    <div className="container">
                        <h4 className="system-chapter-subtitle">Icon Grid</h4>
                        <figure className="system-figure-wrap">
                            <img src={require('../img/design_guide/icon_grid_1.png')} id="icon_grid_1"/>                            
                        </figure>
                        <div className="row">
                        
                            <p className="col-md-8 offset-md-2">
                                브라우저의 기본 폰트 사이즈 16px을 1rem으로 기준으로 한다. 0.25rem : 4px를 최소 단위로 삼는다.
                                기본 line-height: 1.75em. 페이지 전체 레이아웃에서 요소들 사이의 가로 여백과 요소들이 갖는 높이가 조화되기 위해서
                                가장 기초적인 방법은 기본 폰트사이즈와 line-height를 기반으로 한 Row Grid를 설정하는 것이다.
                            </p>
                        </div>

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Icon Shape Guide</h4>
                        <figure className="system-figure-wrap">
                            <img src={require('../img/design_guide/icon_shape.png')} id="icon_shape"/>                            
                        </figure>

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Icon Size</h4>
                        <figure className="system-figure-wrap">
                            <img src={require('../img/design_guide/icon_size.png')} id="icon_size"/>                            
                        </figure>
                        
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default StyleIcon;
