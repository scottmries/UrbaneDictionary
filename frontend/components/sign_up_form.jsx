var React = require('react');

var SignUpForm = React.createClass({
  render: function () {
    return (
      <form action="api/users/new" method="post">
        <div className="form-inner">
            <label>Username:
            <input type="text" name="user[username]" value="" />
          </label>
          <label>Password:
            <input type="password" name="user[password]" value="" />
          </label>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
});
