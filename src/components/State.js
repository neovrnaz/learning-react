import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

class CountCounters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      characters: 0
    };
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
      characters: e.target.value.length
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to Count Characters Component</h2>
        <form>
          <label>
            <h3>
              Enter message:{' '}
              <input
                type="text"
                onChange={this.handleMessage}
                autoFocus="autoFocus"
              />
            </h3>
          </label>
          <p>You entered the message: {this.state.message}</p>
          <p>
            That message has: <strong>{this.state.characters}</strong>{' '}
            characters
          </p>
        </form>
      </div>
    );
  }
}

CountCounters.propTypes = {};

export default CountCounters;
