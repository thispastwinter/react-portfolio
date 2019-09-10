import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { array } = this.props;
        return (
            <div id="navbar" className="grid-cell-lg is-spaced desktop-nav">
                {array.map(link =>
                    <Link style={{textDecoration: 'none'}} to={{
                        pathname: `${link.path}`
                    }} >
                        <a className="nav-links link">{link.name}</a>
                    </Link>
                )}
            </div>
        );
    }
}

export default NavBar;