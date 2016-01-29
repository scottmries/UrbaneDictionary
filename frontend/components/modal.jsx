var React = require('react');

var Modal = React.createClass({

  render: function() {
    return (<section className="modal">
    <button className="closeModal" onClick={this.props.closeHandler}><i className="fa fa-times"></i></button>
      {this.props.children}
    </section>
  );
  }
});

module.exports = Modal;
