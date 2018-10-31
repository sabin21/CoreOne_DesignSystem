import React from 'react';
import {ArticleHead01, ArticleHead02, ArticleHead03} from './head/article_head_01.jsx';

export class HeadPattern01 extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Article Head</h1>
                            <p>Article화면 Head 영역의 정의와 패턴</p>
                        </div>
                    </div>
                    <div className="container">
                        <h4 className="system-chapter-subtitle">Article Head - 01</h4>
                        <div className="row">
                            <div className="col-12">
                                <ArticleHead01 />
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'4rem'}}>
                            <div className="col-12">
                                <ArticleHead02 />
                            </div>
                        </div>

                        <div className="row" style={{marginTop:'4rem'}}>
                            <div className="col-12">
                                <ArticleHead03 />
                            </div>
                        </div>
                        
                        
                        <hr className="chapter-sub-hr"/>

                        <h4 className="system-chapter-subtitle">Gray Scale</h4>
                        
                        
                        
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default HeadPattern01;
