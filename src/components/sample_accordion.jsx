import React from 'react';

import Accordion01Sample from './accordion/accordion_01.jsx';

export class AccordionSample extends React.Component {
    render() {
      return (
        <div className="page-wrap">
            <div className="content-wrap">
                <div className="system-header">
                    <div className="container">
                        <h1 className="system-chapter-title">Accordion</h1>
                        <p>Accordion 형태의 컴포넌트</p>
                    </div>
                </div>
                <div className="container">
                    <h5>Simple Accordion</h5>
                    <div className="row">
                        <Accordion01Sample />
                    </div>
                </div>
                
            </div>
        </div>
      );
    }
  }

export default AccordionSample;
