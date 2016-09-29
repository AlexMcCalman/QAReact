import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import ProductDetail from './ProductDetail.jsx';
import CategoryRow from './CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';
import ProductTable from './ProductTable.jsx';
import SearchBar from './SearchBar.jsx';
import SearchableTable from './SearchableTable.jsx';

class Catalogue extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedProduct: null
        };
    };

    handleUserSelection(product) {
        this.setState({
            selectedProduct: product
        });
    };

    render() {
       return(
            <div>
                <h1>NB Gardens Catalogue</h1>
                <div>
                    <div style={{float: 'left'}}>
                        <SearchableTable products={this.props.products}
                                         selectedProduct={this.state.selectedProduct}
                                         onSelected={this.handleUserSelection.bind(this)}/>
                    </div>
                    <div style={{display: 'inline-block', padding: 50}}>
                        <ProductDetail selectedProduct={this.state.selectedProduct} />
                    </div>
                </div>
            </div>
        );
   };
};

export default Catalogue;
