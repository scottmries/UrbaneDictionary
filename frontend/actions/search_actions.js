var React = require('react');
var SearchConstants = require('./../constants/search_constants');
var AppDispatcher = require('./../dispatcher/dispatcher');

SearchApiUtil = {
  receiveResults: function(data) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.RECEIVE_RESULTS,
      searchResults: data.results,
      meta: {totalCount: data.total_count}
    });
  }
};

module.exports = SearchApiUtil;
