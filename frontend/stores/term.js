var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TermConstants = require('../constants/term_constants');

var _terms = [];

var section = 0;

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
    case TermConstants.TERM_RECEIVED:
      reset([payload.term]);
      TermStore.__emitChange();
      break;
    case TermConstants.UPDATE_TERM:
      _terms[TermStore.findIndex(payload.term)] = payload.term;
      TermStore.__emitChange();
      break;
  }
};

TermStore.findById = function(id) {
  for(var i = 0; i < _terms.length; i++){
    if (_terms[i].id === id){
      return _terms[i];
    }
  }
};

TermStore.findIndex = function(term) {
  for(var i = 0; i < _terms.length; i++){
    if (_terms[i].id === term.id){
      return i;
    }
  }
};

TermStore.findByAuthorId = function(id) {
  return _terms.filter(function (term){
    return term.user_id === id;
  });
  // return AuthorTerms;
};

TermStore.findGroup = function(start, end){
  return _terms.slice(start, end);
};

module.exports = TermStore;
