var React = require('react');
var ApiUtil = require('./../util/api_util.js');
var History = require('react-router').History;

var GuestSignIn = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    window.addEventListener('popstate', function(event) {
      console.log("history state event", event);

      // updateContent(event.state);
    });
  },

  submit: function (e) {
    e.preventDefault();
    var newUser = $(e.currentTarget).serializeJSON().user;
    ApiUtil.newUser(newUser, function () {
      this.history.pushState({}, "/");
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
