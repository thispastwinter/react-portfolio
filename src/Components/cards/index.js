import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.gridSize}>
                {this.props.hasHeading ?
                    <div>
                        <h1 className="uppercase-text bottom-margin" id={this.props.id}>{this.props.heading}</h1>
                        <hr className="divider bottom-margin"></hr>
                        <h3 className="centered-text important">{this.props.tagline}</h3>
                    </div> : null} 
                    {this.props.children}
                    <img id="gallery-img" src={this.props.imageUrl}></img>
            </div>

        );
    }
}

export default Card;