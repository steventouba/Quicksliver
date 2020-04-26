import React from 'react'; 

class SignUp extends React.Component {
  constructor(props) { 
    super(props) 
    this.state = {
      email: "",
      password: "" 
    }; 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleInput(type) { 
    // e will be event 
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) { 
    e.preventDefault(); 
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/')) //will need to redirect to chosen route once deceided on 
  }
  render() { 
    return (
      <div className="session-form" >
        <form onSubmit={this.handleSubmit(e)}>
          <label>email:
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
              placeholder="Enter email"
            />
          </label>
          <label>password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
              placeholder="Enter password"
            />
          </label>
          <button>LogIn</button>
        </form>
      </div>
    )
  }
}

export default SignUp; 