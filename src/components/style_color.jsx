import React from 'react';

export class StyleColor extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <div className="system-header">
                        <div className="container">
                            <h1 className="system-chapter-title">Color System</h1>
                            <p>Typography 관련 가이드 중 기본적인 Body Text의 기준 사이즈와 행간, 헤드라인 텍스트의 설정</p>
                        </div>
                    </div>
                    <div className="container">
                        <h4 className="system-chapter-subtitle">Primary Colors</h4>
                        <div className="row">
                            <div className="col-sm-4 col-md-3 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head inner-shadow bg-p1-100"></div>
                                    <div className="card-body">
                                    <p>P1-100</p>
                                    <p className="tiny">HEX:#DE1B6F<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr className="chapter-sub-hr"/>

                        <h4 className="system-chapter-subtitle">Gray Scale</h4>
                        <div className="row">
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-100 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-100</p>
                                    <p className="tiny">HEX:#DE1B6F<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-200 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-200</p>
                                    <p className="tiny">HEX:#e9ecef<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-300 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-300</p>
                                    <p className="tiny">HEX:#dee2e6<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-400 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-400</p>
                                    <p className="tiny">HEX:#ced4da<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-500 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-500</p>
                                    <p className="tiny">HEX:#adb5bd<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-600 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-600</p>
                                    <p className="tiny">HEX:#868e96<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-700 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-700</p>
                                    <p className="tiny">HEX:#495057<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-800 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-800</p>
                                    <p className="tiny">HEX:#343a40<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2 card-image-type01">
                                <div className="card-inner shadow-10">
                                    <div className="card-head bg-gray-900 inner-shadow"></div>
                                    <div className="card-body">
                                    <p>Gray-900</p>
                                    <p className="tiny">HEX:#212529<br />RGB: </p>                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">                        
                            <p className="col-md-8 offset-md-2 mt24">
                                Gray Scale의 컬러들은 Netural Color로 사용되며 일반 텍스트의 색상,테이블,폼요소등의 border 색상,Background 
                                색상 등의 용도로 App의 UI Design에서 전반적으로 사용된다. 
                            </p>
                        </div>
                        
                        
                    </div>                    
                </div>             
            </div>
        );
    }
}

export default StyleColor;
