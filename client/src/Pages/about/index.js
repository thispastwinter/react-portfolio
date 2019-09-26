import React, { Component } from 'react';
import { faReact, faJs, faCss3, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Card from '../../Components/cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const techIcons = [
    faReact,
    faJs,
    faCss3,
    faNodeJs
]

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="grid content">
                    <Card
                        hasHeading="true"
                        gridSize="grid-cell-md"
                        heading={this.props.heading}
                        tagline="A front-end developer ready to make your vision come to life."
                        id="about"
                    >
                        <p class="indent-text important bottom-margin top-margin">
                            I am a full-stack developer ready to make your vision come to life. I have always had a passion for creating
                            things. Traditionally that's shown itself in my music and other artistic endeavors, but I have also found
                            ways to implement creativity into my life as a programmer.</p>
                        <p class="indent-text important">
                            My current projects intersect my current passions. Presently I'm building an app that will <a
                            className="standard-link important underline" href="/portfolio/2">help bars convert single serving
                            cocktails into larger batches</a>. Most recently I worked on a group project where we built a <a
                            className="standard-link important underline" href="/portfolio/1">white label</a> site
                            to be utilized by businesses like tattoo parlors. The site
                            has a pre-designed template and uses Google Calender's api for booking.</p>
                        {/* <p class="indent-text important">I love styling web pages; this page is a
                        testament to that. All components including buttons, forms,
                        and the grid itself are my own design.
                    </p> */}
                        <div className="is-spaced top-margin important text-is-bigger">
                            {techIcons.map(icons =>
                                <FontAwesomeIcon icon={icons}></FontAwesomeIcon>
                            )}
                        </div>
                    </Card>
                    <Card
                        gridSize="grid-cell-md is-centered"
                        imageUrl="/images/profile-img.jpg"
                    >

                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default About;