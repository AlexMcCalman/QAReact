import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search"></input> <br/>
            <input type="checkbox">Only show in-stock products</input>
            </div>
        );
    };
};

export default SearchBar;
