import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComRadio extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Radio Button" intro="Radio Button은 2개이상의 선택옵션중 하나만을 선택해야 할 경우에 사용된다."></DocHeader>
                    <div className="container guide">

                        <h4>Radio Button</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
                                    <fieldset className="c1--fieldset">
                                        <legend className="c1--label">Radio Button heading</legend>
                                        <div className="c1--form-item">
                                            <div className="c1--radio-button-group">
                                                <input id="radio-button-1" className="c1--radio-button" type=
                                                "radio" value="red" name="radio-button" tabindex="0" checked></input>
                                                <label for="radio-button-1" className="c1--radio-button__label">
                                                    <span className="c1--radio-button__appearance"></span>
                                                    Radio Button label
                                                </label>
                                                <input id="radio-button-2" className="c1--radio-button" type="radio" value="green" name="radio-button" tabindex="0"></input>
                                                <label for="radio-button-2" className="c1--radio-button__label">
                                                <span className="c1--radio-button__appearance"></span>
                                                Radio Button label
                                                </label>
                                                <input id="radio-button-3" className="c1--radio-button" type="radio" value="blue" name="radio-button" tabindex="0" disabled></input>
                                                <label for="radio-button-3" className="c1--radio-button__label">
                                                <span class="c1--radio-button__appearance"></span>
                                                Radio Button label
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>                                
                                    
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <button className="c1-btn c1-btn-primary" type="button">Button</button>
    <button className="c1-btn c1-btn-primary" type="button" disabled>Button</button>
    <button className="c1-btn c1-btn-primary" type="button">
        With icon
        <svg className="c1-btn_icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
        </svg>
    </button>
`}
</Highlight>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>             
            </div>
        );
    }
}

export default DocComRadio;
