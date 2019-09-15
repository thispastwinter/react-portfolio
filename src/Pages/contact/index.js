import React, { Component } from 'react';
import ContactForm from '../../Components/contactform';
import Card from '../../Components/cards';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="grid">
                    <ContactForm heading={this.props.heading} />
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