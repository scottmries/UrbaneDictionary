var React = require('react');
var ApiUtil = require('./../util/api_util.js');
var History = require('react-router').History;

var TwitterSignIn = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
  },

  render: function () {
    return (
      // <form onSubmit={this.submit} >
      <div className="twitter-login group">
        <a href="/auth/twitter">
          <button>
            <span>
              Sign In with <i className="fa fa-twitter-official"></i>
            </span>

          </button>
        </a>
      </div>
      // </form>
    );
  }
});

module.exports = TwitterSignIn;
