import React from 'react';
import DocHeader from './doc_header';

export class DocFoundType extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Typography" intro="Visual 측면의 Identity와 컨텐츠의 구조적 일관성을 위한 타이포그래피의 기본적인 기준"></DocHeader>
                    <div className="container guide">
                        <div className="row">
                            <h4 className="system-chapter-subtitle">Typeface</h4>                        
                            <p>
                            Core ONE의 기본 Typeface는 OS별 기본 글꼴 중 산세리프 서체 중 고딕계열에 속하는 글꼴을 선택하여 사용한다. Core ONE은 범용성을 중시하며 다중언어와 멀티플랫폼에서 사용되는 것을 가정하였기 때문에 Webfont를 사용하지 않고 OS 기본 서체을 사용하는 것을 원칙으로 삼았다.
                            </p>
                        </div>

                        <div className="row">
                            <table class="table">
                            <caption className="caption">한국어  >  Gothic계열</caption>
                                <thead>
                                    <tr>
                                    <th scope="col">OS</th>
                                    <th scope="col">Font Family</th>                               
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Window</td>
                                    <td>Malgun Gothic, Dotum</td>                               
                                    </tr>
                                    <tr>
                                    <td>Mac OS, iOS</td>
                                    <td>Apple SD Gothic Neo</td>                              
                                    </tr>
                                    <tr>
                                    <td>Android</td>
                                    <td>Noto Sans CJK KR</td>                           
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <table class="table">
                            <caption className="caption">English  >  San-serif</caption>
                                <thead>
                                    <tr>
                                    <th scope="col">OS</th>
                                    <th scope="col">Font Family</th>                          
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Window</td>
                                    <td>Segoe UI</td>                               
                                    </tr>
                                    <tr>
                                    <td>Mac OS, iOS</td>
                                    <td>SF UI Text, SF UI Display</td>                              
                                    </tr>
                                    <tr>
                                    <td>Android</td>
                                    <td>Roboto</td>                           
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <div className="tipbox">
                                <p>
                                Web,App 디자인에서 Typeface의 선택과 적용은 브랜딩 측면에서 가장 중요한 요소이다. 그러나 한글의 경우 선택할 수 있는 웹폰트로 사용할 수 있는 글꼴의 숫자가 적었기 때문에 서체의 선택은 간과되어 왔다. 그러나 최근 몇년 사이에 한글폰트 제작이 활성화되고 웹폰트 서비스도 다양하게 이루어 지는 상황이므로 브랜드의 Identity을 위해 한글 글꼴의 선택을 신중하고 적극적으로 고려해야한다.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <h4 className="system-chapter-subtitle">Type Scale</h4>                        
                            <p>
                            글꼴의 크기 설정은 전체 Design System을 표준화하고 단순화시키기 위한 기반이 된다. Core ONE에서 사용되는 글꼴의 기본적인 크기설정은 Bootstrap와 대표적으로 잘 알려진 디자인시스템을 참조하여 설정하였다. 일반적인 용도로 사용되는 서체의 크기는 최소 10px에서 시작하여 2px 간격으로 커지고 있다. 
                            </p>
                        </div>

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">px</th>
                                        <th scope="col">rem</th>
                                        <th scope="col">example</th>                          
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10</td>
                                        <td>0.625</td>
                                        <td className="type-size-01">서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>0.75</td>
                                        <td className="type-size-02">서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>0.875</td>
                                        <td className="type-size-03">서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>1</td>
                                        <td className="type-size-04">서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>1</td>
                                        <td className="type-size-05">서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>1</td>
                                        <td className="type-size-06" style={{'padding':'1.25rem 0.75rem'}}>서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td>1</td>
                                        <td className="type-size-07" style={{'padding':'1.5rem 0.75rem'}}>서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>28</td>
                                        <td>1</td>
                                        <td className="type-size-08" style={{'padding':'1.75rem 0.75rem'}}>서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>1</td>
                                        <td className="type-size-09" style={{'padding':'2rem 0.75rem'}}>서체의 기본적인 크기</td>                               
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td>1</td>
                                        <td className="type-size-10" style={{'padding':'2rem 0.75rem'}}>서체의 기본적인 크기</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>1</td>
                                        <td className="type-size-11" style={{'padding':'2rem 0.75rem'}}>서체의 기본적인 크기</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <h6 className="title-3th">Display 용도 서체 크기</h6>
                            <span className="divide-line"></span>
                            <p className="display-4">디스플레이용 크기설정</p>
                            <span className="divide-line"></span>
                            <p className="display-3">디스플레이용 크기설정</p>
                            <span className="divide-line"></span>
                            <p className="display-2">디스플레이용 크기설정</p>
                            <span className="divide-line"></span>                       
                        </div>

                        <div className="row">
                            <h4 className="system-chapter-subtitle">Basic Formatting</h4>
                        </div>

                        <div className="row">                            
                            <h6 className="title-3th">Line Height</h6>                       
                            <p>
                            CoreONE의 타이포그래피 시스템에서는 3가지의 Line Height을 기준으로 사용한다. 디스플레이용도 및 Cards, Banner 등 영역안에서 사용되는 1.25em, 그리고 보다 여유로운 Line Height가 필요할 경우 사용하는 1.5em, 마지막으로 기본 본문 문단에서 사용하는 1.75em이다. 1.75em의 Line Height는 한글 서체의 가독성을 고려하여 알파벳을 사용하는 Design System에 비해 간격을 크게 조정하였다. 3가지 Line height중 광범위하게 사용되는 1.5em을 Standard로 삼고 용도에 따라 1.25,1.75을 구분하여 사용한다.
                            </p>
                        </div>

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Line Height</th>
                                    <th scope="col">Ratio</th>                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Small</td>
                                    <td>1 : 1.25</td>                               
                                    </tr>
                                    <tr>
                                    <td>Standard</td>
                                    <td>1 : 1.5</td>                              
                                    </tr>
                                    <tr>
                                    <td>Big</td>
                                    <td>1 : 1.75</td>                           
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">                            
                            <h6 className="title-3th">Font Weight</h6>                       
                            <p>
                            Font Weight는 서체의 스타일에 변화를 주는 가장 기본적인 방법이며 주로 특정 텍스트를 강조하거나 계층적인 차이를 표시하기 위해 사용한다.  CoreONE 에서 사용하는 Noto Sans는 다양한 Weight를 지원하나 실제 화면디자인 시에는 3개 정도의 Weight만을 선정하여 사용하는것이 바람직하다.
                            </p>
                        </div>

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Token</th>
                                    <th scope="col">Weight</th>                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>$font-weight-light</td>
                                    <td>300</td>                               
                                    </tr>
                                    <tr>
                                    <td>$font-weight-normal</td>
                                    <td>400</td>                              
                                    </tr>
                                    <tr>
                                    <td>$font-weight-bold</td>
                                    <td>700</td>                           
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">                            
                            <h6 className="title-3th">Letter length</h6>                       
                            <p>
                            텍스트 읽기를 수월하게 하기 위해서는 중간길이와 긴 길이의 텍스트는 공백을 포함하여 60~95자 범위의 너비로 조정해야 한다. 텍스트 길이가 지나치게 길 경우 사용자가 수평선의 흐름을 잃을 수 있으며 반대로 너무 짧은 경우에는 안구의 초점을 자주 이동해야 하므로 피로를 느끼게 한다. 
                            </p>
                        </div>

                    </div>
                    <div className="container">
                        <img src={require('../../img/design_guide/type_length.png')}  id="found-type-length"/>
                    </div>

                </div>             
            </div>
        );
    }
}

export default DocFoundType;
