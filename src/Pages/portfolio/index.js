import React, { Component } from 'react';
import Card from '../../Components/cards';

class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                {console.log(this.props)}
                <Card
                    hasHeading="true"
                    gridSize="grid-cell-md"
                    heading={this.props.heading}
                    tagline="Current and Past Projects"
                    id="contact"
                >
                    
                </Card>
            </React.Fragment>
        );
    }
}

export default Portfolio;