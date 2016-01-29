var React = require('react');

var GuestSignIn = React.createClass({

  render: function () {
    return (
      <form action="api/users" method="post">
        <input type="hidden" name="user[username]" value="guest" />
        <input type="hidden" name="user[password]" value="" />
        <input type="submit" value="Guest Sign In" />
      </form>
    );
  }
});

module.exports = GuestSignIn;
