import React from 'react';

export class StyleGrid extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container guide">
                            <h1 className="system-chapter-title">Grid</h1>
                            <p>Baseline 기반의 Vertical Grid와 Horizontal Responsive Grid</p>
                        </div>
                    </div>
                    <div className="container guide">
                        
                        <div className="row mt32">
                            <p className="col">
                            레이아웃 프레임 워크의 목적은 구성 요소 구조 및 페이지 작성 프로세스를 간소화하고 인터페이스의 여러 요소들간의 시각적 일관성을 유지하는 데 도움이되는 공통된 구조의 지침을 제공하는데 있다.
                                <br />
                                <a href="https://material.io/design/layout/understanding-layout.html#usage" target="_blank">
                                    Google Material Design Layout 참조
                                </a>
                            </p>
                        </div>
                        
                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Baseline Vertical grid & Base Font size</h4>
                        <figure className="system-figure-wrap" >
                            <img src={require('../img/design_guide/grid_base_fontsize.png')} id="grid-base-fontsize" />
                        </figure>
                        <div className="row mt32">
                            <p className="col">
                                일반적인 용도의 Design System을 구성 할 경우 브라우저 기본 폰트사이즈인 16px을 1rem으로 하고 Line-height 28px의
                                설정을 사용할 것을 적극 권장한다. 그러나 그룹웨어 같은 업무용 웹어플리케이션의 경우나 디자인상의 필요에 따라 기본 폰트사이즈 14px을
                                기준으로 하여 Line-height 24px의 설정을 사용 할 수 있다.<br /><br />
                                기본 폰트사이즈를 16px이나 14px로 하더라도 Vertical Grid의 기본 Unit 단위는 8px를 기준으로 한다.
                                실제 화면 디자인에서 어떻게 적용하는 지는 아래 링크글을 참조한다.<br />
                                <a href="https://blog.prototypr.io/the-8pt-grid-consistent-spacing-in-ui-design-with-sketch-577e4f0fd520" target="_blank">
                                    The 8pt Grid: Consistent Spacing in UI Design with Sketch
                                </a>
                            </p>
                        </div>
                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">atlassian, shopify의 Grid 예시</h4>
                        <figure className="system-figure-wrap" >
                            <img src={require('../img/design_guide/grid_element_spacing.png')} id="grid-element-spacing" />
                        </figure>
                        <div className="row mt32">
                            <p className="col">
                                Design System의 대표적인 모범사례인 atlassian의 경우에는 버튼 및 버튼의 Spacing 등 요소들 사이의 여백
                                공간 또한 8px,16px를 기본으로 사용한다. 보다 작은 여백이 필수적으로 필요할 경우에만 4px을 적용한다. 
                                이 기본값은 가로,세로 여백 공간에 공통적으로 적용되어 전체 화면디자인에 일관성을 부여한다. 
                                <br />
                                <a href="https://atlassian.design/guidelines/product/foundations/grid" target="_blank">
                                    Atlassian Design System / Guideline / Grid
                                </a><br /><br />
                                또 다른 Design System의 모범사례인 Shopify의 경우에는 4px,8px,16px,20px을 Spacing의 기본 단위로
                                사용하고 있다.
                                <br />
                                <a href="https://polaris.shopify.com/design/spacing#section-optical-adjustment" target="_blank">
                                    Shopify Design System / Spacing
                                </a>
                            </p>
                        </div>

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Horizontal Responsive Grid</h4>
                        <div className="row mt32">
                            <p className="col">
                                가로 반응형 그리드 시스템은 Bootstrap 4의 그리드 시스템을 기반으로 한다.
                                Breakpoint 및 Breakpoint별 container의 너비, Gutter의 너비 등의 세부 설정은
                                src/css/custom/_variables.scss 을 편집하여 조절한다.
                            </p>
                        </div>
                        <div className="row mt32">
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-1 grid-test gutter"><div className="grid-test col-inner"></div></div>
                        </div>
                        <div className="row" style={{marginTop: '3rem'}}>
                            <div className="col-3 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-3 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-3 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-3 grid-test gutter"><div className="grid-test col-inner"></div></div>    
                        </div>
                        <div className="row" style={{marginTop: '3rem'}}>
                            <div className="col-4 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-4 grid-test gutter"><div className="grid-test col-inner"></div></div>
                            <div className="col-4 grid-test gutter"><div className="grid-test col-inner"></div></div>    
                        </div>
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default StyleGrid;
