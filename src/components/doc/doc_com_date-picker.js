
import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import DatePicker from '../../carbon-react/components/DatePicker';
import DatePickerInput from '../../carbon-react/components/DatePickerInput';
import TimePicker from '../../carbon-react/components/TimePicker';
import TimePickerSelect from '../../carbon-react/components/TimePickerSelect';
import SelectItem from '../../carbon-react/components/SelectItem';


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
                                    //onClick={onClick}
                                    //onChange={onInputChange}                                  
                                    />
                                    </DatePicker>                                                                                                                                                       
                                </div>
                            </div>
                        <div className="example-code">
<Highlight>
{`
    <DatePicker id="date-picker" onChange={anonymous} datePickerType="single">
    <DatePickerInput
    id="date-picker-input-id"
    className="some-class"
    labelText="Date Picker label"
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    invalidText="A valid value is required"
    onClick={onClick}
    onChange={onInputChange}
    iconDescription="Icon description"
    />
    </DatePicker>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Single Date Picker - with Calendar</h4>
                        <div className="row">
                            <div className="component-example">
                                
                                <div className="example-box">
                                    <div className="inner-wrap">
                                        <DatePicker id="date-picker" datePickerType="single">
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
    <DatePicker id="date-picker" onChange={anonymous} datePickerType="single">
    <DatePickerInput
    id="date-picker-input-id"
    className="some-class"
    labelText="Date Picker label"
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    invalidText="A valid value is required"
    onClick={onClick}
    onChange={onInputChange}
    iconDescription="Icon description"
    />
    </DatePicker>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Range Date Picker - with Calendar</h4>
                        <div className="row">
                            <div className="component-example">
                                
                                <div className="example-box">
                                    <div className="inner-wrap">
                                    <DatePicker
                                    id="date-picker"
                                    //onChange={anonymous}
                                    datePickerType="range"
                                    iconDescription="Icon description"
                                    >
                                    <DatePickerInput
                                    id="date-picker-input-id-start"
                                    className="some-class"
                                    labelText="Date Picker label"
                                    pattern="d{1,2}/d{4}"
                                    placeholder="mm/dd/yyyy"
                                    invalidText="A valid value is required"
                                    //onClick={onClick}
                                    //onChange={onInputChange}
                                    />
                                    <DatePickerInput
                                    id="date-picker-input-id-end"
                                    className="some-class"
                                    labelText="Date Picker label"
                                    pattern="d{1,2}/d{4}"
                                    placeholder="mm/dd/yyyy"
                                    invalidText="A valid value is required"
                                    //onClick={onClick}
                                    //onChange={onInputChange}
                                    />
                                    </DatePicker>                                                                                                                                                       
                                    </div>
                                </div>
                            <div className="example-code">
<Highlight>
{`
    <DatePicker
    id="date-picker"
    onChange={anonymous}
    datePickerType="range"
    iconDescription="Icon description"
    >
    <DatePickerInput
    id="date-picker-input-id-start"
    className="some-class"
    labelText="Date Picker label"
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    invalidText="A valid value is required"
    onClick={onClick}
    onChange={onInputChange}
    />
    <DatePickerInput
    id="date-picker-input-id-end"
    className="some-class"
    labelText="Date Picker label"
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    invalidText="A valid value is required"
    onClick={onClick}
    onChange={onInputChange}
    />
    </DatePicker>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Range Date Picker - with Calendar</h4>
                        <div className="row">
                            <div className="component-example">
                                
                                <div className="example-box">
                                    <div className="inner-wrap">
                                        <TimePicker
                                        id="time-picker"
                                        hideLabel={false}
                                        labelText="Select a time"
                                        invalidText="A valid value is required"
                                        //onClick={onClick}
                                        //onChange={onChange}
                                        //onBlur={onBlur}
                                        >
                                        <TimePickerSelect id="time-picker-select-1" labelText="Please select">
                                        <SelectItem value="AM" text="AM" />
                                        <SelectItem value="PM" text="PM" />
                                        </TimePickerSelect>
                                        <TimePickerSelect id="time-picker-select-2" labelText="Please select">
                                        <SelectItem value="Time zone 1" text="Time zone 1" />
                                        <SelectItem value="Time zone 2" text="Time zone 2" />
                                        </TimePickerSelect>
                                        </TimePicker>                                                                                                                                                      
                                    </div>
                                </div>
                            <div className="example-code">
<Highlight>
{`
    <DatePicker
    id="date-picker"
    onChange={anonymous}
    datePickerType="range"
    iconDescription="Icon description"
    >
    <DatePickerInput
    id="date-picker-input-id-start"
    className="some-class"
    labelText="Date Picker label"
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    invalidText="A valid value is required"
    onClick={onClick}
    onChange={onInputChange}
    />
    <DatePickerInput
    id="date-picker-input-id-end"
    className="some-class"
    labelText="Date Picker label"
    pattern="d{1,2}/d{4}"
    placeholder="mm/dd/yyyy"
    invalidText="A valid value is required"
    onClick={onClick}
    onChange={onInputChange}
    />
    </DatePicker>
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
