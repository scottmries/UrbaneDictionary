var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var _users = [];

var UserStore = new Store(AppDispatcher);

UserStore.all = function() {
  return _users.slice(0);
};

var reset = function (users) {
  _users = users;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      reset(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_RECEIVED:
      reset(payload.user);
      UserStore.__emitChange();
      break;
  }

};

UserStore.getAuthorTerms = function(id) {
  return _users;
};

module.exports = UserStore;
