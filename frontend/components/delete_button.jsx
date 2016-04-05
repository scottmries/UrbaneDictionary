var React = require('react');
var ApiUtil = require('../util/api_util');

var DeleteButton = React.createClass({

  deleteTerm: function() {
    ApiUtil.deleteTerm(this.props.term.id, this.props.currentUser.user.user.id);
  },

  render: function(){
    var deleteButton = "";
    if (typeof this.props.currentUser !== 'undefined' && this.props.currentUser.user.user.id === this.props.term.user.id){
      return (
        <div>
          <a className="delete_button" onClick={this.deleteTerm}>Delete this term.</a>
        </div>
      );
    } else {
      return <div></div>
    }
  }
});

module.exports = DeleteButton;
