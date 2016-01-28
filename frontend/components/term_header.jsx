var React = require('react');

var TermHeader = React.createClass({
  render: function () {
    // console.log("this.props", this.props);
    return <strong className="term-header">{this.props.termHeader}</strong>;
    // return <strong>a</strong>;
  }
});

module.exports = TermHeader;
