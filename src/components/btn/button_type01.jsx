import React from 'react';


class ButtonType01 extends React.Component {

  render() {
    const { children, className, href, icon, ...others } = this.props;
    const props = { ...others, href, className, ref: 'button', disabled: this.props.disabled };
    const element = href ? 'a' : 'button';

    return(
      element, props, icon ? <i className={this.props.icon} /> : null, children
    );
  }
}

export default ButtonType01;

