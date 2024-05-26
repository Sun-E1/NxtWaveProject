import {Component} from 'react'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username.length >= 1 && password.length >= 1) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    this.setState({showError: false})
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({
      showError: true,
    })
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {showError} = this.state
    return (
      <div className="login-page-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
            alt="NxtWave"
            className="logo-image"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>

          <button type="submit" className="login-button">
            Login
          </button>
          {showError && (
            <p className="error-message">*Enter Valid Username and Password</p>
          )}
        </form>
      </div>
    )
  }
}

export default LoginPage
