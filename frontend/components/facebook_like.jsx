var React = require('react');

var FacebookLike = React.createClass({

  render: function (){
    var termUrl = "/terms/" + this.props.termId;
    var button = <div>Spinner</div>;
    if(this.props.hasBeenVisible){
 	      button = <div id="fb-root"><div className="fb-like" data-href={termUrl} data-layout="button" data-action="like" data-show-faces="false"></div></div>

    }
    return (
      <div className="fb-like-button">
          {button}
      </div>
    );
  }
});

module.exports = FacebookLike;
