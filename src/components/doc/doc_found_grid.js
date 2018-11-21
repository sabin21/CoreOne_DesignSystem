import React from 'react';

export class DocFoundGird extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container guide">
                            <h1 className="system-chapter-title">Grid</h1>
                            <p>모든 시스템 구성요소의 구성 및 위치를 결정하는 기본 구조 패턴 정의</p>
                        </div>
                    </div>
                    <div className="container guide">
                        
                        <div className="row">
                            <p>
                            레이아웃 프레임 워크의 목적은 구성 요소 구조 및 페이지 작성 프로세스를 간소화하고 인터페이스의 여러 요소들간의 시각적 일관성을 유지하는 데 도움이되는 공통된 구조의 지침을 제공하는데 있다.
                            </p>
                        </div>
                        <div className="row">
                        <h4 className="system-chapter-subtitle">Base Grid</h4>                        
                        <img src={require('../../img/design_guide/grid_8px.png')} />
                                                                        
                        <p>
                        DPI에 상관없이 동일한 단위기준이 되는 pt나 dp단위는 인쇄물 해상도 또는 화면해상도에 독립적인 크기를 나타내는 단위이다. 그러나 디자인 작업시의 제작물은 특정 해상도를 기준으로 삼아 절대적 값을 정의하여 제작해야 하므로 pt나 dp 단위가 아닌 px단위를 사용해야 한다. 기본적으로 8pt = 8dp = 8px 로 환원하여 작업을 진행한다.
                        <br />실제 화면 디자인에서 구체적인 적용방법에 대해서는 아래 링크글을 참조한다.<br />
                            <a href="https://blog.prototypr.io/the-8pt-grid-consistent-spacing-in-ui-design-with-sketch-577e4f0fd520" target="_blank">
                                The 8pt Grid: Consistent Spacing in UI Design with Sketch
                            </a>
                        </p>
                        <img src={require('../../img/design_guide/grid_example1.png')} />
                        <p>위에서 보여지는 예시처럼 디자인에 Metric 기준을 적용하면 디자이너와 개발자 간의 의사소통이 개선되며 디자이너 입장에서는 레이아웃 구조를 설계할때 의사결정을 신속하게 할 수 있게 된다. 그러나 8px기준의 Metric 단위를 전체에 적용할 경우 작은 요소 사이의 간격 같은 특정 상황에서 지나치게 간격이 넓은 경우가 발생하게 된다. 이러한 경우에 부분적으로 4px 단위를 사용할 수 있다.</p>
                        <h4 className="system-chapter-subtitle">Spacing</h4>
                        <p>Spacing Token은 구성요소과 UI 전체에 Margin, Padding을 일관되게 적용하기위해 사용한다. Spacing과 일관되게 적용되면 화면디자인 전체에 리듬감이 생기고 페이지간에 자연스럽고 익숙한 패턴이 만들어 진다.</p>
                        </div>

                        <div className="row">
                        <h6 className="title-3th">Spacing Scale</h6>
                        <p>Spacing Scale는 세부적인 컴포넌트 사이의 간격 또는 작은 UI 의 기본 Padding,Margin 값에 적용하는 용도로 사용한다. 이는 미세한 간격조절을 통일시키기 위한 것이기 때문에 2~4px의 작은 단위로 시작하여 기본 Metric 단위인 8px을 세분하여 사용한다.</p>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Token</th>
                                <th scope="col">px</th>
                                <th scope="col">rem</th>
                                <th scope="col">example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$spacing-01</td>
                                    <td>2</td>
                                    <td>0.125</td>
                                    <td><span className="spacing-chip-1"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-02</td>
                                    <td>4</td>
                                    <td>0.25</td>
                                    <td><span className="spacing-chip-2"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-03</td>
                                    <td>8</td>
                                    <td>0.5</td>
                                    <td><span className="spacing-chip-3"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-04</td>
                                    <td>12</td>
                                    <td>0.75</td>
                                    <td><span className="spacing-chip-4"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-05</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-5"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-06</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-6"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-07</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-7"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-08</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-8"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-09</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-9"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-10</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-10"></span></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                        <div className="row">
                        <h6 className="title-3th">Layout Spacing Scale</h6>
                        <p>Layput Spacing은 말그대로 전체 화면의 레이아웃의 기준을 삼기위한 용도로 사용되며 Container 사이의 간격 등 큰 레이아웃에 사용되므로 최소 16px에서 시작하여 8의 배수로 커지게 설정한다. </p>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Token</th>
                                <th scope="col">px</th>
                                <th scope="col">rem</th>
                                <th scope="col">example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$spacing-01</td>
                                    <td>2</td>
                                    <td>0.125</td>
                                    <td><span className="spacing-chip-1"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-02</td>
                                    <td>4</td>
                                    <td>0.25</td>
                                    <td><span className="spacing-chip-2"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-03</td>
                                    <td>8</td>
                                    <td>0.5</td>
                                    <td><span className="spacing-chip-3"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-04</td>
                                    <td>12</td>
                                    <td>0.75</td>
                                    <td><span className="spacing-chip-4"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-05</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-5"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-06</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-6"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-07</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-7"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-08</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-8"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-09</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-9"></span></td>
                                </tr>
                                <tr>
                                    <td>$spacing-10</td>
                                    <td>16</td>
                                    <td>1</td>
                                    <td><span className="spacing-chip-10"></span></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>

                        <div className="row">
                        <h4 className="system-chapter-subtitle">Base Grid</h4>                        
                                                                        
                        <p>
                        DPI에 상관없이 동일한 단위기준이 되는 pt나 dp단위는 인쇄물 해상도 또는 화면해상도에 독립적인 크기를 나타내는 단위이다. 그러나 디자인 작업시의 제작물은 특정 해상도를 기준으로 삼아 절대적 값을 정의하여 제작해야 하므로 pt나 dp 단위가 아닌 px단위를 사용해야 한다. 기본적으로 8pt = 8dp = 8px 로 환원하여 작업을 진행한다.
                        </p>
                        <img src={require('../../img/design_guide/grid_example1.png')} />
                        <p>위에서 보여지는 예시처럼 디자인에 Metric 기준을 적용하면 디자이너와 개발자 간의 의사소통이 개선되며 디자이너 입장에서는 레이아웃 구조를 설계할때 의사결정을 신속하게 할 수 있게 된다. 그러나 8px기준의 Metric 단위를 전체에 적용할 경우 작은 요소 사이의 간격 같은 특정 상황에서 지나치게 간격이 넓은 경우가 발생하게 된다. 이러한 경우에 부분적으로 4px 단위를 사용할 수 있다.</p>
                        <h4 className="system-chapter-subtitle">Spacing</h4>
                        <p>Spacing Token은 구성요소과 UI 전체에 Margin, Padding을 일관되게 적용하기위해 사용한다. Spacing과 일관되게 적용되면 화면디자인 전체에 리듬감이 생기고 페이지간에 자연스럽고 익숙한 패턴이 만들어 진다.</p>
                        </div>


                    </div>                    
                </div>             
            </div>
        );
    }
}

export default DocFoundGird;
