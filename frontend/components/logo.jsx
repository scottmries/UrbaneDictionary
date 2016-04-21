var React = require('react');
var History = require('react-router').History;

var Logo = React.createClass({

  mixins: [History],

  clickHandler: function (e) {
    e.preventDefault();
    this.history.push({}, "/");
  },

  render: function () {
    return (
      <a href="/" onClick={this.clickHandler}>
        <div className="logo">
        </div>
      </a>
    );
  }
});

module.exports = Logo;
