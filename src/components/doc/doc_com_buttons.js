import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import { Button, Icon } from 'semantic-ui-react'

export class DocComButtons extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Buttons" intro="버튼은 사용자가 클릭하거나 터치하는 동작을 통해 이벤트를 발생시키는 기본 컴포넌트이다."></DocHeader>
                    <div className="container guide">

                        <h4>Base, Primary, Secondary Buttons</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button content='Click Here' />
                                    <Button content='Primary' primary />
                                    <Button content='Secondary' secondary />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button content='Click Here' />
    <Button content='Primary' primary />
    <Button content='Secondary' secondary />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Animated Button</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button animated>
                                        <Button.Content visible>Next</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                    <Button animated='vertical'>
                                        <Button.Content hidden>Shop</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='shop' />
                                    </Button.Content>
                                    </Button>
                                        <Button animated='fade'>
                                        <Button.Content visible>Sign-up for a Pro account</Button.Content>
                                        <Button.Content hidden>$12.99 a month</Button.Content>
                                    </Button>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
            <Icon name='arrow right' />
        </Button.Content>
    </Button>
    <Button animated='vertical'>
        <Button.Content hidden>Shop</Button.Content>
        <Button.Content visible>
            <Icon name='shop' />
        </Button.Content>
    </Button>
    <Button animated='fade'>
        <Button.Content visible>Sign-up for a Pro account</Button.Content>
        <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                                                
                        <div className="row">
                        <h4 className="col">Labeled Button</h4>
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button
                                    content='Like'
                                    icon='heart'
                                    label={{ as: 'a', basic: true, content: '2,048' }}
                                    labelPosition='right'
                                    />
                                    <Button
                                    content='Like'
                                    icon='heart'
                                    label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
                                    labelPosition='left'
                                    />
                                    <Button icon='fork' label={{ as: 'a', basic: true, content: '2,048' }} labelPosition='left' />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button
    content='Like'
    icon='heart'
    label={{ as: 'a', basic: true, content: '2,048' }}
    labelPosition='right'
    />
    <Button
    content='Like'
    icon='heart'
    label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
    labelPosition='left'
    />
    <Button icon='fork' label={{ as: 'a', basic: true, content: '2,048' }} labelPosition='left' />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4 className="col">Labeled Button - color test</h4>
                        <div className="row">
                        
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button
                                    color='red'
                                    content='Like'
                                    icon='heart'
                                    label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
                                    />
                                    <Button
                                    basic
                                    color='blue'
                                    content='Fork'
                                    icon='fork'
                                    label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '2,048' }}
                                    />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button
    color='red'
    content='Like'
    icon='heart'
    label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
    basic
    color='blue'
    content='Fork'
    icon='fork'
    label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '2,048' }}
    />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4 className="col">Icon, Icon labeled Buttons</h4>
                        <div className="row">                        
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button icon='world' />
                                    <Button content='Pause' icon='pause' labelPosition='left' />
                                    <Button content='Next' icon='right arrow' labelPosition='right' />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button icon='world' />
    <Button content='Pause' icon='pause' labelPosition='left' />
    <Button content='Next' icon='right arrow' labelPosition='right' />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4 className="col">Buttons Group</h4>
                        <div className="row">                        
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button.Group buttons={['One', 'Two', 'Three']} style={{marginRight:'1rem'}}/>
                                    <Button.Group
                                        buttons={[
                                            { key: 'align left', icon: 'align left' },
                                            { key: 'align center', icon: 'align center' },
                                            { key: 'align right', icon: 'align right' },
                                            { key: 'align justify', icon: 'align justify' },
                                        ]}
                                    />{' '}
                                    <Button.Group
                                        buttons={[
                                            { key: 'bold', icon: 'bold' },
                                            { key: 'underline', icon: 'underline' },
                                            { key: 'text width', icon: 'text width' },
                                        ]}
                                    />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button.Group buttons={['One', 'Two', 'Three']} />
    <Button.Group
        buttons={[
            { key: 'align left', icon: 'align left' },
            { key: 'align center', icon: 'align center' },
            { key: 'align right', icon: 'align right' },
            { key: 'align justify', icon: 'align justify' },
        ]}
    />{' '}
    <Button.Group
        buttons={[
            { key: 'bold', icon: 'bold' },
            { key: 'underline', icon: 'underline' },
            { key: 'text width', icon: 'text width' },
        ]}
    />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4 className="col">Buttons States</h4>
                        <div className="row">                        
                            <div className="component-example col">
                                <div className="example-box">
                                    <Button disabled>Disabled</Button>
                                    <Button loading>Loading</Button>
                                    <Button basic loading>
                                        Loading
                                    </Button>
                                    <Button loading primary>
                                        Loading
                                    </Button>
                                    <Button loading secondary>
                                        Loading
                                    </Button>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
    <Button basic loading>
        Loading
    </Button>
    <Button loading primary>
        Loading
    </Button>
    <Button loading secondary>
        Loading
    </Button>
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
