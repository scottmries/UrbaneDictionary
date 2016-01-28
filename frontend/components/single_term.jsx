var React = require('react');
var TermStore = require('../stores/term');
var History = require('react-router').History;
var TermHeader = require('./term_header');

var SingleTerm = React.createClass({

  getInitialState: function () {
    return { term: TermStore.findById(this.getId()) };
  },

  getId: function () {
    var id = this.props.params.id;
    id = parseInt(id);
    return id;
  },

  componentWillMount: function () {
    TermStore.addListener(this._onChange);
  },

  componentDidMount: function () {
    var id = this.getId();
    ApiUtil.fetchSingleTerm(id);
  },


  _onChange: function () {
    var id = this.getId();
    this.setState({ term: TermStore.findById(id) });
  },

  render: function () {
    if (this.state){
      var months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];
      var usage;
      var date = new Date(this.state.term.created_at);
      var shortMonth = months[date.getMonth()].slice(0,3);
      var dateString = shortMonth + " " + date.getDate();
      if (this.state.term.usage.length > 0){
        usage = <p className="usage">{this.state.term.usage}</p>;
      } else {
        usage = "";
      }
      return (
        <article className="term">
          <TermHeader termHeader={dateString} />
          <a href="#" onClick={this.showTerm}>
            <h2>{this.state.term.term}</h2>
          </a>
          <p className="definition">
            {this.state.term.definition}
          </p>
          {usage}
          <p className="author">
            by <a href="#" onClick={this.showUserTerms}>  {this.state.term.user.username}
            </a> {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
          </p>
        </article>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = SingleTerm;
