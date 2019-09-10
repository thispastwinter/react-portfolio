import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={this.props.gridSize}>
                <h1 className="uppercase-text bottom-margin" id={this.props.id}>{this.props.heading}</h1>
                <hr className="divider bottom-margin"></hr>
                <h3 className="centered-text important">{this.props.tagline}</h3>
                {this.props.children}
            </div>

        );
    }
}

export default Card;