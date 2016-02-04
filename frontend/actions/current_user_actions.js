var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

CurrentUserActions = {
  receiveCurrentUser: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },
  logoutCurrentUser: function() {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.LOGOUT_CURRENT_USER,
      currentUser: { }
    });
  }
};

module.exports = CurrentUserActions;
