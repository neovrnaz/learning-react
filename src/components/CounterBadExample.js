import React, {Component} from 'react';

class CounterBadExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  decrement() {
    // You should never modify state directly because it's
    // will not re render the UI
    this.state.count -= 1;
    console.log(this.state.count);
  }

  increment() {
    this.state.count += 1;
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <label>{this.state.count}</label>
        <button onClick={() => this.decrement()}>-</button>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

CounterBadExample.propTypes = {};

export default CounterBadExample;
