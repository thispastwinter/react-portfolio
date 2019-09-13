import React, { Component } from 'react';
import NavBar from '../navigation';
import Banner from '../banner';
import { routes } from '../../Routes/routes'

class Header extends Component {
    render() {
        return (
            <div className="grid-cell-lg header centered-text">
                <Banner text="Justin Klaas"
                        tagline="A front-end developer ready to make your vision come to life."
                />
                <NavBar array={routes} />
            </div>

        );
    }
}

export default Header;