import React from 'react';
import CategoryRow from './CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;

        this.props.products.forEach((product) => {
            if( (product.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1) ||
                (!(product.quantity > 0) && this.props.checkboxValue) ) {
                    return;
                }

            if (product.category !== lastCategory) {
                rows.push(<CategoryRow category={product.category}
                                       key={product.category} />);
            }

            rows.push(<ProductRow product={product}
                                  key={product.id} />);

            lastCategory = product.category;
            return;
            }
        );

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    };
};

export default ProductTable;
