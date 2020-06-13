import React from 'react'; 
import { closeModal } from '../../actions/modal_actions';
import { createChannel } from '../../utils/channel_utils';

class DirectMessageCreate extends React.Component { 
  constructor(props) { 
    super(props)
    const { currentUserId: creatorId, users, }  = this.props;
    this.state = {
      channelInfo: {
        name: { creatorId, }, 
        isPrivate: true, 
        creatorId,
        channelType: 1
      }, 
      users: Object.values(users),
      searchString: "",
    }; 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this); 
    this.handleSelect = this.handleSelect.bind(this); 
    this.handleDelete = this.handleDelete.bind(this); 
  }

  handleSubmit() { 
    if (Object.values(this.state.channelInfo.name).length === 1) return this.preventSubmit(); 
    const { closeModal, createChannel, clearErrors, currentUserId: creatorId } = this.props;
    event.preventDefault(); 

    createChannel(this.state.channelInfo)
    .then(
      () => closeModal(), 
      () => {
        const parent = document.getElementById('display-user-names'); 
        const updateChannelInfo = { ...this.state.channelInfo } 
        updateChannelInfo.name = { creatorId }; 
        $(parent).empty();
        this.setState({ channelInfo: updateChannelInfo }, () => setTimeout(clearErrors, 2200))
      }
    )
  }

  updateMatches() {
    if (this.state.searchString.length === 0) return this.state.users;

    const searchString = new RegExp(`\\b${this.state.searchString}`, 'i')
    const matchedUsers = this.state.users.filter(
      user => user.username.match(searchString));

    return matchedUsers.length > 0 ? matchedUsers : ['no matches']
  }

  updateSearchString() { 
    this.setState({searchString: event.target.value}, this.updateMatches)
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
    child.innerText = `${event.target.innerText} X`;
    child.dataset.user = userId;
    parent.prepend(child)
    const searchBar = document.getElementById("dm-create-user-search-bar")
    this.setState({ channelInfo: updateChannelInfo, searchString: "" })
  }

  handleDelete() { 
    if (event.target.nodeName === "SPAN") { 
      const child = event.target; 
      const updateChannelInfo = { ...this.state.channelInfo }
      const { name } = updateChannelInfo;
      const userId = event.target.dataset.user; 
      delete name[userId]
      updateChannelInfo.name = name; 

      child.parentNode.removeChild(child)
      this.setState({ channelInfo: updateChannelInfo })
    } else { 
      return null; 
    }
  }

  preventSubmit() {
    event.preventDefault();
    const notification = document.getElementById('dm-notification');
    notification.style.display = "inline"
    setTimeout(() => notification.style.display = "none", 1200)
  }

  render() {
    const matches = this.updateMatches(); 
    const errors = this.props.errors.channels;

    return (
      <div className="channel-create-container">
        <header className="channel-create-header">Direct Messages</header>
        <div className="direct-message-create-form ">
          <div id="dm-notification">You need friends to chat!</div>
          {
            !$.isEmptyObject(errors) 
            && errors.map((error, idx) => <div className="channel-errors" key={idx}>{error}</div>)
          }
          <div id="channel-input">
            <div id='display-user-names' onClick={this.handleDelete} required></div>
            <input id='dm-create-user-search-bar' 
              className="direct-message-create-input"
              onChange={this.updateSearchString}
              value={this.state.searchString}
              type="text"
              placeholder="Find or start a conversation"
            />
          </div>
          <button onClick={this.handleSubmit} className="direct-message-create-button">Go</button>
        </div>
        <ul  onClick={this.handleSelect} className="matched-users">
          {
            matches.map(user => <span data-user={user.id}
              key={user.id}>{user.username}</span>)
          }
        </ul>
      </div>
    )
  }
}

export default DirectMessageCreate; 