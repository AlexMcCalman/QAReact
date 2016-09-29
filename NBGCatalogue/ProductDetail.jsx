import React from 'react';

class ProductDetail extends React.Component {
    render() {
        if (this.props.selectedProduct === null) {
            return (
                <h3>Click on a product for more information</h3>
            );
        };

        return (
            <div>
                <h2>{this.props.selectedProduct.name}</h2>
                <p>ID: {this.props.selectedProduct.id}</p>
                <p>Price: £{this.props.selectedProduct.price}</p>
                <p>{this.props.selectedProduct.description}</p>
            </div>
        );
    };
};

export default ProductDetail;
