var React = require('react');

var FacebookLike = React.createClass({

  render: function (){
    var termUrl = "/terms/" + self.props.term_id;
    return (
      <div className="fb-like-button">
    	<div id="fb-root"></div>
    	<div class="fb-like"
    		data-href={termUrl}
    		data-layout="standard"
    		data-action="like"
    		data-show-faces="false">
    	</div>
      </div>
    );
  }
});

module.export = FacebookLike;
