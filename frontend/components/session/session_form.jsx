import React from 'react'; 
import { Link } from 'react-router-dom';

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
      <div className='session-form-container'>
        <header className='session-header'>
            <Link className='session-logo-link' to='/' >
              <img className='session-logo' src={window.Logo} />
              <div className='session-logo-text'>QuickSilver </div>
            </Link>
        </header>
        <div className='session-form-body' >
          <RenderErrors errors={this.props.errors} /> 
          <form onSubmit={this.handleSubmit} className='session-form'>
            <label>email:
              <input className='session-input'
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
                placeholder="Enter email"
              />
            </label>
            <label>password:
              <input className='session-input'
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
                    <input className='session-input'
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInput("username")}
                      placeholder="Enter a username"
                    />
                  </label>
                  <label>Phone Number:
                    <input className='session-input'
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.handleInput("phoneNumber")}
                      placeholder="Optional"
                    />
                  </label>
                </>    
              }
              <button className='session-button' 
                onClick={this.handleSubmit}>{this.props.formType}
              </button>
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