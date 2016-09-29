import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to NB Gardens!</h1>
                <h2>Purveyors of fine garden gnomes and such.</h2>
                <p>With our long history of customer satisfaction through knowledge and customer service,
                   we are confident we can help you find the right garden accessories.</p>
            </div>
        );
    };
};

export default Home;
