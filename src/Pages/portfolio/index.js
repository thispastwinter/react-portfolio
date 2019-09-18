import React, { Component } from 'react';
import Card from '../../Components/cards';
import { Link } from 'react-router-dom';
import { projects } from '../../Projects/';

class Portfolio extends Component {
    state = {
        hover: false,
        currentImage: projects[0].image
    }

    mouseOver = (image) => {
        this.setState({ hover: true });
        this.setState({ currentImage: image })
    }

    mouseOut = () => {
        this.setState({ hover: false })
    }

    render() {
       const { currentImage } = this.state;
        return (

            <div className="grid">
                <Card
                    hasHeading="true"
                    gridSize="grid-cell-md"
                    heading={this.props.heading}
                    tagline="Current and Past Projects"
                    id="contact"
                >
                    {projects.map(({ path, name, tagline, image }) =>
                        <Link className="standard-link important" onMouseOver={() => this.mouseOver(image)} onMouseOut={this.mouseOut} style={{ textDecoration: 'none' }} to={{
                            pathname: `${path}`
                        }} >
                            <br></br>
                            <h3 data={image} className="is-centered" href={path}>{name}</h3>
                            <p className="centered-text">{tagline}</p>
                        </Link>
                    )}
                </Card>
                <Card
                    gridSize="grid-cell-md is-centered"
                    imageUrl={currentImage}
                >
                </Card>
            </div>

        );
    }
}

export default Portfolio;