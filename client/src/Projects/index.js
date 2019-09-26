import React from 'react';
import { Route } from 'react-router-dom';
import ProjectContainer from '../Components/projectcontainer';
import { CSSTransition } from 'react-transition-group';

const projects = [
    {
        name: 'DM Companion',
        tagline: 'A white label webpage for tattoo parlors and other services that require booking.',
        description: 'The primary technologies used in this project were Node, Sequelize, MySql, Handlebars, and Google Calender\'s API. The idea was to create a template for businesses whose services require booking.The database contains each artists information including: image paths, calender paths, biographies, and emails.Since this was an "MVP" there is some functionality that does not yet exist.For a real world application, an online portal with user authentication would be implemented.This would give artists the ability to see upcoming appointments, all of their clients, and to make updates to client and artist data; this would completely remove the need for a developer to regularly maintain the site.The concept for a tattoo parlor felt as if it was a good demonstration of a business that could benefit from this project.',
        github: '',
        deployed: 'https://dm-companion.herokuapp.com',
        image: '/images/hue.png',
        path: '/dmcompanion'
    },
    {
        name: 'Batch Calculator',
        tagline: 'A white label webpage for tattoo parlors and other services that require booking.',
        description: 'The primary technologies used in this project were Node, Sequelize, MySql, Handlebars, and Google Calender\'s API. The idea was to create a template for businesses whose services require booking.The database contains each artists information including: image paths, calender paths, biographies, and emails.Since this was an "MVP" there is some functionality that does not yet exist.For a real world application, an online portal with user authentication would be implemented.This would give artists the ability to see upcoming appointments, all of their clients, and to make updates to client and artist data; this would completely remove the need for a developer to regularly maintain the site.The concept for a tattoo parlor felt as if it was a good demonstration of a business that could benefit from this project.',
        github: '',
        deployed: '',
        image: '/images/batchcalc.png',
        path: '/batchcalc'
    },
    {
        name: 'BJ\'s Tattoo Haven',
        tagline: 'A white label webpage for tattoo parlors and other services that require booking.',
        description: 'The primary technologies used in this project were Node, Sequelize, MySql, Handlebars, and Google Calender\'s API. The idea was to create a template for businesses whose services require booking.The database contains each artists information including: image paths, calender paths, biographies, and emails.Since this was an "MVP" there is some functionality that does not yet exist.For a real world application, an online portal with user authentication would be implemented.This would give artists the ability to see upcoming appointments, all of their clients, and to make updates to client and artist data; this would completely remove the need for a developer to regularly maintain the site.The concept for a tattoo parlor felt as if it was a good demonstration of a business that could benefit from this project.',
        github: '',
        deployed: 'https://bjs-tattoo-haven.herokuapp.com/',
        image: '/images/bjtattoo.png',
        path: '/bjstattoo'
    }
]

const ProjectRoutes = () => {
    return (
        <div>
            {projects.map(({ path, tagline, deployed, description, name, github, image }) => (
                <Route key={path} exact path={path} >
                    {({ match, props }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={100}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div className="fade">
                                <ProjectContainer {...props} 
                                tagline={tagline}
                                deployed={deployed}
                                description={description}
                                name={name}
                                github={github}  
                                image={image}
                                />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </div>
    )
}

export { projects, ProjectRoutes };