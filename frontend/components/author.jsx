var React = require('react');
var TermStore = require('../stores/term');
var TermListItem = require('./term_list_item');
var TermList = require('./term_list');
var UserApiUtil = require('./../util/user_api_util');
var UserStore = require('./../stores/user_store');

var Author = React.createClass({

    getInitialState: function () {
      var id = this.props.params.id;
      return { user: {username: ""}, terms: []};
      // return null;
    },

    componentDidMount: function () {
      var id = parseInt(this.props.params.id);
      this.user_listener = UserStore.addListener(this._onChange);
      UserApiUtil.fetchUser(id);
    },

    componentWillUnmount: function () {
      this.user_listener.remove();
    },

    _onChange: function () {
      var id = parseInt(this.props.params.id);
      var userTerms = UserStore.getAuthorTerms();
      debugger
      console.log("old state terms:" + this.state);
      this.setState({ user: userTerms.user, terms: userTerms.terms });
      console.log("state terms: " + this.state);
    },

    render: function () {
      // console.log(this.state.terms);
      return (<div className="author-terms">

          {this.state.terms.map (function (term){
            // console.log(term);
            return (<TermListItem
              term={term}
              key={term.id}
              user={this.state.user}
              />
            );
          }.bind(this))
        }
      </div>
      //was div
    );
  }
});

module.exports = Author;
