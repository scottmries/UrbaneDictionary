var React = require('react');

var SignInForm = React.createClass({


  render: function () {

    return (
      <div className="sign-in">
        <h2>Say, Jim, fancy a sign in?</h2>
        <form action="api/users" method="post">
          <input type="hidden" name="user[username]" value="guest" />
          <input type="hidden" name="user[password]" value="" />
          <input type="submit" value="Guest Sign In" />
        </form>
      </div>
    );
  }
});

module.exports = SignInForm;
