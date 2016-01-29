var React = require('react');

var NewTermButton = React.createClass({
  render: function () {
    return (<button className="newTerm" onClick={this.props.clickCallback}>
      <i className="fa fa-plus plus"></i>
      <span>{this.props.text}</span>
      </button>);
  }
});

module.exports = NewTermButton;
