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
        console.log(data);
        SearchActions.receiveResults(data);
      },
      error: function () {
      }
    });
  }
};

module.exports = SearchApiUtil;
