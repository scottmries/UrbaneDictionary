var React = require('react');
var ApiUtil = require('./../util/api_util.js');
var History = require('react-router').History;

var GuestSignIn = React.createClass({
  mixins: [History],
  
  submit: function (e) {
    e.preventDefault();
    var user = $(e.currentTarget).serializeJSON().user;
    ApiUtil.newUser(user, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function () {
    return (
      <form onSubmit={this.submit} >
        <input type="hidden" name="user[username]" value="guest" />
        <input type="hidden" name="user[password]" value="" />
        <input type="submit" value="Guest Sign In" />
      </form>
    );
  }
});

module.exports = GuestSignIn;
