
import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComTextInput extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Text Input" intro="텍스트 입력을 통해 사용자는 데이터와 상호 작용하고 입력 할 수 있습니다."></DocHeader>
                    <div className="container guide">

                        <h4>Text Input</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
                                
                                    <div className="c1--form-item c1--text-input-wrapper">
                                        <label for="text-input-1" className="c1--label">텍스트입력창 라벨</label>
                                        <input id="text-input-1" type="text" className="c1--text-input" placeholder="Placeholder 텍스트" />
                                    </div>

                                    <div className="c1--form-item c1--text-input-wrapper">
                                        <label for="text-input-2" className="c1--label">텍스트입력창 라벨</label>
                                        <input data-invalid id="text-input-2" type="text" className="c1--text-input" placeholder="Placeholder 텍스트" />
                                        <div className="c1--form-requirement">정확한 이메일주소를 입력하세요</div>
                                    </div>

                                    <div className="c1--form-item c1--text-input-wrapper">
                                        <label for="text-input-1" className="c1--label">텍스트입력창 라벨</label>
                                        <div className="c1--form__helper-text">입력시 유의사항 텍스트</div>
                                        <input id="text-input-1" type="text" className="c1--text-input" placeholder="Placeholder 텍스트" />
                                    </div>

                                    <div className="c1--form-item c1--text-input-wrapper">
                                        <label for="text-input-1" className="c1--label-disabled">텍스트입력창 라벨</label>
                                        <input id="text-input-1" type="text" className="c1--text-input" placeholder="Placeholder 텍스트" disabled />
                                    </div>
                                                                                        
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <ol className="c1--list--ordered">
        <li className="c1--list__item">Ordered List level 1
            <ol className="c1--list--nested">
            <li className="c1--list__item">Ordered List level 2</li>
            <li className="c1--list__item">Ordered List level 2</li>
            </ol>
        </li>
        <li className="c1--list__item">Ordered List level 1</li>
        <li className="c1--list__item">Ordered List level 1</li>
    </ol>
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

export default DocComTextInput;
