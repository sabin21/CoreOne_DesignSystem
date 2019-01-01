import React from 'react';

export class CardActionbar01 extends React.Component {
    
    render() {
        
      return (
        <div className="c1--card-basic" >
            <div className="thumb-wrap ratio4x3" style={{backgroundImage: `url(${this.props.thumbnail})`}}>
            <div className="avatar-photo circle" style={{backgroundImage: `url(${this.props.avatar})`}}></div>
            </div>
            <div className="text-block back-white has-avatar">
                <p className="title big">{this.props.title}</p>
                <p className="detail">{this.props.detail}</p>
            </div>
            <div className="action-bar border-top">
                <i className="icon icon-social__comment-1"></i><span>{this.props.numComment}</span>
                <i className="icon icon-social__favorite"></i><span>{this.props.numFavorite}</span>
                <i className="icon icon-social__share right"></i>
            </div>
        </div>
      );
    }
  }

export default CardActionbar01;
