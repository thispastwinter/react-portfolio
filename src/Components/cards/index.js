import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div className={this.props.gridSize}>
                {this.props.hasHeading ?
                    <div>
                        <h1 className="centered-text uppercase-text bottom-margin" id={this.props.id}>{this.props.heading}</h1>
                        <hr className="divider bottom-margin"></hr>
                        <h3 className="centered-text important tag">{this.props.tagline}</h3>
                    </div> : null} 
                    {this.props.children}
                    <img id="gallery-img" src={this.props.imageUrl} alt={this.props.imageUrl}></img>
            </div>

        );
    }
}

export default Card;