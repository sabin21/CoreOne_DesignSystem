import React from 'react';

export class DocHeader extends React.Component{
    render(){
        return(
            <div className="system-header">
                <div className="container guide">
                    <h1 className="system-chapter-title">{this.props.title}</h1>
                    <p>{this.props.intro}</p>
                </div>
            </div>
        );
    }
}

export default DocHeader;
