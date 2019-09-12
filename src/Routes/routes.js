import React from 'react';
import { Route } from 'react-router-dom';
import Contact from '../Pages/contact';
import Portfolio from '../Pages/portfolio';
import About from '../Pages/about';

const routes = [
    {
        name: 'About',
        path: '/about',
        Component: About,
        heading: 'Who am I?'
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
        Component: Portfolio,
        heading: 'Portfolio'
    },
    {
        name: 'Contact',
        path: '/contact',
        Component: Contact,
        heading: 'Contact'
    }
]

const PublicRoutes = () => {
    return (
        routes.map(({ path, Component, heading }) =>
            <Route exact path={path} render={(props) => <Component {...props} heading={heading} />
            } />)
    )
}


export { routes, PublicRoutes };