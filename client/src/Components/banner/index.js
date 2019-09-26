import React, { Component } from 'react';
import './index.css';

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="banner-text">
                    {this.props.text}
                </div>
                <div className="grid">
                    <div className="grid-cell-lg centered-text top-margin tagline">
                        <h3>{this.props.tagline}</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;

