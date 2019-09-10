import React, { Component } from 'react';
import NavBar from '../navigation';
import Banner from '../banner';
import routes from '../../Routes/routes'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid-cell-lg header centered-text">
                <Banner
                    text="Justin Klaas"
                    tagline="Simplified design and attention to detail. I'll make sure your next project performs the best it can!"
                />
                <NavBar array={routes} />
            </div>

        );
    }
}

export default Header;