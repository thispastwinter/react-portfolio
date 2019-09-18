import React, { Component } from 'react';
import NavBar from '../../Components/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { routes } from '../../Routes/routes';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer is-centered">
                <NavBar array={routes} footer="true" />
                </div>
                <div className="footer is-centered">
                    <div className="grid-cell-sm is-spaced icons">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="footer is-centered copyright">
                Copyright 2019 Justin Klaas
                </div>
            </div>
        );
    }
}

export default Footer;