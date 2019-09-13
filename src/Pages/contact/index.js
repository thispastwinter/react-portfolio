import React, { Component } from 'react';
import MyButton from '../../Components/buttons';
import MyInput from '../../Components/inputs';
import Card from '../../Components/cards';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                {console.log(this.props)}
                <div className="grid">
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
                    <Card
                        gridSize="grid-cell-md is-centered"
                        imageUrl="/images/contactpic.jpg"
                    >

                    </Card>
                </div>
            </React.Fragment>
                );
            }
        }
        
export default Contact;