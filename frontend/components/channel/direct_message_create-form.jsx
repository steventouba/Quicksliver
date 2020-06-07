import React from 'react'; 

class DirectMessageCreate extends React.Component { 
  constructor(props) { 
    super(props)

    this.state = {
      channelInfo: {
        name: {}, 
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
    this.handleDelete = this.handleDelete.bind(this); 
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
    // debugger
    // return e => this.setState([channelInfo[name]].push(e.target.value))
  }

  handleSelect() {
    const updateChannelInfo = { ...this.state.channelInfo }
    const { name } = updateChannelInfo;  
    const userId = event.target.dataset.user; 
    if (name[userId]) return null;  
    
    name[userId] = userId; 
    updateChannelInfo.name = name; 
    const parent = document.getElementById("display-user-names")
    const child = document.createElement("span")
    child.setAttribute("class", "dm-display-name")
    child.innerText = event.target.innerText;
    child.dataset.user = userId;
    parent.prepend(child)
    const searchBar = document.getElementById("dm-create-user-search-bar")
    this.setState({ channelInfo: updateChannelInfo, searchString: "" })
  }

  handleDelete() { 
    debugger
  }

  render() {
    const matches = this.updateMatches(); 
    return (
      <div className="channel-create-container">
        <header className="channel-create-header">Direct Messages</header>
        <div className="direct-message-create-form ">
          <div id="channel-input">
            <div id='display-user-names' onClick={this.handleDelete}></div>
            <input id='dm-create-user-search-bar' 
              className="direct-message-create-input"
              onChange={this.updateSearchString}
              value={this.state.searchString}
              type="text"
              placeholder="Find or start a conversation"
            />
          </div>
          <button className="direct-message-create-button">Go</button>
        </div>
        <ul className="matched-users">
          {
            matches.map(user => <span data-user={user.id}
              key={user.id} onClick={this.handleSelect}>{user.username}</span>)
          }
        </ul>
      </div>
    )
  }
}

export default DirectMessageCreate; 