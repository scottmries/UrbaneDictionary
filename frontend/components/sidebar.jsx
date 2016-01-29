var React = require('react');
var NewTermButton = require('./new_term_button');

var Sidebar = React.createClass({
  render: function () {
    return (<section className="sidebar">
      <h2>Ye wright Urbane Dictionary.</h2>
      {this.props.children}
    </section>);
  }
});

module.exports = Sidebar;
