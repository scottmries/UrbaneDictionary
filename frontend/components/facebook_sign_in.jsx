var React = require('react');
var ApiUtil = require('./../util/api_util.js');
var History = require('react-router').History;

var FacebookSignIn = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
  },

  render: function () {
    return (
      // <form onSubmit={this.submit} >
      <div className="third-party-login facebook-login group">
        <a href="/auth/facebook">
          <button>
            <span>
              Sign In with <i className="fa fa-facebook-official"></i>
            </span>

          </button>
        </a>
      </div>
      // </form>
    );
  }
});

module.exports = FacebookSignIn;
