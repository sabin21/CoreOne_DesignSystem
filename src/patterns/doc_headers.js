
import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComDatePicker extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Date Picker" intro="Date Picker는 Date와 Time을 선택할 수 있도록 한다."></DocHeader>
                    <div className="container">

                        <h4>Date Picker</h4>
                        <div className="row">
                            <div className="component-example">
                                
                                <div className="example-box">
                                <div className="inner-wrap">
                                                                                                                                                                                                
                                </div>
                            </div>

                            </div>
                        </div>

                    </div>

                </div>             
            </div>
        );
    }
}

export default DocComDatePicker;
