import React from 'react'; 

class DirectMessageCreate extends React.Component { 
  constructor(props) { 
    super(props)

    this.state = {
      channelInfo: {
        name: [], 
        isPrivate: true, 
        creatorId: this.props.currentUserId, 
        channelType: 1
      }, 
      users: Object.values(this.props.users),
      searchString: "",
    }; 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this); 
    this.handleSelect = this.handleSelect.bind(this); 
  }

  handleSubmit() { 
    event.preventDefault(); 
    this.props.createChannel(this.state)
    this.props.closeModal();
  }

  updateMatches() {
    if (this.state.searchString.length === 0) return this.state.users;

    const searchString = new RegExp(`\\b${this.state.searchString}`)
    const matchedUsers = this.state.users.filter(
      user => user.username.match(searchString));

    return matchedUsers.length > 0 ? matchedUsers : ['no matches']
  }

  updateSearchString() { 
    this.setState({searchString: event.target.value}, this.updateMatches)
  }

  updateChannelName() { 
    return e => this.setState([channelInfo[name]].push(e.target.value))
  }

  handleSelect() {
    // const parent = document.getElementById("test")
    // const child = document.createElement("span")
    // const childText = document.createTextNode(event.target.innerText)
    // child.appendChild(childText); 
    
    debugger
    parent.prepend(child)
  }

  render() {
    const matches = this.updateMatches(); 
    return (
      <div className="channel-create-container">
        <header className="channel-create-header">Direct Messages</header>
        <div className="direct-message-create-form ">
          <div id="channel-input">
            <div id='test'></div>
            <input   
              className="direct-message-create-input"
              onChange={this.updateSearchString}
              type="text"
              placeholder="Find or start a conversation"
            />
          </div>
          <button className="direct-message-create-button">Go</button>
        </div>
        <ul className="matched-users">
          {
            matches.map(user => <span 
              key={user.id}onClick={this.handleSelect}>{user.username}</span>)
          }
        </ul>
      </div>
    )
  }
}

export default DirectMessageCreate; 