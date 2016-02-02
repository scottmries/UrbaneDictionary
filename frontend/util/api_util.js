var ApiActions = require('../actions/api_actions.js');
var TermsStore = require('../stores/term');

ApiUtil = {
  newUser: function (user, cb) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'api/users',
      data: {user: user},
      success: function () {
        cb();
      },
      error: function () {
      }
    });
  },

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

  // fetchTermsByUserId: function (id) {
  //   $.ajax({
  //     type: 'get',
  //     dataType: 'json',
  //     url: 'api/terms',
  //     success: function (terms) {
  //       ApiActions.receiveAllTerms(terms);
  //     }
  //   });
  // },

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
  },

  createTerm: function (term) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      // processData: false,
      url: 'api/terms',
      data: {term: term},
      success: function (term) {
        ApiUtil.fetchTerms();
      }
    });
  },

  addVideoURL: function (term, video_url, cb) {
    $.ajax({
      type: 'put',
      dataType: 'json',
      url: 'api/terms/' + term.id,
      data: {term: video_url},
      success: function (term) {
        ApiActions.receiveSingleTerm(term);
      }
    });
  }
};

module.exports = ApiUtil;
