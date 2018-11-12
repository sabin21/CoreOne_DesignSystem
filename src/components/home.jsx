import React from 'react';

export class Home extends React.Component{
    render(){
        return(
            <div className="page-wrap">
                <div className="content-wrap">
                    <h1>Home</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <a href="#">Link Text 샘플</a>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        );
    }
}

export default Home;
