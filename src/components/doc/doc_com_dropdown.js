import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import { Input, Dropdown, Menu } from 'semantic-ui-react'

import { friendOptions, countryOptions, techs, languageOptions, tagOptions } from '../../sample_data/index'

export class DocComDropdown extends React.Component{
    
    render(){
        
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Dropdown" intro="Dropdown은 사용자가 여러가지 옵션의 셋트 중 특정 값을 쉽게 선택 할 수 있도록 한다."></DocHeader>
                    <div className="container guide">

                        <h4>Basic Dropdown menu</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Dropdown text='File'>
                                        <Dropdown.Menu>
                                        <Dropdown.Item text='New' />
                                        <Dropdown.Item text='Open...' description='ctrl + o' />
                                        <Dropdown.Item text='Save as...' description='ctrl + s' />
                                        <Dropdown.Item text='Rename' description='ctrl + r' />
                                        <Dropdown.Item text='Make a copy' />
                                        <Dropdown.Item icon='folder' text='Move to folder' />
                                        <Dropdown.Item icon='trash' text='Move to trash' />
                                        <Dropdown.Divider />
                                        <Dropdown.Item text='Download As...' />
                                        <Dropdown.Item text='Publish To Web' />
                                        <Dropdown.Item text='E-mail Collaborators' />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Dropdown text='File'>
    <Dropdown.Menu>
    <Dropdown.Item text='New' />
    <Dropdown.Item text='Open...' description='ctrl + o' />
    <Dropdown.Item text='Save as...' description='ctrl + s' />
    <Dropdown.Item text='Rename' description='ctrl + r' />
    <Dropdown.Item text='Make a copy' />
    <Dropdown.Item icon='folder' text='Move to folder' />
    <Dropdown.Item icon='trash' text='Move to trash' />
    <Dropdown.Divider />
    <Dropdown.Item text='Download As...' />
    <Dropdown.Item text='Publish To Web' />
    <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
    </Dropdown>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Basic Selection</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Dropdown placeholder='Select Friend' fluid selection options={friendOptions} style={{margin:'0 2rem'}} />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Dropdown placeholder='Select Friend' fluid selection options={friendOptions} />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Search Selection</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} style={{margin:'0 2rem'}} />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Multiple Selection</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Dropdown placeholder='Skills' fluid multiple selection options={techs}  style={{margin:'0 2rem'}} />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Dropdown placeholder='Skills' fluid multiple selection options={techs} />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Search Dropdown</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Dropdown
                                        button
                                        className='icon'
                                        floating
                                        labeled
                                        icon='world'
                                        options={languageOptions}
                                        search
                                        text='Select Language'
                                    />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Dropdown
        button
        className='icon'
        floating
        labeled
        icon='world'
        options={languageOptions}
        search
        text='Select Language'
    />
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Search In-Menu</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Dropdown text='Filter Posts' icon='filter' floating labeled button className='icon'>
                                        <Dropdown.Menu>
                                        <Input icon='search' iconPosition='left' className='search' />
                                        <Dropdown.Divider />
                                        <Dropdown.Header icon='tags' content='Tag Label' />
                                        <Dropdown.Menu scrolling>
                                            {tagOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
                                        </Dropdown.Menu>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Dropdown text='Filter Posts' icon='filter' floating labeled button className='icon'>
    <Dropdown.Menu>
    <Input icon='search' iconPosition='left' className='search' />
    <Dropdown.Divider />
    <Dropdown.Header icon='tags' content='Tag Label' />
    <Dropdown.Menu scrolling>
        {tagOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
    </Dropdown.Menu>
    </Dropdown.Menu>
    </Dropdown>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Inline & Pointing</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <span style={{marginRight:'4rem'}}>
                                        posts by{' '}
                                        <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
                                    </span>
                                    <Menu vertical>
                                        <Menu.Item>Home</Menu.Item>
                                        <Dropdown text='Messages' pointing='left' className='link item'>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Inbox</Dropdown.Item>
                                            <Dropdown.Item>Starred</Dropdown.Item>
                                            <Dropdown.Item>Sent Mail</Dropdown.Item>
                                            <Dropdown.Item>Drafts (143)</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>Spam (1009)</Dropdown.Item>
                                            <Dropdown.Item>Trash</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                        <Menu.Item>Browse</Menu.Item>
                                        <Menu.Item>Help</Menu.Item>
                                    </Menu>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <span style={{marginRight:'4rem'}}>
    Show me posts by{' '}
    <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
    </span>
    <Menu vertical>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text='Messages' pointing='left' className='link item'>
    <Dropdown.Menu>
        <Dropdown.Item>Inbox</Dropdown.Item>
        <Dropdown.Item>Starred</Dropdown.Item>
        <Dropdown.Item>Sent Mail</Dropdown.Item>
        <Dropdown.Item>Drafts (143)</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Spam (1009)</Dropdown.Item>
        <Dropdown.Item>Trash</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Browse</Menu.Item>
    <Menu.Item>Help</Menu.Item>
    </Menu>
`}
</Highlight>
                                </div>
                            </div>
                        </div>
{/* Example End */}
                    </div>
                </div>             
            </div>
        );
    }
}

export default DocComDropdown;
