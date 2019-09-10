import React, { Component } from 'react';
import MyButton from '../../Components/buttons';
import MyInput from '../../Components/inputs';
import Card from '../../Components/cards';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {console.log(this.props)}
                <Card
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