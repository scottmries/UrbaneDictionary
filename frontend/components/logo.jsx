var React = require('react');
import { browserHistory, Link } from "react-router";

var Logo = React.createClass({

  clickHandler: function (e) {
  },

  render: function () {
    return (
      <Link to="/" >
        <div className="logo">
        </div>
    </Link>
    );
  }
});

module.exports = Logo;
