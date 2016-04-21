var React = require('react');
var ApiUtil = require('./../util/api_util.js');
import { browserHistory } from "react-router";

var GuestSignIn = React.createClass({

  componentDidMount: function () {
    window.addEventListener('popstate', function(event) {
    });
  },

  submit: function (e) {
    e.preventDefault();
    var newUser = $(e.currentTarget).serializeJSON().user;
    ApiUtil.newUser(newUser, function () {
      browserHistory.push({}, "/");
    }.bind(this));
  },

  render: function () {
    return (
      <form onSubmit={this.props.submit} >
        <input type="hidden" name="user[username]" value="guest" />
        <input type="hidden" name="user[password]" value="" />
        <input type="submit" value="Guest Sign In" />
      </form>
    );
  }
});

module.exports = GuestSignIn;
