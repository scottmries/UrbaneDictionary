var React = require('react');

var NewTermForm = React.createClass({
  handleClick: function () {
    console.log("clicked new term");
  },

  render: function () {
    return <button className="newTerm">
      <i className="fa fa-plus plus" onClick={this.handleClick}></i>
      <span>{this.props.text}</span>
      </button>;
  }
});

module.exports = NewTermForm;
