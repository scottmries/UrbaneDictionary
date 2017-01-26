var React = require('react');
var FacebookLike = require('./facebook_like');
var Waypoint = require('react-waypoint');

var TermHeader = React.createClass({
    componentWillMount: function () {
      this.setState({
          hasBeenVisible: false
      });
    },

    enterCallback: function() {
        this.setState({
            hasBeenVisible: true
        });
    },
    // leaveCallback: function() {
    //
    // },
  render: function () {
    return (
      <div className="term-header-container group">
        <Waypoint onEnter={this.enterCallback} onLeave={this.leaveCallback} />
        <strong className="term-header">{this.props.termHeader}</strong>
        <FacebookLike termId={this.props.termId} hasBeenVisible={this.props.hasBeenVisible} />
      </div>
  );}
});

module.exports = TermHeader;
