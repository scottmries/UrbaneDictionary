var React = require('react');

var Modal = React.createClass({

  render: function() {
    return (<section className="modal">
      <h1>Modal!</h1>
      {this.props.children}
    </section>
  );
  }
});

module.exports = Modal;
