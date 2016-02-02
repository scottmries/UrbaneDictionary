var React = require('react');

var Logo = React.createClass({

  render: function () {
    return (
      <a href="/">
        <div className="logo">
          <h1>Urbane Dictionary</h1>
        </div>
      </a>
    );
  }
});

module.exports = Logo;
