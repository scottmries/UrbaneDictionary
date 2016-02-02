var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var _currentUser = {};
var _currentUserHasBeenFetched = false;
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.isLoggedIn = function () {
  if (typeof _currentUser.user !== "undefined"){
    return !!_currentUser.user.id;
  } else {
    return false;
  }
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

module.exports = CurrentUserStore;
