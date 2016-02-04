var React = require('react');
var FacebookLike = require('./facebook_like');

var TermHeader = React.createClass({
  render: function () {
    return (
      <div className="term-header-container group">
        <strong className="term-header">{this.props.termHeader}</strong>
        <FacebookLike termId={this.props.termId} />
      </div>
  );}
});

module.exports = TermHeader;
