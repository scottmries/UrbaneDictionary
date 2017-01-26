var React = require('react');
var ApiUtil = require('../util/api_util');
import {Link} from 'react-router';

var DeleteButton = React.createClass({

  deleteTerm: function() {
    ApiUtil.deleteTerm(this.props.term.id, this.props.currentUser.user.user.id);
  },

  render: function(){
     return (
       <div>
         <Link className="delete_button" onClick={this.deleteTerm}>Delete this term.</Link>
       </div>
     );
  }
});

module.exports = DeleteButton;
