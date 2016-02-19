var React = require('react');
var ErrorStore = require('../stores/error_store');

var ErrorComponent = React.createClass({

  getInitialState: function () {
    return { errors: ErrorStore.all() };
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
  },

  _onChange: function () {
    this.setState({ errors: ErrorStore.all() });
    console.log(ErrorStore.all());
  },


  render: function() {
    return (<div className="errors">
      {this.state.errors.map (function (error){
        return (
          <div className="error">{error}</div>
        );
      })
    }
    </div>
  );
  }
});

module.exports = ErrorComponent;
