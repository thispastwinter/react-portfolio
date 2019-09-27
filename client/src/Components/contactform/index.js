import React, { Component } from 'react';
import Card from '../cards';
import MyInput from '../inputs';
import MyButton from '../buttons';

class ContactForm extends Component {
    render() {
        return (
            <Card
                hasHeading="true"
                gridSize="grid-cell-md"
                heading={this.props.heading}
                tagline="Drop me a line and let's create something together!"
                id="contact"
            >
                <MyInput
                    size="input-lg"
                    type="name"
                    placeholder="Name"
                    id="name" />
                <MyInput
                    size="input-lg"
                    type="email"
                    placeholder="Email"
                    id="email" />
                <MyInput
                    size="input-lg"
                    type="text"
                    placeholder="Message"
                    id="message" />
                <div className="grid is-centered">
                    <MyButton text="Submit"></MyButton>
                </div>
            </Card>
        );
    }
}

export default ContactForm;