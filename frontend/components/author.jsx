var React = require('react');
var TermStore = require('../stores/term');

var Author = React.createClass({

    getInitialState: function () {
      var id = this.props.params.id;
      return { terms: TermStore.findByAuthorId(id)};
    },

    componentDidMount: function () {
      TermStore.addListener(this._onChange);
      ApiUtil.fetchTerms();
    },

    _onChange: function () {
      var id = this.props.params.id;
      this.setState({ terms: TermStore.find_by_author_id(id) });
    },

    render: function () {
      return (<div className="term_list">
          {this.state.terms.map (function (term){
            return (<Term
              id={term.id}
              key={term.id}
              />
            );
          })
        }
      </div>
    );
  }
});

module.exports = Author;
