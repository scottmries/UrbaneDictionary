var React = require('react');
var NewTermButton = require('./new_term_button');

var Sidebar = React.createClass({

  onmouseover: function () {
  },

  onmouseout: function () {
  },

  render: function () {
    return (<section className="sidebar" onmouseover={this.onmouseover} onmouseout={this.onmouseout}>
      <h2>Ye wright Urbane Dictionary.</h2>
      {this.props.children}
    </section>);
  }
});

module.exports = Sidebar;
