var React = require('react');

var ErrorComponent = React.createClass({

  getInitialState: function () {
    return { errors: [] };
  },

  componentDidMount: function () {
    var errorListener = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    errorListener.remove();
  },

  _onChange: function () {
    this.setState({ errors: ErrorStore.errors() });
  },


  render: function() {
    return (<div className="errors">
      {this.state.errors.map (function (error){
        return (
          <div className="error">error</div>
        );
      })
    }
    </div>
  );
  }
});

moudle.exports = ErrorComponent;
