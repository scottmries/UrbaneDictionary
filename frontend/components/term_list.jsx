var React = require('react');
var TermStore = require('../stores/term');
var Term = require('./term');

var TermList = React.createClass({
  getInitialState: function () {
    return { terms: TermStore.all()};
  },

  componentDidMount: function () {
    TermStore.addListener(this._onChange);
    ApiUtil.fetchTerms();
  },

  _onChange: function () {
    this.setState({ terms: TermStore.all() });
  },

  render: function () {
    return (<div className="term_list">
        {this.state.terms.map (function (term){
          return (<Term
            key={term.term}
            term={term.term}
            definition={term.definition}
            usage={term.usage}
            />
          );
        })
      }
    </div>
  );
  }
});

module.exports = TermList;
