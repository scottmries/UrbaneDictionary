var React = require('react');

var HeaderButton = React.createClass({
  render: function () {
    return (<button className="header-button" onClick={this.props.clickCallback}>
      <i className={this.props.klass}></i>
      <span>{this.props.text}</span>
      </button>);
  }
});

module.exports = HeaderButton;
