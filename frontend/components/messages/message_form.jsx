import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    debugger
    this.state = { 
      body: "" 
      // channelId: props.currentChannel, 
      // userId: props.currentUser.id 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit() {
    event.preventDefault();
    let message = { 
      channelId: this.props.currentChannel, 
      body: this.state.body, 
      userId: this.props.currentUser.id
    }
    App.cable.subscriptions.subscriptions[0].speak({ message: message});
    this.setState({ body: "" });
  }

  render() {
    debugger
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