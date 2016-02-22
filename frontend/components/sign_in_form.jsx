var React = require('react');
var SessionsApiUtil = require('./../util/sessions_api_util');
var History = require('react-router').History;
var Modal = require('./modal');
var GuestSignIn = require('./guest_sign_in');
var FacebookSignIn = require('./facebook_sign_in');
var TwitterSignIn = require('./twitter_sign_in');
var SignUpForm = require('./sign_up_form');
var CurrentUserStore = require('./../stores/current_user_store');

var SignInForm = React.createClass({

  mixins: [History],

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
    if(typeof this.history.state.term !== "undefined"){
      term = this.history.state.term;
      term.user_id = CurrentUserStore.currentUser().id;
      ApiUtil.createTerm(term);
    } else{
      SessionsApiUtil.login(credentials, function () {
        this.history.pushState({}, "/");
      }.bind(this));
    }

  },

  handleSubmittedTerm: function (user) {
    if(typeof this.history.state !== "undefined" && typeof this.history.state.term !== "undefined"){
      term = this.history.state.term;
      term.user_id = CurrentUserStore.currentUser().id;
      ApiUtil.createTerm(term);
    } else {
      ApiUtil.newUser(user, function () {
        this.history.pushState({}, "/");
      }.bind(this));
    }
  },

  signup: function (e) {
    e.preventDefault();

    var user = $(e.currentTarget).serializeJSON().user;
    debugger
    if (CurrentUserStore.hasBeenFetched()){
      this.handleSubmittedTerm(user);
    } else {
      SessionsApiUtil.fetchCurrentUser(this.handleSubmittedTerm(user));
    }

  },

  render: function () {
    return (
      <section className="sign-in-modal">
      <Modal closeButton="show" closeHandler={this.props.closeHandler}>
        <h2>Say, Jim, fancy a sign in?</h2>
        <GuestSignIn submit={this.signup}/>
        <FacebookSignIn />
        <TwitterSignIn />
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
      </section>
    );
  }
});

module.exports = SignInForm;
