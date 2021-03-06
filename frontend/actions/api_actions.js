var AppDispatcher = require('../dispatcher/dispatcher');
var TermConstants = require('../constants/term_constants');

const ApiActions = {
  receiveAllTerms: function(terms) {
    AppDispatcher.dispatch({
      actionType: TermConstants.TERMS_RECEIVED,
      terms: terms
    });
  },

  receiveSingleTerm: function(term) {
    AppDispatcher.dispatch({
      actionType: TermConstants.TERM_RECEIVED,
      term: term
    });
  },

  receiveTermsByAuthor: function(terms) {
    AppDispatcher.dispatch({
      actionType: TermConstants.AUTHOR_TERMS_RECEIVED,
      terms: terms
    });
  },

  updateTerm: function (term) {
    AppDispatcher.dispatch({
      actionType: TermConstants.UPDATE_TERM,
      term: term
    });
  }
};

module.exports = ApiActions;
