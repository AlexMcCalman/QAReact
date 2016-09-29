import React from 'react';
import CategoryRow from './CategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;

        var groupedList = this.props.products.sort((a, b) => {
                            if(a.category === b.category) {
                                return a.id - b.id;
                            }

                            var x = a.category.toLowerCase(), y = b.category.toLowerCase();
                            return x < y ? -1 : x > y ? 1 : 0;
                        })

        groupedList.forEach((product) => {
            if ( (product.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1) &&
                 (product.category.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1) ||
                 (!(product.quantity > 0) && this.props.checkboxValue) ) {
                     return;
                 }

            if (product.category !== lastCategory) {
                rows.push(<CategoryRow category={product.category}
                                       key={product.category} />);
            }

            rows.push(<ProductRow product={product}
                                  key={product.id}
                                  onSelected={this.props.onSelected}/>);

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
