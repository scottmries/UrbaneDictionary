var ErrorActions = require('../actions/error_actions.js');
var SearchActions = require('../actions/search_actions');

var SearchApiUtil = {

  search: function (query, page) {
    $.ajax({
      url: '/api/search',
      type: 'GET',
      dataType: 'json',
      // processData: false,
      data: {query: query, page: page},
      success: function (data) {
        SearchActions.receiveResults(data);
      },
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  }
};

module.exports = SearchApiUtil;
