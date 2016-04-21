var React = require('react');
import { browserHistory } from "react-router";

const SearchResultsList = React.createClass ( {

  onClick: function (e) {
    console.log(e);
    // this.history.push({}, 'terms/new');
    // e.preventDefault();
  },

  render: function () {
    var resultsContent = <li>No results</li>;
    if (this.props.results.length > 0){
      resultsContent = this.props.results.map (function (result){
        var termUrl = "/terms/" + result.searchable_id;
        return (
          <a href={termUrl} onclick={this.onClick(result.searchable_id)} key={result.searchable_id}><li>{result.content}</li></a>
        );
      }.bind(this));
    }
    return (
      <div className="search-results-list">
        {resultsContent}
      </div>
    );
  }
});

module.exports = SearchResultsList;
