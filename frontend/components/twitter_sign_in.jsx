var React = require('react');
var ApiUtil = require('./../util/api_util.js');
import { browserHistory } from "react-router";

var TwitterSignIn = React.createClass({

  submit: function (e) {
    e.preventDefault();
  },

  render: function () {
    return (
      // <form onSubmit={this.submit} >
      <div className="third-party-login twitter-login group">
        <a href="/auth/twitter">
          <button>
            <span>
              Sign In with <i className="fa fa-twitter"></i>
            </span>

          </button>
        </a>
      </div>
      // </form>
    );
  }
});

module.exports = TwitterSignIn;
