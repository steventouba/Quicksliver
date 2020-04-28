import React from 'react'; 
import { NavLink } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.form; 

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    // e will be event 
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  render() {
    
    return (
      <div>
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
          </nav>
        </header>
        <div className="session-form" >
          <RenderErrors errors={this.props.errors} /> 
          <form onSubmit={this.handleSubmit}>
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
            {
              this.props.formType === 'signup' &&
                <>
                  <label>Username:
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInput("username")}
                      placeholder="Enter a username"
                    />
                  </label>
                  <label>Phone Number:
                    <input
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.handleInput("phoneNumber")}
                      placeholder="Optional"
                    />
                  </label>
                </>    
              }
              <button onClick={this.handleSubmit}>{this.props.formType}</button>
          </form>
        </div>
      </div>
    )
  }
}

const RenderErrors = ({errors}) => { 
  let flag = null; 
  if (errors.length > 0) {
    flag = <ul>
      {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    </ul>
  } 

  return (
    flag
  )
}

export default SessionForm; 