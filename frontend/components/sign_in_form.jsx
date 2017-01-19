var React = require('react');
var SessionsApiUtil = require('./../util/sessions_api_util');
var ApiUtil = require('./../util/api_util');
var Modal = require('./modal');
var GuestSignIn = require('./guest_sign_in');
var FacebookSignIn = require('./facebook_sign_in');
var TwitterSignIn = require('./twitter_sign_in');
var SignUpForm = require('./sign_up_form');
var CurrentUserStore = require('./../stores/current_user_store');
import { browserHistory } from "react-router";

var SignInForm = React.createClass({

  getInitialState: function () {
    return { signInUsername: "", signUpUsername: "", signInPassword: "", signUpPassword: "" };
  },

  handleSignInUsernameChange: function (e) {
    this.setState({ signInUsername: e.currentTarget.value });
  },

  handleSignUpUsernameChange: function (e) {
    this.setState({ signUpUsername: e.currentTarget.value });
  },

  handleSignInPasswordChange: function (e) {
    this.setState({ signInPassword: e.currentTarget.value });
  },

  handleSignUpPasswordChange: function (e) {
    this.setState({ signUpPassword: e.currentTarget.value });
  },

  signin: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON().user;
    if(typeof browserHistory.state !== "undefined" &&
      typeof browserHistory.state.term !== "undefined"){
      term = browserHistory.state.term;
      term.user_id = CurrentUserStore.currentUser().id;
      ApiUtil.createTerm(term);
    } else{
      SessionsApiUtil.login(credentials, function () {
        browserHistory.push({}, "/");
      }.bind(this));
    }

  },

  handleSubmittedTerm: function (user) {
    if(typeof browserHistory.state !== "undefined" &&
      typeof browserHistory.state.term !== "undefined"){
      term = browserHistory.state.term;
      term.user_id = CurrentUserStore.currentUser().id;
      ApiUtil.createTerm(term);
    } else {
      ApiUtil.newUser(user, function () {
        browserHistory.push({}, "/");
      }.bind(this));
    }
  },

  signup: function (e) {
    e.preventDefault();

    var user = $(e.currentTarget).serializeJSON().user;
    if (CurrentUserStore.hasBeenFetched()){
      this.handleSubmittedTerm(user);
    } else {
      SessionsApiUtil.fetchCurrentUser(this.handleSubmittedTerm(user));
    }

  },

  render: function () {
    return (
      <section className="sign-in-modal">
        <div className="form-inner">

                  <Modal closeButton="show" closeHandler={this.props.closeHandler}>
                    <h2>Say, Jim, fancy a sign in?</h2>
                    <div className="single-click-logins">
                      <GuestSignIn submit={this.signup}/>
                      <FacebookSignIn />
                      <TwitterSignIn />
                    </div>
                    <form onSubmit={this.signin} className="sign-in">
                      <div className="form-inner">
                        <label>Username:<br />
                        <input type="text" name="user[username]" onChange={this.handleSignInUsernameChange} value={this.state.username} />
                      </label><br />
                      <label>Password:<br />
                      <input type="password" name="user[password]" onChange={this.handleSignInPasswordChange} value={this.state.password} />
                    </label>
                  </div>
                  <input type="submit" value="Sign In" className="sign-in-button"/>
                </form>
                <form onSubmit={this.signup} className="sign-up">
                  <div className="form-inner">
                    <label>Username:<br />
                    <input type="text" name="user[username]" onChange={this.handleSignUpUsernameChange} value={this.state.username} />
                  </label>
                  <br />
                  <label>Password:<br />
                  <input type="password" name="user[password]" onChange={this.handleSignUpPasswordChange} value={this.state.password} />
                </label>
              </div>
              <input type="submit" value="Sign Up" className="sign-up-button"/>
            </form>
          </Modal>
        </div>
      </section>
    );
  }
});

module.exports = SignInForm;
