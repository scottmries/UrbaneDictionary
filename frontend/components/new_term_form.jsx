var React = require('react');
var CurrentUserStore = require('./../stores/current_user_store');
var ApiUtil = require('./../util/api_util');
var SessionsApiUtil = require('./../util/sessions_api_util');
var Header = require('./header');
import { browserHistory } from "react-router";

const NewTermForm = React.createClass({

  getInitialState: function () {
    return ( {
    term: "",
    definition: "",
    usage: "",
    currentUser: CurrentUserStore.currentUser()
  } );
  },

  componentDidMount: function () {
    this.userlistener = CurrentUserStore.addListener(this._onChange);
    // SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.userlistener.remove();
  },

  _onChange: function () {
    if (CurrentUserStore.isLoggedIn()){
      this.setState( { currentUser: CurrentUserStore.currentUser() } );
    }
  },

  handleDefinitionChange: function (e) {
    this.setState( {definition: e.currentTarget.value });
  },

  handleTermChange: function (e) {
    this.setState( {term: e.currentTarget.value });
  },

  handleUsageChange: function (e) {
    this.setState( {usage: e.currentTarget.value });
  },

  currentUser: function () {
    return CurrentUserStore.currentUser();
  },

  parseTerm(e) {
      return $(e.currentTarget).serializeJSON();
  },

  signedIn: function() {
      return !!this.state.currentUser.user.id;
  },

  redirectToLogin: function (e) {
      e.preventDefault();
      var term = this.parseTerm(e);
      this.props.setUnsubmittedTerm(term);
      this.props.closeNewTermModal();
      this.props.openSignInModal();
  },

  submitTerm: function (e) {
    e.preventDefault();
    var term = this.parseTerm(e);
    term.user_id = this.state.currentUser.user.id;

    ApiUtil.createTerm(term);
  },

  render: function () {
      let submitCallback = null;
      if(this.signedIn()){
          submitCallback = this.submitTerm;
      } else {
          submitCallback = this.redirectToLogin;
      }
    return (<section className="newTermForm">
      <form onSubmit={submitCallback}>
        <div className="form-inner">
          <h2>New Term</h2>
            <label>Term
            <input type="text"
                onChange={this.handleTermChange}
                name="term">
            </input>
          </label>
          <label>Definition
            <input
                type="textarea"
                onChange={this.handleDefinitionChange}
                name="definition">
            </input>
          </label>
          <label>Usage
            <input type="textarea"
                onChange={this.handleUsageChange}
                name="usage">
            </input>
          </label>
        </div>
        <button>Submit</button>
      </form>
      </section>
    );
  }
});

module.exports = NewTermForm;
