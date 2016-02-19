var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var _currentUser = {user: {}};
var _currentUserHasBeenFetched = false;
var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser.user.id;
};

CurrentUserStore.hasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      _currentUserHasBeenFetched = true;
      _currentUser = {user: payload.currentUser};
      console.log("CurrentUserStore _currentUser", _currentUser);
      CurrentUserStore.__emitChange();
      break;
    case CurrentUserConstants.LOGOUT_CURRENT_USER:

      // _currentUserHasBeenFetched = false;
      _currentUser = {user: {}};
      CurrentUserStore.__emitChange();
      break;
  }
};

module.exports = CurrentUserStore;
