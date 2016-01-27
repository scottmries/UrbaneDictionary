var AppDispatcher = require('../dispatcher/dispatcher');
var TermConstants = require('../constants/term_constants');

ApiActions = {
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
    })
  }
};

module.exports = ApiActions;
