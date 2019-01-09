import React from 'react';
import DocHeader from './doc_header';
import Highlight from 'react-highlight';
import _ from 'lodash'
import { Button, Header, Image, Modal,Icon } from 'semantic-ui-react'

class ModalExampleCloseConfig extends React.Component {
    state = { open: false }
  
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })
  
    render() {
      const { open, closeOnEscape, closeOnDimmerClick } = this.state
  
      return (
        <div>
          <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
          <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button>
  
          <Modal
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}
          >
            <Modal.Header>Delete Your Account</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete your account</p>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.close} negative>
                No
              </Button>
              <Button
                onClick={this.close}
                positive
                labelPosition='right'
                icon='checkmark'
                content='Yes'
              />
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
  }

export class DocComModal extends React.Component{

    state = { modalOpen: false }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render(){
        
        return(            
            <div className="page-wrap">
                <div className="content-wrap">
                    <DocHeader title="Modal" intro="Modal은 사이트의 메인뷰 위에 임시적으로 컨텐츠를 볼 수 있도록 한다."></DocHeader>
                    <div className="container guide">

                        <h4>Standard Modal</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Modal trigger={<Button>Show Modal</Button>}>
                                        <Modal.Header>Select a Photo</Modal.Header>
                                        <Modal.Content image>
                                        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                                        <Modal.Description>
                                            <Header>Default Profile Image</Header>
                                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                                            <p>Is it okay to use this photo?</p>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
    <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
    </Modal.Description>
    </Modal.Content>
    </Modal>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Scrolling Modal</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Modal trigger={<Button>Long Modal</Button>}>
                                    <Modal.Header>Profile Picture</Modal.Header>
                                    <Modal.Content image>
                                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                    <Modal.Description>
                                        <Header>Modal Header</Header>
                                        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                    </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                    <Button primary>
                                        Proceed <Icon name='right chevron' />
                                    </Button>
                                    </Modal.Actions>
                                    </Modal>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Modal trigger={<Button>Long Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
    <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    <Button primary>
        Proceed <Icon name='right chevron' />
    </Button>
    </Modal.Actions>
    </Modal>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Controlled Modal</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                <Modal
                                    trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    basic
                                    size='small'
                                >
                                    <Header icon='browser' content='Cookies policy' />
                                    <Modal.Content>
                                    <h3>This website uses cookies to ensure the best user experience.</h3>
                                    </Modal.Content>
                                    <Modal.Actions>
                                    <Button color='green' onClick={this.handleClose} inverted>
                                        <Icon name='checkmark' /> Got it
                                    </Button>
                                    </Modal.Actions>
                                </Modal>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Modal
    trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
    open={this.state.modalOpen}
    onClose={this.handleClose}
    basic
    size='small'
    >
    <Header icon='browser' content='Cookies policy' />
    <Modal.Content>
    <h3>This website uses cookies to ensure the best user experience.</h3>
    </Modal.Content>
    <Modal.Actions>
    <Button color='green' onClick={this.handleClose} inverted>
        <Icon name='checkmark' /> Got it
    </Button>
    </Modal.Actions>
    </Modal>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Scrolling Content</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <Modal trigger={<Button>Scrolling Content Modal</Button>}>
                                        <Modal.Header>Profile Picture</Modal.Header>
                                        <Modal.Content image scrolling>
                                        <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

                                        <Modal.Description>
                                            <Header>Modal Header</Header>
                                            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

                                            {_.times(8, i => (
                                            <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
                                            ))}
                                        </Modal.Description>
                                        </Modal.Content>
                                        <Modal.Actions>
                                        <Button primary>
                                            Proceed <Icon name='chevron right' />
                                        </Button>
                                        </Modal.Actions>
                                    </Modal>
                                </div>
                                <div className="example-code">
<Highlight>
{`
    <Modal trigger={<Button>Scrolling Content Modal</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
    <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

    <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {_.times(8, i => (
        <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
        ))}
    </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    <Button primary>
        Proceed <Icon name='chevron right' />
    </Button>
    </Modal.Actions>
    </Modal>
`}
</Highlight>
                                </div>
                            </div>
                        </div>

                        <h4>Close Config</h4>
                        <div className="row">
                            <div className="component-example col">
                                <div className="example-box">
                                    <ModalExampleCloseConfig />
                                </div>
                                <div className="example-code">
<Highlight>
{`
    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

    render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
        <div>
        <Button onClick={this.closeConfigShow(false, true)}>No Close on Escape</Button>
        <Button onClick={this.closeConfigShow(true, false)}>No Close on Dimmer Click</Button>

        <Modal
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}
        >
            <Modal.Header>Delete Your Account</Modal.Header>
            <Modal.Content>
            <p>Are you sure you want to delete your account</p>
            </Modal.Content>
            <Modal.Actions>
            <Button onClick={this.close} negative>
                No
            </Button>
            <Button
                onClick={this.close}
                positive
                labelPosition='right'
                icon='checkmark'
                content='Yes'
            />
            </Modal.Actions>
        </Modal>
        </div>
    )
    }
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

export default DocComModal;
