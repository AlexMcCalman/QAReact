import React from 'react';

class ProductDetail extends React.Component {
    render() {
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
