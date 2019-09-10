import React, { Component } from 'react';
import MyButton from '../../Components/buttons';
import MyInput from '../../Components/inputs';
import Card from '../../Components/cards';

class About extends Component {
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
                    tagline="A front-end developer ready to make your vision come to life."
                    id="about"
                >
                    
                </Card>
            </React.Fragment>
        );
    }
}

export default About;