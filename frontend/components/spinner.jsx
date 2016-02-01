var React = require('react');
var Logo = require('./logo');

var Spinner = React.createClass({
  render: function () {
    return (
      <div className="spinner">
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </div>
    );
  }
});

module.exports = Spinner;
