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
  switch(payload.actionType) {
    case TermConstants.TERMS_RECEIVED:
      reset(payload.terms);
      TermStore.__emitChange();
      break;
  }
};

TermStore.find_by_id = function(id) {
  return _terms[id - 1];
};

module.exports = TermStore;
