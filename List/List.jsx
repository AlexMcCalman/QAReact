import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item) =>
                        <li key={item.name}>{item.name}, {item.colour}</li>)
                }
            </ul>
        );
    };
};

export default List;
