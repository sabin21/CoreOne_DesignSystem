import React from 'react';
import DocHeader from './doc_header';

export class DocFoundLayer extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Layer" intro="화면요소들에 깊이감을 더해 계층구조를 형성한다."></DocHeader>
                    <div className="container guide">
                        
                        <div className="row">
                            <p>
                            평면인 UI요소에 간단히 그림자를 더하는 것 만으로 깊이감을 형성할 수 있다.   이 깊이감을 형성하는 그림자의 설정과 단계를 조절하면 각 요소들 사이에 구분을 명료하게 하도록 하면서 계층적구조를 직관적으로 이해시킬 수 있다.
                            </p>
                            <img src={require('../../img/design_guide/layer_sample.png')}  id="found-layer-sample"/>
                        </div>
                        <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Layer</th>
                                <th scope="col">Elevation</th>
                                <th scope="col">Box-shadow</th>                             
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Base</td>
                                <td>0</td>
                                <td>none</td>                                
                                </tr>
                                <tr>
                                <td>Flat</td>
                                <td>1</td>
                                <td>none</td>                                
                                </tr>
                                <tr>
                                <td>$shadow-01</td>
                                <td>2</td>
                                <td>0 1px 2px 0 rgba(0,0,0,0.10);</td>                               
                                </tr>
                                <tr>
                                <td>$shadow-10</td>
                                <td>8</td>
                                <td>0 4px 8px 0 rgba(0,0,0,0.10);</td>                                
                                </tr>
                                <tr>
                                <td>$shadow-20</td>
                                <td>12</td>
                                <td>0 6px 12px 0 rgba(0,0,0,0.10);</td>                                
                                </tr>
                                <tr>
                                <td>$shadow-30</td>
                                <td>24</td>
                                <td>0 12px 24px 0 rgba(0,0,0,0.10);</td>                                
                                </tr>
                            </tbody>
                        </table>

                        <img src={require('../../img/design_guide/layer_sample2.png')} />
                        </div>
                    </div>

                </div>             
            </div>
        );
    }
}

export default DocFoundLayer;
