var AppDispatcher = require('../dispatcher/dispatcher');
var TermConstants = require('../constants/term_constants');

ApiActions = {
  receiveAllTerms: function(terms) {
    AppDispatcher.dispatch({
      actionType: TermConstants.TERMS_RECEIVED,
      terms: terms
    });
  }
};

module.exports = ApiActions;
