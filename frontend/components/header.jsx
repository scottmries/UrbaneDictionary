var React = require('react');
var SignInButton = require('./sign_in_button');
var NewTermButton = require('./new_term_button');
var CurrentUserStore = require('./../stores/current_user_store');
var SessionsApiUtil = require('./../util/sessions_api_util');
var Logo = require('./logo');

var Header = React.createClass({

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  logout: function () {
    SessionsApiUtil.logout();
  },

  render: function () {
    var logInStatus;
    if (CurrentUserStore.isLoggedIn()) { // if we're logged in....
      logInStatus =  (
        <div className="logInStatus">
          Logged in as { this.state.currentUser.username }
          <button onClick={ this.logout }>LOG OUT</button>
        </div>
      );
    } else {
      logInStatus = (
        <div className="logInStatus">
          <a href="#/login">Login</a>
        </div>
      );
    }
    return (

      <header className="group">
        <div className="header-inner">
          <Logo />
          <h2>Colloquialisms for the City-Dwelling Sophisticate</h2>
          {logInStatus}
          <nav className="subnav">
            <SignInButton clickCallback={this.props.openSignInModal} text="" />
            <NewTermButton clickCallback={this.props.openNewTermModal} text="" />
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
