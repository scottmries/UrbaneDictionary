var React = require('react');
var NewTermButton = require('./new_term_button');

var Sidebar = React.createClass({

  getInitialState: function () {
    var gifClasses = ["cat", "bowie", "glider", "typing", "kermit"];
    // var gifClasses = ["cat"];
    return (
      {
        gifClass: "gif " + gifClasses[Math.floor(Math.random() * gifClasses.length)]
      }
    );
  },

  render: function () {
    return (<section className="sidebar" onmouseover={this.onmouseover} onmouseout={this.onmouseout}>
      <h2>
        <span>
        Ye
      </span><br />
      <span>
        wright
      </span>
      <br />
        <span>
          Urbane
        </span><br />
        <span>
          Dictionary.
        </span>
      </h2>
      <div className="gif">
        <div className={this.state.gifClass}>

        </div>
      </div>
      {this.props.children}
    </section>);
  }
});

module.exports = Sidebar;
