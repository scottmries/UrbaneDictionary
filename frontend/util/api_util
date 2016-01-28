var ApiActions = require('../actions/api_actions.js');
var TermsStore = require('../stores/term');

ApiUtil = {
  fetchTerms: function () {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'api/terms',
      success: function (terms) {
        ApiActions.receiveAllTerms(terms);
        // console.log("Now those are some nice terms.", terms);
      },
      error: function () {
        // console.log("Whoops a daisy. Fetching terms is broken. :(");
      }
    });
  },

  fetchSingleTerm: function (id) {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'api/terms/' + id,
      success: function (term) {
        // console.log("Here's your single term already: ", term);
        ApiActions.receiveSingleTerm(term);
      },
      error: function () {
        // console.log("Uh ohz, fetching a single term failed.");
      }
    });
  }
};

module.exports = ApiUtil;
