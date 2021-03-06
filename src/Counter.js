import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        if (this.state.count != 0) {
            this.setState({
                count: this.state.count - 1
            });
        };
    };

    render() {
        return (
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter