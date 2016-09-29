import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>A whole bunch of shit about NB Gardens and their history.</p>
                <p>Probably a fair few gnomes mentioned as well.</p>
            </div>
        );
    };
};

export default About;
