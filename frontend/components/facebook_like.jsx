var React = require('react');

var FacebookLike = React.createClass({

  render: function (){
    var termUrl = "/terms/" + this.props.termId;
    var button = <div className="fb-like-button"><div className="fb-like" data-href={termUrl} data-layout="button" data-action="like" data-show-faces="false"></div></div>;
    return (
        <div></div>
    );
  }
});

module.exports = FacebookLike;
