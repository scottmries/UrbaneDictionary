var React = require('react');
import { browserHistory, Link } from "react-router";


const SearchResultsList = React.createClass ( {

  onClick: function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("clicky");
  },

  render: function () {
    var resultsContent = <li>No results</li>;
    if (this.props.results.length > 0){
      resultsContent = this.props.results.map (function (result){
        return (
          <Link to={`/terms/${result.searchable_id}`} onClick={this.props.blurCallback} onFocus={this.props.focusCallback}  key={result.searchable_id}><li>{result.content}</li></Link>
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
