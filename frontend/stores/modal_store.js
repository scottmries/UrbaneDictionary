var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');

var _modals = [];

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.hasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      _currentUserHasBeenFetched = true;
      _currentUser = payload.currentUser;
      CurrentUserStore.__emitChange();
      break;
    case CurrentUserConstants.LOGOUT_CURRENT_USER:

      _currentUserHasBeenFetched = false;
      _currentUser = {};
      CurrentUserStore.__emitChange();
      break;
  }
};

module.exports = ModalStore;
