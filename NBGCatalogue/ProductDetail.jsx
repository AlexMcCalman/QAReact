import React from 'react';

class ProductDetail extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>ID: {this.props.id}</p>
                <p>Price: £{this.props.price}</p>
                <p>{this.props.description}</p>
            </div>
        );
    };
};

export default ProductDetail;
