
import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import DatePicker from '../../carbon-react/components/DatePicker';
import DatePickerInput from '../../carbon-react/components/DatePickerInput';


export class DocComDatePicker extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Date Picker" intro="Date Picker는 Date와 Time을 선택할 수 있도록 한다."></DocHeader>
                    <div className="container guide">

                        <h4>Date Picker</h4>
                        <div className="row">
                            <div className="component-example">
                                
                                <div className="example-box">
                                <div className="inner-wrap">
                                    <DatePicker id="date-picker" datePickerType="simple">
                                    <DatePickerInput
                                    id="date-picker-input-id"
                                    className="some-class"
                                    labelText="Date Picker label"
                                    pattern="d{1,2}/d{4}"
                                    placeholder="mm/dd/yyyy"
                                    invalidText="A valid value is required"
                                    
                                    />
                                    </DatePicker>                                                                                                                                                             
                                </div>
                            </div>
                        <div className="example-code">
<Highlight>
{`
    <div data-content-switcher class="c1--content-switcher" role="tablist" aria-label="Demo switch content">
        <button class="c1--content-switcher-btn c1--content-switcher--selected" data-target=".demo--panel--opt-1" role="tab" aria-selected="true">
        <span>First section</span>
        </button>
        <button class="c1--content-switcher-btn" data-target=".demo--panel--opt-2" role="tab">
        <span>Second section</span>
        </button>
        <button class="c1--content-switcher-btn" data-target=".demo--panel--opt-3" role="tab">
        <span>Third section</span>
        </button>
    </div>
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

export default DocComDatePicker;
