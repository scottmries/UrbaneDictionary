var React = require('react');

var SignInButton = React.createClass({
  render: function () {
    return (<button className="signIn" onClick={this.props.clickCallback}>
      <i className="fa fa-user"></i>
      <span>{this.props.text}</span>
      </button>);
  }
});

module.exports = SignInButton;
