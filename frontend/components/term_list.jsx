var React = require('react');
var TermStore = require('../stores/term');
var TermListItem = require('./term_list_item');

var TermList = React.createClass({
  getInitialState: function () {
    return { terms: TermStore.all()};
  },

  componentDidMount: function () {
    TermStore.addListener(this._onChange);
    ApiUtil.fetchTerms();
  },

  _onChange: function () {
    this.setState({ terms: TermStore.all() });
  },

  render: function () {
    console.log("this.state", this.state);
    return (
      <div className="term-list">
        {this.state.terms.map (function (term){
          return (
            <TermListItem
            term={term}
            key={term.id}
            />
          );
        })
      }
    </div>
  );
  }
});

module.exports = TermList;
