var ApiActions = require('../actions/api_actions.js');
var ErrorActions = require('../actions/error_actions.js');
var TermsStore = require('../stores/term');

const ApiUtil = {
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
      error: function (error) {
        ErrorActions.receiveErrors(error);
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
      error: function (error) {
        ErrorActions.receiveErrors(error);
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
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  },

  fetchTermsByAuthor: function( user_id) {
    $.ajax({
      type: 'get',
      dataType: 'json',
      url: 'api/',
    })
  },

  createTerm: function (term) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'api/terms',
      data: {term: term},
      success: function (term) {
        ApiUtil.fetchTerms();
      },
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  },

  deleteTerm: function (id) {
    $.ajax({
      type: 'delete',
      dataType: 'json',
      url: 'api/terms/' + id,
      success: function (term) {
        ApiUtil.fetchTerms();
      },
      error: function (error) {
        console.log(error);
         ErrorActions.receiveErrors(error);
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
      error: function (error) {
        ErrorActions.receiveErrors(error);
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
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  },

  setLike: function (term_id, user_id, liked, cb) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'api/opine',
      data: {opinion: {term_id: term_id, user_id: user_id, liked: liked}},
      success: function (term) {
        ApiActions.updateTerm(term);
      },
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  }
};

module.exports = ApiUtil;
