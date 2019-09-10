import React, { Component } from 'react';
import './index.css';

class MyButton extends Component {
  render() {
    return (
      <button
        className={this.props.primary ? 'mybutton' : 'mybutton-secondary'}
        onClick={this.props.static ? undefined : this.props.onClick}
        disabled={this.props.disabled}>
        {this.props.text}
      </button>
    );
  }
}
export default MyButton;