import React from 'react';

class ProductRow extends React.Component {
    render() {
        let quantity = this.props.product.quantity > 0 ?
                        this.props.product.quantity :
                        <span style={{color: 'red'}}>
                            {this.props.product.quantity}
                        </span>;

        return (
            <tr>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.name}</td>
                <td>£{this.props.product.price}</td>
                <td>{quantity}</td>
            </tr>
        );
    };
};

export default ProductRow;
