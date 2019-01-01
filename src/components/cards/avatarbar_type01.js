import React from 'react';
import classNames from 'classnames/bind';
import styles from '../../../src/style.scss';
const cx = classNames.bind(styles);

export class CardAvatarbar01 extends React.Component {
    
    render() {
        var cardBaseClass = classNames('c1--card-basic');
        var cardShadow = classNames(cx('card-shadow',{'is-active': this.props.shadow}));
      return (
        <div className={cardBaseClass}>
            <div className="thumb-wrap ratio4x3" style={{backgroundImage: `url(${this.props.thumbnail})`}}>
            
            </div>
            <div className="text-block back-white">
                <p className="title">{this.props.title}</p>
                <p className="detail">{this.props.detail}</p>
            </div>
            <div className="action-bar border-top avatar-bar">
                <div className="avatar-photo circle" style={{backgroundImage: `url(${this.props.avatar})`}}></div>
                <div className="avatar-name">
                <p className="name">{this.props.name}</p>
                <p className="detail">{this.props.county}</p>
                </div>
                <i className="icon icon-social__share right"></i>
            </div>
        </div>
      );
    }
  }

export default CardAvatarbar01;
