var React = require('react');
var CurrentUserStore = require('./../stores/current_user_store');
var ApiUtil = require('./../util/api_util');

var NewTermForm = React.createClass({

  getInitialState: function () {
    return ( {
    term: "",
    definition: "",
    usage: ""
  } );
  },

  handleClick: function () {
    
  },

  handleDefinitionChange: function () {
    this.setState( {definition: e.currentTarget.value });
  },

  handleTermChange: function () {
    this.setState( {term: e.currentTarget.value });
  },

  handleUsageChange: function () {
    this.setState( {usage: e.currentTarget.value });
  },

  currentUser: function () {
    return CurrentUserStore.currentUser();
  },

  submit: function (e) {
    e.preventDefault();
    var term = $(e.currentTarget).serializeJSON();
    term.user_id = this.currentUser().id;
    ApiUtil.createTerm(term);
  },

  render: function () {
    return (<section className="newTermForm">
      <h2>New Term</h2>
      <form onSubmit={this.submit}>
        <div className="form-inner">
            <label>Term
            <input type="text" onChange={this.handleTermChange} name="term"></input>
          </label>
          <label>Definition
            <input type="textarea" onChange={this.handleDefinitionChange} name="definition"></input>
          </label>
          <label>Usage
            <input type="textarea" onChange={this.handleUsageChange} name="usage"></input>
          </label>
        </div>
        <button>Submit</button>
      </form>
      </section>
    );
  }
});

module.exports = NewTermForm;
