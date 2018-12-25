import React from 'react';

export class CardOverlay01 extends React.Component {
    
    render() {
        
      return (
        <div className="c1--card-overlay" key={this.index} >
            <div className="thumb-wrap ratio2x3" style={{backgroundImage: `url(${this.props.thumbnail})`}}></div>
            <div className="text-block">
                <p className="title">{this.props.title}</p>
                <p className="detail">{this.props.detail}</p>
            </div>
        </div>
      );
    }
  }

export default CardOverlay01;
