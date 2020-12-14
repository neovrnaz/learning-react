import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }))};

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
  }))};

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <label>{this.state.count}</label>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.incrementFive}>+5</button>
      </div>
    );
  }
}

Counter.propTypes = {};

export default Counter;
