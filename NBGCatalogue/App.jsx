import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/catalogue'>Catalogue</Link></li>
                </ul>

                {this.props.children}
            </div>
        );
    };
};

export default App;
