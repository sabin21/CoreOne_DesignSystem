import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComButtons extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Buttons" intro="버튼은 사용자가 클릭하거나 터치하는 동작을 통해 이벤트를 발생시키는 기본 컴포넌트이다."></DocHeader>
                    <div className="container guide">

                        <h4>Primary Button</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <button className="c1-btn c1-btn-primary" type="button">Button</button>
                                    <button className="c1-btn c1-btn-primary" type="button" disabled>Button</button>
                                    <button className="c1-btn c1-btn-primary" type="button">
                                        With icon
                                        <svg className="c1-btn_icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
                                        </svg>
                                    </button>
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

                                                
                        <div className="row" style={{'marginTop':'4rem'}}>
                        <h4 className="col">Secondary Button</h4>
                            <div className="component-example col">
                                <div className="example-box">
                                    <button className="c1-btn c1-btn-secondary" type="button">Button</button>
                                    <button className="c1-btn c1-btn-secondary" type="button" disabled>Button</button>
                                    <button className="c1-btn c1-btn-secondary" type="button">
                                        With icon
                                        <svg className="c1-btn_icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <button className="c1-btn c1-btn-secondary" type="button">Button</button>
    <button className="c1-btn c1-btn-secondary" type="button" disabled>Button</button>
    <button className="c1-btn c1-btn-secondary" type="button">
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

                        <div className="row" style={{'marginTop':'4rem'}}>
                        <h4 className="col">Tertiary Button</h4>
                            <div className="component-example col">
                                <div className="example-box">
                                    <button className="c1-btn c1-btn-tertiary" type="button">Button</button>
                                    <button className="c1-btn c1-btn-tertiary" type="button" disabled>Button</button>
                                    <button className="c1-btn c1-btn-tertiary" type="button">
                                        With icon
                                        <svg className="c1-btn_icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <button className="c1-btn c1-btn-tertiary" type="button">Button</button>
    <button className="c1-btn c1-btn-tertiary" type="button" disabled>Button</button>
    <button className="c1-btn c1-btn-tertiary" type="button">
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

                        <div className="row" style={{'marginTop':'4rem'}}>
                        <h4 className="col">Ghost Button</h4>
                            <div className="component-example col">
                                <div className="example-box">
                                    <button className="c1-btn c1-btn-ghost" type="button">Button</button>
                                    <button className="c1-btn c1-btn-ghost" type="button" disabled>Button</button>
                                    <button className="c1-btn c1-btn-ghost" type="button">
                                        With icon
                                        <svg className="c1-btn_icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fillRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <button className="c1-btn c1-btn-ghost" type="button">Button</button>
    <button className="c1-btn c1-btn-ghost" type="button" disabled>Button</button>
    <button className="c1-btn c1-btn-ghost" type="button">
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

export default DocComButtons;
