import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import Checkbox from '../../carbon-react/components/Checkbox/';

export class DocComCheckbox extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Checkbox" intro="Checkbox는 선택할 수 있는 옵션의 목록에 사용되며 모두 선택하지 않거나 부분 선택하는 등의 선택 옵션이 제공된다."></DocHeader>
                    <div className="container guide">

                        <h4>Checkbox</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">                                    
                                    
                                    <fieldset className="c1--fieldset">
                                        <legend className="c1--label">내가 좋아하는 색상</legend>
                                        <Checkbox defaultChecked id="checkbox-label-1" labelText="Black" />
                                        <Checkbox indeterminate id="checkbox-label-2" labelText="Yellow" />
                                        <Checkbox id="checkbox-label-3" labelText="Purple" />
                                        <Checkbox disabled id="checkbox-label-4" labelText="Green" />
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

export default DocComCheckbox;
