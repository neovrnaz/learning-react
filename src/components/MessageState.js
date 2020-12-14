import React, {Component} from 'react';

class MessageState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "A message",
    };
  }

  changeMessage = () => {
    this.setState({
      message: "This message has changed",
    });
  }

  render() {
    return (
      <div>
        <label>{this.state.message} </label>
        <button onClick={() => this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

MessageState.propTypes = {};

export default MessageState;
