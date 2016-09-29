import React from 'react';
import CategoryRow from './CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';

class SearchableTable extends React.Component {
    constructor() {
        super();

        this.state = {
            searchText: '',
            checkboxValue: false
        };
    };

    handleUserInput(searchText, checkboxValue) {
        this.setState({
            searchText: searchText,
            checkboxValue: checkboxValue
        });
    };

    render() {
        return (
            <div>
                <SearchBar searchText={this.state.searchText}
                           checkboxValue={this.state.checkboxValue}
                           onUserInput={this.handleUserInput.bind(this)} />
                <ProductTable products={this.props.products}
                              searchText={this.state.searchText}
                              checkboxValue={this.state.checkboxValue} />
            </div>
        );
    };
};

export default SearchableTable;
