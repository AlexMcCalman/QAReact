import React from 'react';
import ProductDetail from './NBGCatalogue/ProductDetail.jsx';
import CategoryRow from './NBGCatalogue/CategoryRow.jsx';
import ProductRow from './NBGCatalogue/ProductRow.jsx';
import ProductTable from './NBGCatalogue/ProductTable.jsx';
import SearchBar from './NBGCatalogue/SearchBar.jsx';
import SearchableTable from './NBGCatalogue/SearchableTable.jsx';

class App extends React.Component {
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

export default App;
