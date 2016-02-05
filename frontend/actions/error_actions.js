var React = require('react');
var ErrorConstants = require('./../constants/error_constants');
var AppDispatcher = require('./../dispatcher/dispatcher');

ErrorApiUtil = {
  receiveErrors: function(data) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.RECEIVE_ERRORS,
      errors: data.errors
    });
  }
};

module.exports = ErrorApiUtil;
