var React = require('react');
var Modal = require('./modal');
var ApiUtil = require('./../util/api_util');
var SessionsApiUtil = require('./../util/sessions_api_util');
var History = require('react-router').History;

var SignUpForm = React.createClass({

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
    var user = $(e.currentTarget).serializeJSON().user;
    // SessionsApiUtil.login(credentials, function () {
    //   this.history.pushState({}, "/");
    // }.bind(this));
    ApiUtil.newUser(user, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function () {
    return (
      <form onSubmit={this.submit} className="sign-up">
        <div className="form-inner">
            <label>Username:<br />
            <input type="text" name="user[username]" onChange={this.handleUsernameChange} value={this.state.username} />
          </label>
          <br />
          <label>Password:<br />
            <input type="password" name="user[password]" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>
        </div>
        <input type="submit" value="Sign Up" className="sign-up-button"/>
      </form>
    );
  }
});

module.exports = SignUpForm;
