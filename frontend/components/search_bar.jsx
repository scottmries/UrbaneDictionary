var React = require('react');
var SearchApiUtil = require('./../util/search_api_util');

var SearchBar = React.createClass ({

  getInitialState: function () {
    return {page: 1, query: ""};
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);

    this.setState({page: 1, query: query});
  },

  nextPage: function () {
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);

    this.setState({page: nextPage});
  },

  render: function () {
    return <input type="text" onKeyUp={this.search} placeholder="Type any text here..."></input>;
  }
});

module.exports = SearchBar;
