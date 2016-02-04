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
  console.log("current user store", _currentUser);
  var loginstatus;
  if (_currentUser && typeof _currentUser.user !== "undefined"){
    console.log("_currentUser is defined and it's id is", _currentUser.user.id);
    return !!_currentUser.user.id;
  } else {
    console.log("_currentUser is not defined or _current.user is not defined", false);
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

      // _currentUserHasBeenFetched = false;
      _currentUser = {user: {}};
      CurrentUserStore.__emitChange();
      break;
  }
};

module.exports = CurrentUserStore;
