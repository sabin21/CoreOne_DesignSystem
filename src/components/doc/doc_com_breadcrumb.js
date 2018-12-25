
import React, { Component } from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import Breadcrumb from '../../carbon-react/components/Breadcrumb';
import BreadcrumbItem from '../../carbon-react/components/BreadcrumbItem';

export class DocComBreadCrumb extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Breadcrumb" intro="Breadcrumb를 사용하여 현재 위치를 파악하고 상위 레벨로 이동할 수 있다."></DocHeader>
                    <div className="container guide">

                        <h4>Breadcrumb Basic</h4>
                        <div className="row">
                            <div className="component-example">

                                <div className="example-box">
                                    
                                        <Breadcrumb>
                                            <BreadcrumbItem>
                                                <a herf="#">메뉴 첫번째 레벨</a>
                                            </BreadcrumbItem>
                                            <BreadcrumbItem>
                                                <a herf="#">메뉴 두번째 레벨</a>
                                            </BreadcrumbItem>
                                            <BreadcrumbItem>
                                                <a herf="#">메뉴 세번째 레벨</a>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                                                                                                           
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <nav class="c1--breadcrumb c1--breadcrumb--no-trailing-slash" aria-label="breadcrumb">
        <div class="c1--breadcrumb-item">
            <a href="#" class="c1--link">Breadcrumb 1</a>
        </div>
        <div class="c1--breadcrumb-item">
            <a href="#" class="c1--link">Breadcrumb 2</a>
        </div>
        <div class="c1--breadcrumb-item">
            <a href="#" class="c1--link">Breadcrumb 3</a>
        </div>
    </nav>
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

export default DocComBreadCrumb;
