var React = require('react');
var UserConstants = require('./../constants/user_constants');
var AppDispatcher = require('./../dispatcher/dispatcher');

UserApiUtil = {
  receiveUsers: function(users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },
  receiveUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};

module.exports = UserApiUtil;
