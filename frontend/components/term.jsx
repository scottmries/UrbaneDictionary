var React = require('react');
var TermStore = require('../stores/term');
var History = require('react-router').History;

var Term = React.createClass({

  mixins: [History],

  getInitialState: function () {
    var id = typeof this.props.params !== "undefined" ? this.props.params.id : this.props.id;
    id = parseInt(id);
    return {term: TermStore.find_by_id(id)};
  },

  showTerm: function (e) {
    e.preventDefault();
    this.history.pushState(null, '/terms/' + this.props.id);
  },

  componentDidMount: function () {

  },

  componentWillReceiveProps: function () {
    var id = parseInt(this.props.id);
    this.setState({term: TermStore.find_by_id(id)});
  },

  render: function () {
    var months = ["Jan", "Feb", "Mar", "Apr", "May",
      "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var usage;
    var date = new Date(this.state.term.created_at);
    var dateString = months[date.getMonth()] + " " + date.getDate();
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
        by {this.state.term.user}
      </p>
    </article>
  );
  }
});

module.exports = Term;
