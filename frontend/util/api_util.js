var ApiActions = require('../actions/api_actions.js');
var TermsStore = require('../stores/term');

ApiUtil = {
  newUser: function (user, cb) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'api/users',
      data: {user: user},
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
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
        ApiActions.receiveAllTerms(terms.reverse());
      },
      error: function () {
      }
    });
  },

  fetchSingleTerm: function (id) {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'api/terms/' + id,
      success: function (term) {
        ApiActions.receiveSingleTerm(term);
      },
      error: function () {
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
      },
      error: function () {

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
      },
      error: function () {

      }
    });
  },

  addImage: function (term_id, image, cb) {
    $.ajax({
      type: 'put',
      dataType: 'json',
      processData: false,
      contentType: false,
      url: 'api/terms/' + term_id,
      data: image,
      success: function (term) {
        ApiActions.receiveSingleTerm(term);
      },
      error: function () {

      }
    });
  },

  setLike: function (opinion_id, term_id, user_id, liked, cb) {
    $.ajax({
      type: 'put',
      dataType: 'json',
      url: 'api/opinions/' + opinion_id,
      data: [term_id, user_id, liked],
      success: function (term) {
        ApiActions.receiveSingleTerm(term);
      },
      error: function () {

      }
    });
  }
};

module.exports = ApiUtil;
