import React, { Component } from 'react';
import Card from '../../Components/cards';
import { Link } from 'react-router-dom';
import { projects } from '../../Projects/';

class Portfolio extends Component {
    render() {
        return (

            <div className="grid">
                <Card
                    hasHeading="true"
                    gridSize="grid-cell-md"
                    heading={this.props.heading}
                    tagline="Current and Past Projects"
                    id="contact"
                >
                    {projects.map(({ path, name, tagline }) =>
                        <Link className="standard-link important" style={{ textDecoration: 'none' }} to={{
                            pathname: `${path}`
                        }} >
                            <br></br>
                            <h3 className="is-centered" href={path}>{name}</h3>
                            <p className="centered-text">{tagline}</p>
                        </Link>
                    )}
                </Card>

            </div>

        );
    }
}

export default Portfolio;