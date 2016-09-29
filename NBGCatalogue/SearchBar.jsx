import React from 'react';

class SearchBar extends React.Component {
    handleChange() {
        this.props.onUserInput(this.searchTextInput.value,
                               this.checkboxValueInput.checked);
    };

    render() {
        return (
            <form>
                <input type="text"
                       placeholder="Search"
                       value={this.props.searchText}
                       ref={(searchInput) => {this.searchTextInput = searchInput}}
                       onChange={this.handleChange.bind(this)} />
                <p>
                    <input type="checkbox"
                           checked={this.props.checkboxValue}
                           ref={(checkboxInput) => {this.checkboxValueInput = checkboxInput}}
                           onChange={this.handleChange.bind(this)} />
                    {' '}
                    Only show in-stock products
                </p>
            </form>
        );
    };
};

export default SearchBar;
