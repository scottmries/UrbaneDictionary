var React = require('react');
var TermStore = require('../stores/term');
var TermListItem = require('./term_list_item');
var SearchResultsStore = require('../stores/search_results_store');
import ApiUtil from '../util/api_util'

var searchResultFound = false;

var TermList = React.createClass({
  getInitialState: function () {
    return { terms: TermStore.all(), start: 0, end: 10};
  },

  componentDidMount: function () {
    this.term_listener = TermStore.addListener(this._onChange);
    ApiUtil.fetchTerms();
  },

  componentWillUnmount: function () {
    this.term_listener.remove();
  },

  _onChange: function () {
    this.setState({ terms: TermStore.all() });
  },

  render: function () {
    return (
      <div className="term-list">
        {this.state.terms.map (function (term){
          return (
            <TermListItem
            term={term}
            key={term.id}
            user={term.user}
            />
          );
        }
      )
      }
    </div>
  );
  }
});

module.exports = TermList;
