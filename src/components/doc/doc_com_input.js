import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import { Icon, Input, Dropdown, Select, Button } from 'semantic-ui-react'

export class DocComInput extends React.Component{
    
    render(){
        const options = [
            { key: '.com', text: '.com', value: '.com' },
            { key: '.net', text: '.net', value: '.net' },
            { key: '.org', text: '.org', value: '.org' },
          ]
          const options2 = [
            { key: 'all', text: 'All', value: 'all' },
            { key: 'articles', text: 'Articles', value: 'articles' },
            { key: 'products', text: 'Products', value: 'products' },
          ]
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Input" intro="Input은 사용자에게 정보를 제공받는 가장 기본적인 요소이다."></DocHeader>
                    <div className="container guide">

                        <h4>Input Default State, Focus State, Loading State</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Input placeholder='Search...' style={{marginRight:'1rem'}} />
                                    <Input focus placeholder='Search...' style={{marginRight:'1rem'}} />
                                    <Input loading icon='user' iconPosition='left' placeholder='Search...' />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Input placeholder='Search...' />
    <Input focus placeholder='Search...' />
    <Input loading icon='user' iconPosition='left' placeholder='Search...' />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Disabled State, Error State</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Input disabled placeholder='Search...' style={{marginRight:'2rem'}} />
                                    <Input error placeholder='Search...' />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Input disabled placeholder='Search...' />
    <Input error placeholder='Search...' />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Icon Input</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Input icon='search' placeholder='Search...' style={{marginRight:'1rem'}} />
                                    <Input icon='users' iconPosition='left' placeholder='Search users...' style={{marginRight:'1rem'}} />
                                    <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Input icon='search' placeholder='Search...' />
    <Input icon='users' iconPosition='left' placeholder='Search users...' />
    <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Labeled Input</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Input
                                        label={{ basic: true, content: 'kg' }}
                                        labelPosition='right'
                                        placeholder='Enter weight...'
                                        style={{marginRight:'1rem'}} 
                                    />
                                    <Input
                                        label={<Dropdown defaultValue='.com' options={options} />}
                                        labelPosition='right'
                                        placeholder='Find domain'
                                    />
                                    
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Input
    label={{ basic: true, content: 'kg' }}
    labelPosition='right'
    placeholder='Enter weight...'
    />
    <Input
    label={<Dropdown defaultValue='.com' options={options} />}
    labelPosition='right'
    placeholder='Find domain'
    />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Input Action</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Input
                                        action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout' }}
                                        actionPosition='left'
                                        placeholder='Search...'
                                        defaultValue='52.03'
                                        style={{marginRight:'1rem'}}
                                    />
                                    <Input type='text' placeholder='Search...' action><input />
                                        <Select compact options={options2} defaultValue='articles' />
                                        <Button type='submit'>Search</Button>
                                    </Input>
                                    
                                    
                                </div>
                                <div className="example-code">
<Highlight>
{`
    const options2 = [
        { key: 'all', text: 'All', value: 'all' },
        { key: 'articles', text: 'Articles', value: 'articles' },
        { key: 'products', text: 'Products', value: 'products' },
    ]
    .......
    <Input
    action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout' }}
    actionPosition='left'
    placeholder='Search...'
    defaultValue='52.03'
    />
    <Input type='text' placeholder='Search...' action><input />
    <Select compact options={options2} defaultValue='articles' />
    <Button type='submit'>Search</Button>
    </Input>
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

export default DocComInput;
