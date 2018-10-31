import React from 'react';
import ArticleActionBar01 from '../action_bar/article_actionbar_01.jsx';


export class ArticleHead01 extends React.Component{
    render(){
        return(
            <div className="article-head-wrap type01">
                <div className="image-block" id="big-photo7">

                </div>
                <div className="title-block invert">
                    <div className="title-inner">
                    <h1 className="display3">Article Headline Patterns</h1>
                    <p>Marketing plays an important part in reinforcing this idea. </p>
                    <ArticleActionBar01 />
                    </div>             
                </div>            
            </div>
        );
    }
}

export class ArticleHead02 extends React.Component{
    render(){
        return(
            <div className="article-head-wrap type02">
                <div className="image-block" id="big-photo7">

                </div>
                <div className="title-block invert">
                    <div className="title-inner">
                    <h1 className="display3">Article Headline Patterns</h1>
                    <p>Marketing plays an important part in reinforcing this idea. </p>
                    <ArticleActionBar01 />
                    </div>             
                </div>            
            </div>
        );
    }
}

export class ArticleHead03 extends React.Component{
    render(){
        const{children, className, ...others} = this.props;
        const props={ ...others, className, line:false};
        return(
            <div className="article-head-wrap type03">
                <div className="title-block">
                    <div className="title-inner">
                    <h1 className="display3">Article Headline Patterns</h1>
                    <p>Marketing plays an important part in reinforcing this idea. </p>
                    <ArticleActionBar01 />
                    </div>             
                </div>            
            </div>
        );
    }
}

export default ArticleHead01;
