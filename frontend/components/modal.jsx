var React = require('react');

var Modal = React.createClass({

  render: function() {
    var closeButton = <div></div>;
    if (this.props.closeButton === "show"){
      closeButton = <button className="closeModal" onClick={this.props.closeHandler}><i className="fa fa-times"></i></button>;
    }
    return (<section className="modal">

    {closeButton}
      <section className="modalContent">
        {this.props.children}
      </section>
    </section>
  );
  }
});

module.exports = Modal;
