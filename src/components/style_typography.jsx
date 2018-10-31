import React from 'react';

export class StyleTypography extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Typography</h1>
                            <p>Typeface 정의와 Heading,Paragraph 기본 typography 가이드</p>
                        </div>
                    </div>
                    <div className="container">

                        <h4 className="system-chapter-subtitle">Typeface</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="title-3th">한국어 > Gothic계열</h6>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr><td>Window</td><td>Malgun Gothic, Dotum</td></tr>
                                        <tr><td>MacOS & iOS</td><td>Apple SD Gothic Neo</td></tr>
                                        <tr><td>Android</td><td>Noto Sans CJK KR</td></tr>
                                    </tbody>
                                </table>                       
                            </div>
                            <div className="col-md-6">
                                <h6 className="title-3th">English > San-serif</h6>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr><td>Window</td><td>Segoe UI</td></tr>
                                        <tr><td>MacOS & iOS</td><td>SF UI Text, SF UI Display</td></tr>
                                        <tr><td>Android</td><td>Roboto, Noto Sans</td></tr>
                                    </tbody>
                                </table>                       
                            </div>
                        </div>
                        

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Heading<span> - Basic</span></h4>
                        <div className="spec-info-wrap">
                            <div className="table-row">                                        
                                <div className="table-cell no-border"><h1>H1</h1></div>
                                <div className="table-cell no-border"><h1>헤드라인 타이틀 Headline Title</h1></div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell no-border">style</div>
                                <div className="table-cell no-border">font-size:2.5rem; line-height:1.25em;</div>
                            </div>
                            <div className="table-row">                                        
                                <div className="table-cell no-border"><h2>H2</h2></div>
                                <div className="table-cell no-border"><h2>헤드라인 타이틀 Headline Title</h2></div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell no-border">style</div>
                                <div className="table-cell no-border">font-size:2rem; line-height:1.25em;</div>
                            </div>
                            <div className="table-row">                                        
                                <div className="table-cell no-border"><h3>H3</h3></div>
                                <div className="table-cell no-border"><h3>헤드라인 타이틀 Headline Title</h3></div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell no-border">style</div>
                                <div className="table-cell no-border">font-size:1.75rem; line-height:1.25em;</div>
                            </div>
                            <div className="table-row">                                        
                                <div className="table-cell no-border"><h4>H4</h4></div>
                                <div className="table-cell no-border"><h4>헤드라인 타이틀 Headline Title</h4></div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell no-border">style</div>
                                <div className="table-cell no-border">font-size:1.5rem; line-height:1.25em;</div>
                            </div>
                            <div className="table-row">                                        
                                <div className="table-cell no-border"><h5>H5</h5></div>
                                <div className="table-cell no-border"><h5>헤드라인 타이틀 Headline Title</h5></div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell no-border">style</div>
                                <div className="table-cell no-border">font-size:1.3rem; line-height:1.25em;</div>
                            </div>
                            <div className="table-row">                                        
                                <div className="table-cell no-border"><h6>H6</h6></div>
                                <div className="table-cell no-border"><h6>헤드라인 타이틀 Headline Title</h6></div>
                            </div>
                            <div className="table-row">
                                <div className="table-cell no-border">style</div>
                                <div className="table-cell no-border">font-size:1rem; line-height:1.25em;</div>
                            </div>
                        </div>

                        <hr className="chapter-sub-hr"/>
                        <h4 className="system-chapter-subtitle">Paragraph Text<span> - Basic</span></h4>
                        <div className="row">
                            <div className="col-sm-4">
                                <h6>Paragraph text - Default</h6>
                                <p>
                                악보에 나와 있는 음표와 마찬가지로, 글꼴 크기에 대한 적당한 비례감을 지켜야 합니다. 적당한 비례감은 부드럽고, 
                                문서의 위계를 나타내는 시각단서가 될 수도 있고, 규칙에 따른 율동감을 주기 때문입니다. 처음 이것에 대해 다소 
                                위압적이고 딱딱해 지루했었지만, 운이 좋게 몇몇의 용자들이 우리들을 위해 대신 수년간 연구했습니다.
                                </p>
                                <div className="spec-info-wrap">
                                    <div className="table-row">                                        
                                        <div className="table-cell">font-size</div>
                                        <div className="table-cell">1rem (16px)</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">line-height</div>
                                        <div className="table-cell">1.75em (28px)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h6>Paragraph text - Small</h6>
                                <p className="small">
                                악보에 나와 있는 음표와 마찬가지로, 글꼴 크기에 대한 적당한 비례감을 지켜야 합니다. 적당한 비례감은 부드럽고, 
                                문서의 위계를 나타내는 시각단서가 될 수도 있고, 규칙에 따른 율동감을 주기 때문입니다. 처음 이것에 대해 다소 
                                위압적이고 딱딱해 지루했었지만, 운이 좋게 몇몇의 용자들이 우리들을 위해 대신 수년간 연구했습니다.
                                </p>
                                <div className="spec-info-wrap">
                                    <div className="table-row">                                        
                                        <div className="table-cell">font-size</div>
                                        <div className="table-cell">0.875rem (14px)</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">line-height</div>
                                        <div className="table-cell">1.75em (24.5px)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <h6>Paragraph text - Tiny</h6>
                                <p className="tiny">
                                악보에 나와 있는 음표와 마찬가지로, 글꼴 크기에 대한 적당한 비례감을 지켜야 합니다. 적당한 비례감은 부드럽고, 
                                문서의 위계를 나타내는 시각단서가 될 수도 있고, 규칙에 따른 율동감을 주기 때문입니다. 처음 이것에 대해 다소 
                                위압적이고 딱딱해 지루했었지만, 운이 좋게 몇몇의 용자들이 우리들을 위해 대신 수년간 연구했습니다.
                                </p>
                                <div className="spec-info-wrap">
                                    <div className="table-row">                                        
                                        <div className="table-cell">font-size</div>
                                        <div className="table-cell">0.75rem (12px)</div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">line-height</div>
                                        <div className="table-cell">1.75em (21px)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="chapter-sub-hr"/>
                        
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default StyleTypography;
