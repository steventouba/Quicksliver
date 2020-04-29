import React from 'react'; 

class Sidenav extends React.Component { 
  constructor(props) { 
    super(props)

    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(e) { 
    e.preventDefault; 
    this.props.logOut(); 
  }

  render() { 
    return ( 
      <div className='main-channel-sidenav'>
        <div className='sidebar-header'>
          <button onClick={this.handleClick}>Logout</button>
        </div>
        <p>Sidebar will go here</p>
      </div>
    )
  }

}


export default Sidenav; 