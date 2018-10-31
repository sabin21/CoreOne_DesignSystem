import React from 'react';
import Button from 'react-bootstrap/lib/Button'

export class BtnSample01 extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Buttons</h1>
                            <p>React Bootstrap 버튼과 일반 버튼 예시</p>
                        </div>
                    </div>
                    <div className="container">
                        <h4 className="system-chapter-subtitle">React Bootstrap</h4>
                        <div className="row" className="sample-button-wrap">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="success">Primary</Button>
                            <Button variant="warning">Secondary</Button>
                            <Button variant="danger">Primary</Button>
                            <Button variant="info">Info</Button>
                            <Button variant="light">Light</Button>
                            <Button variant="dark">Dark</Button>
                            <Button variant="link">Link</Button>
                        </div>
                        <div className="row" className="sample-button-wrap">
                            <Button variant="outline-primary">Primary</Button>
                            <Button variant="outline-secondary">Secondary</Button>
                            <Button variant="outline-success">Success</Button>
                            <Button variant="outline-warning">Warning</Button>
                            <Button variant="outline-danger">Danger</Button>
                            <Button variant="outline-info">Info</Button>
                            <Button variant="outline-light">Light</Button>
                            <Button variant="outline-dark">Dark</Button>
                        </div>
                        
                        <hr className="chapter-sub-hr"/>

                        <h4 className="system-chapter-subtitle">Gray Scale</h4>
                        
                        
                        
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default BtnSample01;
