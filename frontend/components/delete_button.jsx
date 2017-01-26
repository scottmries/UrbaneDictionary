var React = require('react');
var ApiUtil = require('../util/api_util');
import {Link} from 'react-router';

var DeleteButton = React.createClass({

  deleteTerm: function() {
    ApiUtil.deleteTerm(this.props.term.id, this.props.currentUser);
  },

  render: function(){
      var deleteButton = "";
      if (typeof this.props.currentUser !== 'undefined' &&
          typeof this.props.term !== "undefined" &&
          this.props.currentUser === this.props.term.user_id){
        deleteButton = <Link className="delete_button" onClick={this.deleteTerm}>Delete this term.</Link>;
      }
     return (
       <div>
         {deleteButton}
       </div>
     );
  }
});

module.exports = DeleteButton;
