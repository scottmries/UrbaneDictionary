var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TermConstants = require('../constants/term_constants');

var _terms = [];

var TermStore = new Store(AppDispatcher);

TermStore.all = function() {
  return _terms.slice(0);
};

var reset = function (terms) {
  _terms = terms;
};

TermStore.__onDispatch = function (payload) {
  console.log(payload);
  switch(payload.actionType) {
    case TermConstants.TERMS_RECEIVED:
      reset(payload.terms);
      TermStore.__emitChange();
      break;
  }
};

module.exports = TermStore;
