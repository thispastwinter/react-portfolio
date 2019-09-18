import React, { Component } from 'react';
import Card from '../cards';

class ProjectContainer extends Component {
    render() {
        return (
            <div>
                    <div className="grid content">
                        <Card
                            hasHeading="true"
                            gridSize="grid-cell-md"
                            heading={this.props.name}
                            tagline={this.props.tagline}
                            id="contact"
                        >
                            <div>
                                <br></br>
                                <p className="indent-text important bottom-margin">{this.props.description}</p>
                                <div className="is-spaced">
                                    <a className="standard-link text-is-strong important underline" href={this.props.github}>Github</a>
                                    {this.props.deployed ?
                                        <a className="standard-link text-is-strong important underline" href={this.props.deployed}>Heroku</a>
                                        : null}
                                </div>
                            </div>
                        </Card>
                        <Card
                            gridSize="grid-cell-md is-centered"
                            imageUrl={this.props.image}
                        >
                        </Card>
                    </div>
            </div>
        );
    }
}

export default ProjectContainer;