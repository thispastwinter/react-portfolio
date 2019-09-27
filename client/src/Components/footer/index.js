import React, { Component } from 'react';
import NavBar from '../navigation';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { routes } from '../../Routes/routes';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer is-centered">
                    <NavBar array={routes} footer />
                </div>
                <div className="footer is-centered">
                    <div className="grid-cell-sm is-spaced icons">
                        <a
                            className="standard-link footer-nav"
                            href="https://github.com/thispastwinter/"
                        >
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                        <a
                            className="standard-link footer-nav"
                            href="https://www.linkedin.com/in/justin-klaas-33a04085/"
                        >
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </a>
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