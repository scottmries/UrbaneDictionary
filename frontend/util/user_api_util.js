var UserActions = require('../actions/user_actions');
var ErrorActions = require('../actions/error_actions.js');

const UserApiUtil = {

  fetchUsers: function () {
    $.ajax({
      url: '/api/users',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        UserActions.receiveUsers(data);
      },
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  },

  fetchUser: function (id) {
    $.ajax({
      url: '/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        UserActions.receiveUser(data);
      },
      error: function (error) {
        ErrorActions.receiveErrors(error);
      }
    });
  }

};

module.exports = UserApiUtil;
