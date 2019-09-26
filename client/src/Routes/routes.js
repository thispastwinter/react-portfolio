import React from 'react';
import { Route } from 'react-router-dom';
import Contact from '../Pages/contact';
import Portfolio from '../Pages/portfolio';
import About from '../Pages/about';
import { CSSTransition } from 'react-transition-group';

const routes = [
    {
        name: 'About',
        path: '/',
        Component: About,
        heading: 'About'
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
        <div>
            {routes.map(({ path, Component, heading }) => (
                <Route key={path} exact path={path} >
                    {({ match, props }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className="fade">
                                <Component {...props} heading={heading} />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </div>
    )
}


export { routes, PublicRoutes };