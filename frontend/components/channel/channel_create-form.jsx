import React from 'react'; 
import Switch from '../componentUtils/switch';


class ChannelCreateForm extends React.Component { 
  constructor(props) { 
    super(props)

    this.state = {
      name: "", 
      isPrivate: false, 
      creatorId: this.props.currentUserId
    }; 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.toggleChannelType = this.toggleChannelType.bind(this);
    this.preventSubmit = this.preventSubmit.bind(this);
  }

  handleSubmit() { 
    event.preventDefault(); 
    this.props.createChannel(this.state)
    this.props.closeModal();
  }

  preventSubmit() {
    event.preventDefault();
    const notification = document.getElementById('channel-notification');
    notification.style.display = "inline"
    setTimeout(() => notification.style.display = "none", 1000)
  }
  
  updateField(field) { 
    return e => this.setState({[field]: e.target.value})
  }

  toggleChannelType () { 
    this.setState((prevState) => ({isPrivate: !prevState.isPrivate}))
  }
  
  render () { 

    return ( 
      <div className='channel-create-container'>
        <div className='channel-create-header'>
          {
            this.state.isPrivate ? 
            'Create a private channel' 
            : 
            'Create a channel' 
          }
        </div>
        <div className='channel-create-fluff'>
          Channels are where your team communicates. 
          They’re best when organized around a topic — #Titans, for example.
        </div>
        <form 
          className='channel-create-form'
          onSubmit={this.handleSubmit}
          >
          <div className='channel-create-name'>
            <h4>Channel Name</h4>
            <div id="channel-notification">Channels must have a name</div>
            <input 
              type="text"
              className='channel-create-input' 
              placeholder='e.g. plan-herculean-tasks'
              value={this.state.name}
              onChange={this.updateField('name')}
              onInvalid={this.preventSubmit}
              required
            />
          </div>
          <div className='channel-create-type'>
            <div className='channel-create-description'>
              <h4>Make Private</h4>
              <p>
                {
                  this.state.isPrivate ? 
                    'This can’t be undone. A private channel cannot be made public later on.' 
                    : 
                    'By setting a channel to private, it can only be viewed or joined by invitation.'
                }
              </p>
            </div>
            <div className='channel-type-selector'>
              <Switch isPrivate={this.state.isPrivate} toggleChannelType={this.toggleChannelType} />
            </div>
          </div>
          <div className='create-channel-button'>
            <button>Create Channel</button>
          </div>
        </form>
      </div>

    )
  }
}

export default ChannelCreateForm; 