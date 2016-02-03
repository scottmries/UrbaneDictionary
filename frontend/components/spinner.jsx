var React = require('react');
var Logo = require('./logo');

var Spinner = React.createClass({
  render: function () {
    return (
      <div className="group form-inner">
        <div className="spinner">
          <h1>Urbane Dictionary</h1><br />
        </div>
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </div>
    );
  }
});

module.exports = Spinner;
