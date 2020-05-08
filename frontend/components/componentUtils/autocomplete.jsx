import React from 'react'; 

class autocomplete extends React.Component {
  constructor(props) { 
    super(props) 
    this.state = {
      users: [
        'joey', 
        'nick', 
        'chris', 
        'john', 
        'abby'
      ],
      searchString: ""
    }
    this.updateSearchString = this.updateSearchString.bind(this);
    this.updateMatches = this.updateMatches.bind(this);
  }

  updateSearchString() { 
    this.setState({searchString: event.target.value})
  }

  updateMatches() { 
    if (this.state.searchString.length === 0) return this.state.users; 

    const searchString = new RegExp(`\\b${this.state.searchString}`) 
    const matchedUsers = this.state.users.filter(user => user.match(searchString)); 

    return matchedUsers.length > 0 ?  matchedUsers : ['no matches']
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
              matches.map( user => <li>{user}</li>)
            }
          </ul>
      </div>
    )
  }
} 

export default autocomplete; 