var React = require('react');

var SearchResultsList = React.createClass ( {

  onClick: function (e) {
    console.log("clicked a search result");
    e.preventDefault();
  },

  render: function () {
    var resultsContent = <li>No results</li>;
    if (this.props.results.length > 0){
      resultsContent = this.props.results.map (function (result){
        var termUrl = "/terms/" + result.searchable_id;
        return (
          <a href={termUrl} onClick={this.onClick} key={result.searchable_id}><li>{result.content}</li></a>
        );
      });
    }
    return (
      <div className="search-results-list">
        {resultsContent}
      </div>
    );
  }
});

module.exports = SearchResultsList;
