var React = require('react');
import { browserHistory } from "react-router";

var Logo = React.createClass({

  clickHandler: function (e) {
    e.preventDefault();
    browserHistory.push({}, "/");
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
