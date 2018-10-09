import React from 'react';
import './accordion_01.scss';

class Accordion01 extends React.Component {
    constructor(props) {
      super();
      let open = [];
      props.children.forEach(item => {
        open.push(false);
      });
      this.state = {
        open: open
      };
    }
    
    isOpen(i) {
      return this.state.open[i];
    }
    
    toggle = (i) => {
      console.log('Toggling ', i);
      return () => { 
        let newOpen = this.state.open;
        newOpen[i] = !newOpen[i];
        this.setState({
          open: newOpen
        });
      };
    }
    
    renderItems = () => {
      return React.Children.map(this.props.children, (item, i) => {
        if (i%2 === 0) {
          let open = this.state.open[i/2]
          return <li className={`title`} onClick={this.toggle(Math.ceil(i/2))}>{open ? '− ' : '+ '}{item}</li>;
        } else {
          if (this.state.open[Math.floor(i/2)]) {
            return <li className="content">{item}</li>;
          }
        }
      });
    }
    
    render() {
      return (
        <ul className="accordion01">
          {this.renderItems()}
        </ul>
      );
    }
  }

export class Accordion01Sample extends React.Component {
    render() {
      return (
        <div style={{width:'100%'}}>
        <Accordion01>
          One
          <button>Content one</button>
          Two
          <span>Content two asdfsafdasdfsaf
          asdfsafsdafsafsdasfsdaf
          dasdfsdafdsafsdafsadf dsfadsfaf
            Content two asdfsafdasdfsaf
          asdfsafsdafsafsdasfsdaf
          dasdfsdafdsafsdafsadf dsfadsfaf
            Content two asdfsafdasdfsaf
          asdfsafsdafsafsdasfsdaf
          dasdfsdafdsafsdafsadf dsfadsfaf
          </span>
          Three
          <span>Content three</span>
          Four
          <span>Content four</span>
        </Accordion01>
        </div>
      );
    }
  }

export default Accordion01Sample;
