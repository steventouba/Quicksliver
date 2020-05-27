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

  render() {
    const matches = this.updateMatches(); 
    return (
      <div>
        <header>Direct Messages</header>
        <div>
          <input
            onChange={this.updateSearchString}
            type="text"
            placeholder="Find or start a conversation"
          />
          <button>Go</button>
        </div>
        <ul>
          {
            matches.map(user => <li key={user.id}>{user.username}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default DirectMessageCreate; 