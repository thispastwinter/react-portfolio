import React, { Component } from 'react';

class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div id="banner-text">
                    {this.props.text}
                </div>
                <div className="grid">
                    <div className="grid-cell-lg centered-text top-margin is-desktop">
                        <h3>{this.props.tagline}</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;

