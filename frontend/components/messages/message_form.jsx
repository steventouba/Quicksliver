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
    this.preventSubmit = this.preventSubmit.bind(this)
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

  preventSubmit() { 
    event.preventDefault(); 
    const notification = document.getElementById('message-notification'); 
    notification.style.display = "block"
    setTimeout(() => notification.style.display="none", 2000)
  }

  render() {
    return (
      <div className='main-channel-message-input'>
        <form className='message-input-background' onSubmit={this.handleSubmit}>
          <div id="message-notification">Message body must contain content</div>
          <input className='message-input'
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder='type message here'
            onInvalid={this.preventSubmit}
            required
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