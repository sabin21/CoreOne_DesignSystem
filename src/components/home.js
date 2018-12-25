import React from 'react';

export class Home extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="hero-wrap home">
                        <div className="hero-title-wrap home">
                            <p className="logo">Core ONE</p>
                            <p>An Experience Language for Crafting Beautiful UI</p>
                        </div>    
                    </div>
                    <div className="container guide home">
                        <div className="row">
                            <p className="lead">Core ONE은 Web Application의 UI설계, 디자인,개발을 위한 UI/UX의 기본 원칙이자 Design Language이며 <br/>컴포넌트화된 UI Library가 일관된 원칙에 따라 통합된 <br/>Design System이다</p>
                            <span className="divider-lead"></span>
                            <p>
                            Core ONE은 디자이너만을 위한 Sketch Library가 아니며 프론트엔드 개발자 만을 위한 재사용 가능한 Code Library만이 아니다. 또한 UI설계자를 위한 UI Library를 의미하는 것도 아니다. 기존의 Design Style Guide를 생각해서도 안된다.CoreONE Design System은 특정 브랜드를 위한 Digital Product를 제작할 때 UI설계,디자인,개발 전체를 위한 통일된 언어이자 기본골조의 역할을 하는 통합된 시스템으로 고안되었다.
                            </p>
                        </div>

                        <h4>CoreONE Design System의 구성</h4>
                        <div className="row cards-wrap">
                            <div className="col-md-6">
                                <div className="card-home1">
                                    <p className="title">Foundation</p>
                                    <p>
                                    - Grid <br/>
                                    - Column Grid <br/>
                                    - Color <br/>
                                    - Typography <br/>
                                    - Iconography <br/>
                                    - etc
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home1">
                                    <p className="title">Components</p>
                                    <p>
                                    - Core Components <br/>
                                    - Forms <br/>
                                    - Cards <br/>
                                    - Carousel <br/>
                                    - Modal <br/>
                                    - etc
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home1">
                                    <p className="title">Design Patterns</p>
                                    <p>
                                    - Article List <br/>
                                    - Article View <br/>
                                    - Carousel Patterns <br/>
                                    - Cards Patterns <br/>
                                    - List <br/>
                                    - etc
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home1">
                                    <p className="title">Resource</p>
                                    <p>
                                    - Sketch Library <br/>
                                    - Design Resource <br/>
                                    </p>
                                </div>
                            </div>                                                      
                        </div>

                        <h4>Benefit of Design System</h4>
                        <div className="row cards-wrap">
                            <div className="col-md-6">
                                <div className="card-home2">
                                    <p className="title">Speed</p>
                                    <p>
                                    미리 준비되어 있는 Component를 재사용함으로써 디자이너들은 동일한 요소의 재작업을 하지 않고 디지털 제품의 컨셉과 기능에 집중할 수 있게 된다. 개발자들은 이미 검증된 Component을 재사용함으로써 반복작업을 최소화하고 테스트에 소요되는 시간 또한 절약할 수 있다. 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home2">
                                    <p className="title">Scale</p>
                                    <p>
                                    섬세하게 준비되어 있는 공통된 Visual Language을 사용하여 Digital Product를 디자인 할 경우 추후 부가적인 사항이 추가되거나 변경되더라도 쉽게 대응할 수 있게 된다. 디자인 시스템의 UI Library을 사용하므로 일관성을 유지하면서 효율적으로 규모를 키울 수 있는 것이다.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home2">
                                    <p className="title">Innovation</p>
                                    <p>
                                    Digital Product 들에서 공통된 요소들 버튼, 폼스타일, 그리드, 레이아웃 등을 반복하여 만들 필요가 줄어들기 때문에 디자이너와 프론트엔드 개발자 들은 중요한 컨텐츠나 서비스의 사용자 경험 향상 같은 핵심적인 문제에 집중하여 보다 진화된 아이디어를 추구 할 수 있게 된다. 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home2">
                                    <p className="title">Consistency</p>
                                    <p>
                                    특정 프로젝트를 진행할 때 팀원의 변경 및 인원의 추가가 발생하는 경우는 빈번하다. 이때 UI설계, 디자인과 코딩의 일관성이 훼손되는 경우 또한 필연적으로 발생하게 된다. 설사 프로젝트가 완료되고 나서도 운영과정에서 Digital Product의 일관성이 희미해져 가게 된다. 이러한 문제점을 Design System을 통해 미연에 방지하도록 한다.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home2">
                                    <p className="title">Teamwork</p>
                                    <p>
                                    Digital Product를 구성하는 다양한 요소들에 대한 용어 및 이해가 팀원들 개개인 또는 파트에 따라 다를 경우 전체 프로젝트 과정에서 오해로 인해 작업의 효율성이 저하되거나 결과물의 품질에 문제가 생기게 된다. Design System에 정의된 UI Library와 Component 규정을 따를 경우 팀웍에서 생기는 문제를 상당부분 해결할 수 있다. 
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-home2">
                                    <p className="title">Junior Education</p>
                                    <p>
                                    프로젝트 팀원들중 UI설계,디자인,Front-end 개발자들에 Junior 급의 인력은 항상 존재한다. 이때 Junior급에 특정부분의 단순업무 만 부과할 경우 장기적으로 Junior급의 성장을 위한 기회가 박탈된다. Design System을 통해 Digital Product의 전체를 파악하면서 자신의 업무를 진행할 수 있도록 해야 한다.
                                    </p>
                                </div>
                            </div>                                                      
                        </div>

                    </div>
                </div>             
            </div>
        );
    }
}

export default Home;
