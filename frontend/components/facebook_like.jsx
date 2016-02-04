var React = require('react');

var FacebookLike = React.createClass({

  render: function (){
    var termUrl = "/terms/" + this.props.termId;
    return (
      <div className="fb-like-button">
      	<div id="fb-root"></div>
      	<div className="fb-like" data-href={termUrl} data-layout="button" data-action="like" data-show-faces="false">
      	</div>
      </div>
    );
  }
});

module.exports = FacebookLike;
