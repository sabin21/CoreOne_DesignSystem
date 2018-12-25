
import React, { Component } from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import ContentSwitcher from '../../carbon-react/components/ContentSwitcher';
import Switch from '../../carbon-react/components/Switch';
import Icon from '../../carbon-react/components/Icon';


  /*
  const iconMap = {
    iconAddSolid: <Icon icon={iconAddSolid} />,
    iconSearch: <Icon icon={iconSearch} />,
  };
  
  const kinds = {
    'Anchor (anchor)': 'anchor',
    'Button (button)': 'button',
  };
  
  const props = {
    contentSwitcher: () => ({
      onChange: action('onChange'),
    }),
    switch: () => ({
      onClick: action('onClick - Switch'),
      kind: select('Button kind (kind in <Switch>)', kinds, 'anchor'),
      href: text('The link href (href in <Switch>)', ''),
      icon: iconMap[select('Icon (icon in <Switch>)', icons, 'none')],
    }),
  };
  */

export class DocComContentSwitcher extends React.Component{   
    render(){
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Content Switcher" intro="Content Switcher는 둘 이상의 선택지를 선택하면 해당 컨텐츠를 보여주는 역할을 한다."></DocHeader>
                    <div className="container guide">

                        <h4>Content Switcher</h4>
                        <div className="row">
                            <div className="component-example">

                                <div className="example-box">
                                    <ContentSwitcher selectedIndex={0} >
                                        <Switch name="one" text="첫번째 Section" onClick={this.onChange} />
                                        <Switch name="two" text="두번째 Section" onClick={this.onChange} />
                                        <Switch name="three" text="세번째 Section"  onClick={this.onChange} />
                                    </ContentSwitcher>
                                        
                                                                                                                           
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <div data-content-switcher class="c1--content-switcher" role="tablist" aria-label="Demo switch content">
        <button class="c1--content-switcher-btn c1--content-switcher--selected" data-target=".demo--panel--opt-1" role="tab" aria-selected="true">
        <span>First section</span>
        </button>
        <button class="c1--content-switcher-btn" data-target=".demo--panel--opt-2" role="tab">
        <span>Second section</span>
        </button>
        <button class="c1--content-switcher-btn" data-target=".demo--panel--opt-3" role="tab">
        <span>Third section</span>
        </button>
    </div>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                                                <h4>Content Switcher</h4>
                        <div className="row">
                            <div className="component-example">

                                <div className="example-box">
                                    <ContentSwitcher selectedIndex={0}>
                                        <Switch name="one" text="첫번째 Section" />
                                        <Switch name="two" text="두번째 Section" />
                                        <Switch name="three" text="세번째 Section" />
                                    </ContentSwitcher>
                                        
                                                                                                                           
                                </div>

                                <div className="example-code">
<Highlight>
{`
    <div data-content-switcher class="bx--content-switcher" role="tablist" aria-label="Demo switch content">
        <button class="bx--content-switcher-btn bx--content-switcher--selected" data-target=".demo--panel--opt-1" role="tab" aria-selected="true">
        <svg class="bx--content-switcher__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
        </svg>
        <span>First section</span>
        </button>
        <button class="bx--content-switcher-btn" data-target=".demo--panel--opt-2" role="tab">
        <svg class="bx--content-switcher__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
        </svg>
        <span>Second section</span>
        </button>
        <button class="bx--content-switcher-btn" data-target=".demo--panel--opt-3" role="tab">
        <svg class="bx--content-switcher__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
        </svg>
        <span>Third section</span>
        </button>
    </div>
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

export default DocComContentSwitcher;
