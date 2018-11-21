import React from 'react';
import DocHeader from './doc_header';

export class DocFoundMotion extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Motion" intro="UI/UX에 리듬과 성격을 부여하고 사용성을 높이는 모션"></DocHeader>
                    <div className="container guide">
                        
                        <div className="row">
                            <p>
                            모션은 Application에 캐릭터와 리듬을 부여하며 피드백을 통해 사용성을 향상시키고 사용자에서 사용방법에 대한 가이드를 제공하는 역할을 한다. 제대로 구현된 UI Motion은 전체 Application을 조화롭게 느끼게 하며 Application에 물리적인 실체감을 부여한다.
                            </p>
                            <h4 className="system-chapter-subtitle">Motion 디자인의 원칙</h4>
                        </div>
                        <div className="row">
                            <h6 className="title-3th">목적과 의도가 뚜렷한 모션</h6>
                            <p>
                            사용자경험에서의 Motion은 그 의도가 뚜렷하고 의미를 담고 있어야 한다. Motion은 특정 UI 요소에 사용자을 집중하도록 하거나 UI요소를 사용하는 방법에 대한 가이드를 제공하는 등의 목적이 명확해야 한다는 것이다. 
                            </p>
                        </div>
                        <div className="row">
                            <h6 className="title-3th">현실경험의 움직임을 반영한 모션</h6>
                            <p>
                            Motion Design은 일상 현실에서 물리적인 경험에서 체험하는 움직임을 반영해야 한다. 중력과 관성등 일상 경험속의 움직임에 대한 예측을 토대로 모션을 디자인 하여 사용자가 예측할 수 있도록 한다. 
                            </p>
                        </div>
                        <div className="row">
                            <h6 className="title-3th">눈에 거슬리지 않는 자연스러움</h6>
                            <p>
                            Motion Design이 지나치게 특이하거나 눈에 띄게 되면 사용자의 주의를 오히려 어지럽히게 된다. Motion은 있는 듯 없는 듯 UI 일부로서 녹아들어 사용자의 경험을 밑에서 뒷받침하는 역할을 수행해야한다.
                            </p>
                        </div>

                        <div className="row">                            
                            <h4 className="system-chapter-subtitle">Duration</h4>
                            <p>
                            Motion은 사용자가 그 움직임을 인지할 수 있을 정도로 느려야 하지만 너무 느리게 되면 사용성을 저해한다. Motion의 시간을 결정할 때는 그 용도와 요소의 크기등을 생각해야 한다. Hover, Focus 액션 등 즉각적인 피드백이 필요한 부분에서는 100~300ms 정도의 속도가 일반적이며 가이드 역할을 하는 경우에는 보다 인지하는데 시간이 걸리므로 보다 길게 시간을 설정하는 것이 일반적이다.
                            </p>
                        </div>

                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Buttons / Small Components</td>
                                    <td>100-200ms</td>
                                    </tr>
                                    <tr>
                                    <td>Alerts / Data Sorting</td>
                                    <td>250-300ms</td>
                                    </tr>
                                    <tr>
                                    <td>Modals / Accordian</td>
                                    <td>300-400ms</td>
                                    </tr>
                                    <tr>
                                    <td>Page Transitions</td>
                                    <td>500-700ms</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">                            
                            <h4 className="system-chapter-subtitle">Easing</h4>
                            <p>
                            똑같은 속도로 움직이는 모션은 사람의 눈에 이상하게 인식된다. 일상 생활속의 모션은 관성과 중력에 따라 속도가 변하는 움직임이기 때문에 속도를 어떻게 조절하느냐에 따라 모션이 어색할 수도 있고 자연스러울 수도 있다. 일반적인 자연스러운 움직임은 부드럽게 가속하고 감속하는 흐름이다.
                            </p>
                        </div>
                    </div>

                    <div className="container no-gutter guide">

                        <div className="row">
                            <img src={require('../../img/design_guide/easing_01.png')} className="col col2-img" />
                            <div className="col col2-block">
                                <h6 className="title-3th">Ease-In-Out-Cubic (Standard)</h6>
                                <p>
                                Ease-In-Out-Cubic 베지어(0.5, 0, 0.1, 1)는 대부분의 애니메이션에서 광범위하게 사용된다. 흔히 스테이지에 특정 요소가 등장했다가 사라지는 모션모션이 끝나는 부분의 속도를 제일 느리게하여 모션을 통해 등장하는 UI요소에 주목도를 높이게 된다. 
                                </p>
                            </div>
                        </div>

                        <div className="row" style={{'margin-top':'2rem'}}>
                            <img src={require('../../img/design_guide/easing_02.png')} className="col col2-img" />
                            <div className="col col2-block">
                                <h6 className="title-3th">Ease-Out</h6>
                                <p>
                                Ease-Out 은 등속 운동 보다 더 빠르게 모션을 시작하여 마지막에 감속하는 형태이다. Ease-Out은 빠른 시작으로 모션에 반응하는 효과를 주면서 마지막에 자연스러운 감속효과를 나타내기 때문에 UI요소에 빈번하게 사용된다.<br/><br/>
                                Core ONE에서는 특정 UI요소가 스테이지로 이동하여 등장할때 사용한다. 
                                </p>
                            </div>
                        </div>

                        <div className="row" style={{'margin-top':'2rem'}}>
                            <img src={require('../../img/design_guide/easing_03.png')} className="col col2-img" />
                            <div className="col col2-block">
                                <h6 className="title-3th">Ease-In</h6>
                                <p>
                                Ease-In은 Ease-Out와 반대로 느리게 시작했다가 빠르게 끝나는 모션 형태이다. 이러한 종류의 모션은 무거운 돌이 떨어지는 것처럼 느리게 시작했다가 빠르게 지면을 때리는 듯한 느낌을 준다. <br /><br />
                                이러한 특성때문에 Ease-In은 UI요소가 스테이지에 나타나는 효과에 쓰기는 부적절하며 CoreONE에서는 UI요소가 스테이지에서 사라지거나 제거될대 사용한다.
                                </p>
                            </div>
                        </div>

                        <div className="row guide-infobox">
                            <h6>관련 자료 및 정보</h6>
                            <p><a href="https://codepen.io/bloodyrosa/pen/GwrjZv" target="_blank">Easing 이해를 위한 예제 링크 (codepen)</a></p>
                        </div>

                    </div>

                </div>             
            </div>
        );
    }
}

export default DocFoundMotion;
