var UserActions = require('../actions/user_actions');

var UserApiUtil = {

  fetchUsers: function () {
    $.ajax({
      url: '/api/users',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        UserActions.receiveUsers(data);
      },
      error: function () {
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
      error: function () {
      }
    });
  }

};

module.exports = UserApiUtil;
