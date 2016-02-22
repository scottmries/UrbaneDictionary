var ErrorActions = require('../actions/error_actions.js');
var CurrentUserActions = require("./../actions/current_user_actions");
var SessionsApiUtil = {
  login: function (credentials, success){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials, // {email: "scott", password: "password"}
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }, error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  },

  logout: function (success) {
    $.ajax({
      url: 'api/session',
      type: 'delete',
      dataType: 'json',
      success: function () {
        CurrentUserActions.logoutCurrentUser();
        success && success();
      }, error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  },

  fetchCurrentUser: function (cb) {
    $.ajax({
      url: 'api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        cb && cb(currentUser);
      }, error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  }
};

module.exports = SessionsApiUtil;
