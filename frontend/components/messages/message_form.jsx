import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    debugger
    this.state = { 
      body: "" 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit() {
    event.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder='type message here'
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default MessageForm; 