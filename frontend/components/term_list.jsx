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
    debugger
    return (
      <div className="term-list">
        {this.state.terms.map (function (term){
          return (
            <TermListItem
            id={term.id}
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
