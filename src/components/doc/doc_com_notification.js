import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';


export class DocComNotification extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Notification" intro="List는 관련된 컨텐츠을 그룹으로 합친 구조이다."></DocHeader>
                    <div className="container guide">

                        <h4>Ordered List</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
                                <div className="inner-wrap">
                                <div data-notification className="c1--inline-notification c1--inline-notification--info" role="alert">
                                    <div className="c1--inline-notification__details">
                                        <svg className="c1--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                        </svg>
                                        <div className="c1--inline-notification__text-wrapper">
                                        <p className="c1--inline-notification__title">Notification title</p>
                                        <p className="c1--inline-notification__subtitle">Subtitle text goes here.</p>
                                        </div>
                                    </div>
                                    <button data-notification-btn className="c1--inline-notification__close-button" type="button" aria-label="close">
                                        <svg aria-hidden="true" className="c1--inline-notification__close-icon" width="10" height="10" viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"
                                            fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div data-notification className="c1--inline-notification c1--inline-notification--error" role="alert">
                                    <div className="c1--inline-notification__details">
                                        <svg className="c1--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM3.293 4.707l8 8 1.414-1.414-8-8-1.414 1.414z" fill-rule="evenodd" />
                                        </svg>
                                        <div className="c1--inline-notification__text-wrapper">
                                        <p className="c1--inline-notification__title">Notification title</p>
                                        <p className="c1--inline-notification__subtitle">Subtitle text goes here.</p>
                                        </div>
                                    </div>
                                    <button data-notification-btn className="c1--inline-notification__close-button" type="button" aria-label="close">
                                        <svg aria-hidden="true" className="c1--inline-notification__close-icon" width="10" height="10" viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"
                                            fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div data-notification className="c1--inline-notification c1--inline-notification--success" role="alert">
                                    <div className="c1--inline-notification__details">
                                        <svg className="c1--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.293-11.332L6.75 9.21 4.707 7.168 3.293 8.582 6.75 12.04l5.957-5.957-1.414-1.414z"></path>
                                        </svg>
                                        <div className="c1--inline-notification__text-wrapper">
                                        <p className="c1--inline-notification__title">Notification title</p>
                                        <p className="c1--inline-notification__subtitle">Our goal is to become better at our craft and raise our collective knowledge by sharing experiences, best practices, what we have recently learned or what we are working on.</p>
                                        </div>
                                    </div>
                                    <button data-notification-btn className="c1--inline-notification__close-button" type="button" aria-label="close">
                                        <svg aria-hidden="true" className="c1--inline-notification__close-icon" width="10" height="10" viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"
                                            fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div data-notification className="c1--inline-notification c1--inline-notification--warning" role="alert">
                                    <div className="c1--inline-notification__details">
                                        <svg className="c1--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M.75 16a.75.75 0 0 1-.67-1.085L7.33.415a.75.75 0 0 1 1.34 0l7.25 14.5A.75.75 0 0 1 15.25 16H.75zm6.5-10v5h1.5V6h-1.5zM8 13.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0 1.5z"></path>
                                        </svg>
                                        <div className="c1--inline-notification__text-wrapper">
                                        <p className="c1--inline-notification__title">Notification title</p>
                                        <p className="c1--inline-notification__subtitle">Subtitle text goes here.</p>
                                        </div>
                                    </div>
                                    <button data-notification-btn className="c1--inline-notification__close-button" type="button" aria-label="close">
                                        <svg aria-hidden="true" className="c1--inline-notification__close-icon" width="10" height="10" viewBox="0 0 10 10"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.32 5L10 8.68 8.68 10 5 6.32 1.32 10 0 8.68 3.68 5 0 1.32 1.32 0 5 3.68 8.68 0 10 1.32 6.32 5z"
                                            fill-rule="nonzero" />
                                        </svg>
                                    </button>
                                    </div>
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

                        <h4  style={{'marginTop':'3rem'}}>Unordered List</h4>
                        <div className="row">
                            <div className="component-example col">

                                <div className="example-box column">
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

export default DocComNotification;
