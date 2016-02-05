var React = require('react');
var TermStore = require('../stores/term');
var TermListItem = require('./term_list_item');
var SearchResultsStore = require('../stores/search_results_store');

var searchResultFound = false;

var TermList = React.createClass({
  getInitialState: function () {
    return { terms: TermStore.all()};
  },

  componentDidMount: function () {
    this.term_listener = TermStore.addListener(this._onChange);
    this.search_listener = SearchResultsStore.addListener(this._onSearch);
    ApiUtil.fetchTerms();
  },

  componentWillUnmount: function () {
    this.term_listener.remove();
    this.search_listener.remove();
  },

  _onSearch: function () {
    var searchResults = SearchResultsStore.all();
    if (searchResults.length !== 0){
        this.setState({
          terms: searchResults,
          searchText: "Search results:"
        });
        searchResultFound = true;
    } else {
      if (!searchResultFound){
        this.setState({ searchText: "No results. Be sure to type whole words." });
      }
      //if search bar is focused, say there are no results
      //otherwise remove the searchText and maybe hide the div
    }
  },

  _onChange: function () {
    this.setState({ terms: TermStore.all() });
  },

  render: function () {
    return (
      <div className="term-list">
      <div className="search-text">{this.state.searchText}</div>
        {this.state.terms.map (function (term){
          return (
            <TermListItem
            term={term}
            key={term.id}
            user={term.user}
            />
          );
        })
      }
    </div>
  );
  }
});

module.exports = TermList;
