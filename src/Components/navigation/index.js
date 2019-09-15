import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const { array } = this.props;
        return (
            <div className="grid-cell-lg is-spaced desktop-nav">
                {array.map(({ path, name }) =>
                    <Link style={{textDecoration: 'none'}} to={{
                        pathname: `${path}`
                    }} >
                        <a className="nav-links link" href={path}>{name}</a>
                    </Link>
                )}
            </div>
        );
    }
}

export default NavBar;