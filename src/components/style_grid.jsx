import React from 'react';

export class StyleGrid extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Grid</h1>
                            <p>Baseline 기반의 Vertical Grid와 Horizontal Responsive Grid</p>
                        </div>
                    </div>
                    <div className="container">
                        <figure className="system-figure-wrap back-gray" id="grid-unit-pict">
                            <img src={require('../img/design_guide/typography_size_base.png')} id="grid-unit-pict"/>                            
                        </figure>
                        <div className="row mt32">
                            <p className="col-md-8 offset-md-2">
                                브라우저의 기본 폰트 사이즈 16px을 1rem으로 기준으로 한다. 0.25rem : 4px를 최소 단위로 삼는다.
                                기본 line-height: 1.75em. 페이지 전체 레이아웃에서 요소들 사이의 가로 여백과 요소들이 갖는 높이가 조화되기 위해서
                                가장 기초적인 방법은 기본 폰트사이즈와 line-height를 기반으로 한 Vertical Grid를 설정하는 것이다. Google Material Design의
                                경우에는 8dp를 기반의 그리드시스템을 전체 화면에 일관되게 적용하는 것을 권장하고 있다. (Graphic 툴에서 작업할 때는 상대적인 단위인 dp,pt단위를
                                그대로 적용할 수 없으므로 px단위를 기준으로 사용한다.)
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
                            <p className="col-md-8 offset-md-2">
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
                            <p className="col-md-8 offset-md-2">
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
                            <p className="col-md-8 offset-md-2">
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
