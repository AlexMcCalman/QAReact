import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };
    };

    incrementCounter() {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrementCounter() {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <button type="button" onClick={() => this.incrementCounter()}>Add</button>
                <span> Count: {this.state.count} </span>
                <button type="button" onClick={() => this.decrementCounter()}>Subtract</button>
            </div>
        );
    };
};

export default Counter;
