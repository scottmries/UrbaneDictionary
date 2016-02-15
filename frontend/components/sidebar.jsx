var React = require('react');
var NewTermButton = require('./new_term_button');

var Sidebar = React.createClass({

  onmouseover: function () {
    console.log("moused over");
  },

  onmouseout: function () {
    console.log("moused out");
  },

  render: function () {
    console.log(this.props);
    return (<section className="sidebar" onmouseover={this.onmouseover} onmouseout={this.onmouseout}>
      <h2>Ye wright Urbane Dictionary.</h2>
      {this.props.children}
    </section>);
  }
});

module.exports = Sidebar;
