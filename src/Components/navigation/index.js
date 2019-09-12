import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const { array } = this.props;
        return (
            <div id="navbar" className="grid-cell-lg is-spaced desktop-nav">
                {array.map(link =>
                    <Link style={{textDecoration: 'none'}} to={{
                        pathname: `${link.path}`
                    }} >
                        <a className="nav-links link" href={link.path}>{link.name}</a>
                    </Link>
                )}
            </div>
        );
    }
}

export default NavBar;