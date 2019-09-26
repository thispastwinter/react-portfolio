import React, { Component } from 'react';
import './index.css';

class MyInput extends Component {
    render() {
        return (
            <div className="input">
                <input className={this.props.size}
                    type={this.props.text}
                    placeholder={this.props.placeholder}
                    id={this.props.id}></input>
            </div>
        );
    }
}

export default MyInput;