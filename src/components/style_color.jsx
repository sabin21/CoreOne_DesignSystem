import React from 'react';

export class StyleColor extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Color System</h1>
                            <p>Typography 관련 가이드 중 기본적인 Body Text의 기준 사이즈와 행간, 헤드라인 텍스트의 설정</p>
                        </div>
                    </div>
                    <div className="container">
                        
                        <p>
                            브라우저의 기본 폰트 사이즈 16px을 1rem으로 기준으로 한다. 0.25rem : 4px를 최소 단위로 삼는다.
                            기본 line-height: 1.75em. 페이지 전체 레이아웃에서 요소들 사이의 가로 여백과 요소들이 갖는 높이가 조화되기 위해서
                            가장 기초적인 방법은 기본 폰트사이즈와 line-height를 기반으로 한 Row Grid를 설정하는 것이다.
                        </p>
                        

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Headline<span> - Basic</span></h4>
                        
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default StyleColor;
