import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
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
    return (
      <div className='main-channel-message-input'>
        <form onSubmit={this.handleSubmit}>
          <input className='message-input'
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder='type message here'
          />
          <button className='message-button'>
            <img src={window.Logo} />
          </button>
        </form>
      </div>
    )
  }
}

export default MessageForm; 