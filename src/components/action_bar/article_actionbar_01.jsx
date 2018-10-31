import React from 'react';

export class ArticleActionBar01 extends React.Component{
    render(){
        return(
            <div className="article-action-bar type01">
                <div className="share-block">
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-google-plus-g"></i>                
                </div>             
            </div>
        );
    }
}

export default ArticleActionBar01;