var React = require('react');

var Modal = React.createClass({

  render: function() {
    return (<section className="modal">
      {this.props.children}
    </section>
  );
  }
});

module.exports = Modal;
