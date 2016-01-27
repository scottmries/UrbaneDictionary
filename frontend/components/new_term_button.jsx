var React = require('react');

var NewTermButton = React.createClass({

  handleClick: function (e) {
    e.preventDefault();
    console.log("Wow, look at Clicky over here.");
  },

  render: function () {
    return (
      <button onClick={this.handleClick} >New Term</button>
      );
  }
});

module.exports = NewTermButton;
