import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.form; 

    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitDemoUser = this.submitDemoUser.bind(this); 
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

  submitDemoUser(e) { 
    e.preventDefault()
    this.setState({ 
      username: 'Hades',
      password: '123456',
      email: 'Hades@hades.com',
      phoneNumber: '863 - 379 - 6753',
    }, () => setTimeout(this.props.demoLogIn, 300))
    
    // this.props.demoLogIn()
  }

  render() {
    const { formType } = this.props; 
    return (
      <div className='session-form-container'>
        <header className='session-header'>
            <Link className='session-logo-link' to='/' >
              <img className='session-logo' src={window.Logo} />
              <div className='session-logo-text'>QuickSilver </div>
            </Link>
        </header>
        <div className='session-form-body' >
          <form onSubmit={this.handleSubmit} className='session-form'>
            <RenderErrors errors={this.props.errors} clearErrors={this.props.clearErrors}/> 
            <h3>Log into Mount Olympus</h3>
            <p>mount-olympus.quicksilver.com</p>
            <p>Enter your <b>email address</b> and <b>password</b>.</p>
            <label>
              <input className='session-input'
                type="email"
                value={this.state.email}
                onChange={this.handleInput("email")}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
            <label>
              <input className='session-input'
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                placeholder="password"
                autoComplete="current-password"
              />
            </label>
            {
              formType === 'signup' &&
                <>
                  <label>
                    <input className='session-input'
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInput("username")}
                      placeholder="username"
                      autoComplete="username"
                    />
                  </label>
                  <label>
                    <input className='session-input'
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.handleInput("phoneNumber")}
                      placeholder="phone number optional"
                      autoComplete="tel-national"
                    />
                  </label>
                </>    
              }
              <div className="session-buttons">
                <button className='session-button' 
                  onClick={this.handleSubmit}>{formType}
                </button>
                <button className='demo-user' onClick={this.submitDemoUser}>DemoUser</button>
              </div>
          </form>
          { formType === "signup" ? 
           <p className="session-link">already have an account? <Link to="/login">Login</Link></p> 
            : <p className="session-link">New to QuickSilver? <Link to="/signup">Signup</Link></p>
          } 
        </div>
        <div className='splash-footer'>
          <a href='https://www.linkedin.com/in/steven-touba-262197bb/' target='_blank'><i className='fab fa-linkedin'></i></a>
          <a href='https://github.com/steventouba' target='_blank'><i className='fab fa-github-square'></i></a>
        </div>
      </div>
    )
  }
}

const RenderErrors = ({errors, clearErrors}) => { 
  let flag = null; 
  if (errors.length > 0) {
    flag = <ul>
      {errors.map((error, idx) => <li className="session-errors" key={idx}>{error}</li>)}
    </ul>
  } 

  useEffect(() => {
    return () => { clearErrors()}
  }, [])

  return (
    flag
  )
}

export default SessionForm; 