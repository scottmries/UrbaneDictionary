var React = require('react');

var SignInForm = React.createClass({

  submit: function (e) {
    e.preventDefault();

    var credentials = e.currentTarger.serializeJSON();
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));

  },

  render: function () {

    return (
      <section className="sign-in">
        <h2>Say, Jim, fancy a sign in?</h2>
          <form action="api/users" method="post" onSubmit={this.submit}>
            <label>Username:
              <input type="text" name="user[username]" value="" />
            </label>
            <label>Password:
              <input type="password" name="user[password]" value="" />
            </label>
            <input type="submit" value="Sign In" />
          </form>
      </section>
    );
  }
});

module.exports = SignInForm;
