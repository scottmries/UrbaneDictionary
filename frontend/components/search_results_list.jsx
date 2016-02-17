var React = require('react');

var SearchResultsList = React.createClass ( {
  render: function () {
    var resultsContent = <li>No results</li>;
    if (this.props.results.length > 0){
      resultsContent = this.props.results.map (function (result){
        var termUrl = "/terms/" + result.id;
        return (
          <a href={termUrl}><li>{result.term}</li></a>
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
