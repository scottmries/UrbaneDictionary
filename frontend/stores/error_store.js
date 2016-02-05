var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/error_constants');

var _errors = [];

var ErrorStore = new Store(AppDispatcher);

ErrorStore.all = function() {
  return _errors.slice(0);
};

var reset = function (errors) {
  _errors = errors;
};

ErrorStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ErrorConstants.RECEIVE_ERRORS:
      reset(payload.errors);
      ErrorStore.__emitChange();
      break;
    }
};

module.exports = ErrorStore;
