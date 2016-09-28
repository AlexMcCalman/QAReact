import React from 'react';
import CategoryRow from './CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';

class SearchableTable extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    };
};

export default SearchableTable;
