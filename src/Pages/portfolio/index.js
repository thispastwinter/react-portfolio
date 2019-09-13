import React, { Component } from 'react';
import Card from '../../Components/cards';
import projects from '../../Projects/';

class Portfolio extends Component {
    render() {
        return (
            <div>
                {projects.map(({ name, tagline, description, image, github, deployed }) =>
                    <div className="grid">
                        <Card
                            hasHeading="true"
                            gridSize="grid-cell-md"
                            heading={name}
                            tagline={tagline}
                            id="contact"
                        >
                            <div>
                                <br></br>
                                <p className="indent-text important bottom-margin">{description}</p>
                                <div className="is-spaced">
                                    <a className="standard-link text-is-strong important underline" href={github}>Github</a>
                                    {deployed ?
                                        <a className="standard-link text-is-strong important underline" href={deployed}>Heroku</a>
                                        : null}
                                </div>
                            </div>
                        </Card>
                        <Card
                            gridSize="grid-cell-md is-centered"
                            imageUrl={image}
                        >
                        </Card>
                    </div>
                )}
            </div>
        );
    }
}

export default Portfolio;