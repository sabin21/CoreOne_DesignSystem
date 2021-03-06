import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { iconSearch, iconCloseSolid } from 'carbon-icons';
import { settings } from 'carbon-components';
import Icon from '../Icon';

const { prefix } = settings;

export default class Search extends Component {
  static propTypes = {
    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Optional prop to specify the type of the `<input>`
     */
    type: PropTypes.string,

    /**
     * Specify whether the Search should be a small variant
     */
    small: PropTypes.bool,

    /**
     * Provide an optional placeholder text for the Search
     */
    placeHolderText: PropTypes.string,

    /**
     * Provide an optional label text for the Search icon
     */
    labelText: PropTypes.node.isRequired,

    /**
     * Specify a custom `id` for the input
     */
    id: PropTypes.string,

    /**
     * Specify a label to be read by screen readers on the "close" button
     */
    closeButtonLabelText: PropTypes.string,

    /**
     * `true` to use the light version.
     */
    light: PropTypes.bool,
  };

  static defaultProps = {
    type: 'text',
    small: false,
    placeHolderText: '',
    onChange: () => {},
    light: false,
  };

  state = {
    hasContent: this.props.value || this.props.defaultValue || false,
    prevValue: this.props.value,
  };

  static getDerivedStateFromProps({ value }, state) {
    const { prevValue } = state;
    return prevValue === value
      ? null
      : {
          hasContent: !!value,
          prevValue: value,
        };
  }

  clearInput = evt => {
    if (!this.props.value) {
      this.input.value = '';
      this.props.onChange(evt);
    } else {
      const clearedEvt = Object.assign({}, evt.target, {
        target: {
          value: '',
        },
      });
      this.props.onChange(clearedEvt);
    }

    this.setState({ hasContent: false }, () => this.input.focus());
  };

  handleChange = evt => {
    this.setState({
      hasContent: evt.target.value !== '',
    });

    this.props.onChange(evt);
  };

  render() {
    const {
      className,
      type,
      id = (this._inputId =
        this._inputId ||
        `search__input__id_${Math.random()
          .toString(36)
          .substr(2)}`),
      placeHolderText,
      labelText,
      closeButtonLabelText,
      small,
      light,
      ...other
    } = this.props;

    const { hasContent } = this.state;

    const searchClasses = classNames({
      [`${prefix}--search`]: true,
      [`${prefix}--search--lg`]: !small,
      [`${prefix}--search--sm`]: small,
      [`${prefix}--search--light`]: light,
      [className]: className,
    });

    const clearClasses = classNames({
      [`${prefix}--search-close`]: true,
      [`${prefix}--search-close--hidden`]: !hasContent,
    });

    return (
      <div
        className={searchClasses}
        role="search"
        aria-labelledby={`${id}-label`}>
        <Icon
          icon={iconSearch}
          description={labelText}
          className={`${prefix}--search-magnifier`}
        />
        <label id={`${id}-label`} htmlFor={id} className={`${prefix}--label`}>
          {labelText}
        </label>
        <input
          {...other}
          type={type}
          className={`${prefix}--search-input`}
          id={id}
          placeholder={placeHolderText}
          onChange={this.handleChange}
          ref={input => {
            this.input = input;
          }}
        />
        <button
          className={clearClasses}
          onClick={this.clearInput}
          type="button"
          aria-label={closeButtonLabelText}>
          <Icon icon={iconCloseSolid} description={closeButtonLabelText} />
        </button>
      </div>
    );
  }
}
