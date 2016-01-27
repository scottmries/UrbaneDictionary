var React = require('react');
<<<<<<< HEAD

var TermListItem = React.createClass({
=======
var TermStore = require('../stores/term');
var History = require('react-router').History;

var TermListItem = React.createClass({

  mixins: [History],

  show: function (e) {
    e.preventDefault();
  },

>>>>>>> newbranch
  render: function () {
    var months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    var usage;
<<<<<<< HEAD
    var date = new Date(this.state.term.created_at);
    var shortMonth = months[date.getMonth()].slice(0,3);
    var dateString = shortMonth + " " + date.getDate();
    if (typeof this.state.term.usage !== "undefined" && this.state.term.usage.length > 0){
      usage = <p className="usage">{this.state.term.usage}</p>;
    } else {
      usage = "";
    }
    return (
      <article className="term term_list_item">
        <strong className="date">{dateString}</strong>
        <a href="#" onClick={this.showTerm}>
          <h2>{this.state.term.term}</h2>
        </a>
        <p className="definition">
          {this.state.term.definition}
        </p>
        {usage}
        <p className="author">
          by <a href="#" onClick={this.showUserTerms}>  {this.state.term.user.username}
          </a>
          {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        </p>
      </article>
    );
  }
});

module.export = TermListItem;
=======
    var date = new Date(this.props.term.created_at);
    var shortMonth = months[date.getMonth()].slice(0,3);
    var dateString = shortMonth + " " + date.getDate();
    if (typeof this.props.term.usage !== "undefined" && this.props.term.usage.length > 0){
      usage = <p className="usage">{this.props.term.usage}</p>;
    } else {
      usage = "";
    }
    return (<article className="term">
      <strong className="date">{dateString}</strong>
      <h2>{this.props.term.term}</h2>
      <p className="definition">
        {this.props.term.definition}
      </p>
      {usage}
      <p className="author">
        by {this.props.term.user.username} {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
      </p>
    </article>
  );
  }
});

module.exports = TermListItem;
>>>>>>> newbranch