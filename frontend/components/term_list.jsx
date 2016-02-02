var React = require('react');
var TermStore = require('../stores/term');
var TermListItem = require('./term_list_item');
var SearchResultsStore = require('../stores/search_results_store');

var TermList = React.createClass({
  getInitialState: function () {
    return { terms: TermStore.all()};
  },

  componentDidMount: function () {
    TermStore.addListener(this._onChange);
    SearchResultsStore.addListener(this._onSearch);
    ApiUtil.fetchTerms();
  },

  componentWillUnmount: function () {
    // TermStore.removeListener(this._onChange);
    // SearchResultsStore.removeListener(this._onSearch);
  },

  _onSearch: function () {
    var searchResults = SearchResultsStore.all();
    if (searchResults.length !== 0){
      this.setState({ terms: searchResults });
    } else {

    }
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
            />
          );
        })
      }
    </div>
  );
  }
});

module.exports = TermList;
