var React = require('react');

var TermHeader = React.createClass({
  render: function () {
    return <strong className="term-header">{this.props.termHeader}</strong>;
  }
});

module.exports = TermHeader;
