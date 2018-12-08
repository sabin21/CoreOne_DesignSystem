import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComLink extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Link" intro="Link는 기본 네비게이션 요소로 사용된다. 사용자의 액션으로 데이터가 변경되는 경우에는 Button을 사용한다."></DocHeader>
                    <div className="container guide">

                        <h4>Link</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
                                    <a href="#" className="c1--link">Link 텍스트</a>
                                    <a href="#" className="c1--link" tabindex="-1" aria-disabled="true">Link 텍스트</a>                                                                    
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <a href="#" className="c1--link">Link 텍스트</a>
    <a href="#" className="c1--link" tabindex="-1" aria-disabled="true">Link 텍스트</a> 
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

export default DocComLink;
