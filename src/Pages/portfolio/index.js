import React, { Component } from 'react';
import Card from '../../Components/cards';
import projects from '../../Projects/';

class Portfolio extends Component {
    render() {
        return (
            <div>
                {projects.map(({ name, tagline, description, image }) =>
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
                                <p className="important">{description}</p>
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