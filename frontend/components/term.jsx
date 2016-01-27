var React = require('react');
var TermStore = require('../stores/term');
var History = require('react-router').History;

var Term = React.createClass({

  mixins: [History],

  getId: function () {
    return parseInt(this.props.params.id);
  },

  getInitialState: function () {
    return {term: TermStore.find_by_id(this.getId())};
  },

  showTerm: function (e) {
    e.preventDefault();
    this.history.pushState(null, '/terms/' + this.props.id);
  },

  componentDidMount: function () {
    TermStore.addListener(this._onChange);
    ApiUtil.fetchSingleTerm(this.getId());
  },

  componentWillReceiveProps: function () {
    var id = parseInt(this.props.id);
    this.setState({term: TermStore.find_by_id(this.getId())});
  },

  render: function () {
    var months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    var usage;
    var date = new Date(this.state.term.created_at);
    var shortMonth = months[date.getMonth()].slice(0,3);
    var dateString = shortMonth + " " + date.getDate();
    if (typeof this.state.term.usage !== "undefined" && this.state.term.usage.length > 0){
      usage = <p className="usage">{this.state.term.usage}</p>;
    } else {
      usage = "";
    }
    return (<article className="term">
      <strong className="date">{dateString}</strong>
        <a href="#" onClick={this.showTerm}><h2>{this.state.term.term}</h2></a>
      <p className="definition">
        {this.state.term.definition}
      </p>
      {usage}
      <p className="author">
        by {this.state.term.user.username} {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
      </p>
    </article>
  );
  }
});

module.exports = Term;
