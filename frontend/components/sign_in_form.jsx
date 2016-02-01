var React = require('react');
var SessionsApiUtil = require('./../util/sessions_api_util');
var History = require('react-router').History;
var Modal = require('./modal');
var GuestSignIn = require('./guest_sign_in');
var SignUpForm = require('./sign_up_form');
var SignInForm = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { username: "", password: "" };
  },

  handleUsernameChange: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  handlePasswordChange: function (e) {
    this.setState({ password: e.currentTarget.value });
  },

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON().user;
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));

  },

  render: function () {

    return (
      <section className="sign-in">
      <Modal>
        <h2>Say, Jim, fancy a sign in?</h2>
        <GuestSignIn />
          <form action="api/users" method="post" onSubmit={this.submit}>
            <div className="form-inner">
                <label>Username:<br />
                <input type="text" name="user[username]" onChange={this.handleUsernameChange} value={this.state.username} />
              </label><br />
              <label>Password:<br />
                <input type="password" name="user[password]" onChange={this.handlePasswordChange} value={this.state.password} />
              </label>
            </div>
            <input type="submit" value="Sign In" />
          </form>
          <SignUpForm />
          </Modal>
      </section>
    );
  }
});

module.exports = SignInForm;
