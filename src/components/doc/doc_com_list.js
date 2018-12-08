import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComList extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="List" intro="List는 관련된 컨텐츠을 그룹으로 합친 구조이다."></DocHeader>
                    <div className="container guide">

                        <h4>Ordered List</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
                                    <ol className="c1--list--ordered">
                                        <li className="c1--list__item">Ordered List level 1 - 순차형 리스트
                                            <ol className="c1--list--nested">
                                            <li className="c1--list__item">Ordered List level 2</li>
                                            <li className="c1--list__item">Ordered List level 2</li>
                                            </ol>
                                        </li>
                                        <li className="c1--list__item">Ordered List level 1 - 순차형 리스트</li>
                                        <li className="c1--list__item">Ordered List level 1 - 순차형 리스트</li>
                                    </ol>                                                                   
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

                        <h4  style={{'marginTop':'3rem'}}>Unordered List</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
                                    <ul className="c1--list--unordered">
                                        <li className="c1--list__item">Unordered List level 1 - 비 순차형 리스트
                                            <ul className="c1--list--nested">
                                            <li className="c1--list__item">Unordered List level 2</li>
                                            <li className="c1--list__item">Unordered List level 2</li>
                                            </ul>
                                        </li>
                                        <li className="c1--list__item">Unordered List level 1 - 비 순차형 리스트</li>
                                        <li className="c1--list__item">Unordered List level 1 - 비 순차형 리스트</li>
                                    </ul>                                                                   
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <ul className="c1--list--unordered">
        <li className="c1--list__item">Unordered List level 1
            <ul className="c1--list--nested">
            <li className="c1--list__item">Unordered List level 2</li>
            <li className="c1--list__item">Unordered List level 2</li>
            </ul>
        </li>
        <li className="c1--list__item">Unordered List level 1</li>
        <li className="c1--list__item">Unordered List level 1</li>
    </ul> 
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

export default DocComList;
