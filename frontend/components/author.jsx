var React = require('react');
var TermStore = require('../stores/term');

var Author = React.createClass({

    getInitialState: function () {
      var id = this.props.params.id;
      return { terms: TermStore.findByAuthorId(id)};
      // return null;
    },

    componentDidMount: function () {
      TermStore.addListener(this._onChange);
      ApiUtil.fetchTerms();
      debugger
    },

    componentWillUnmount: function () {
      TermStore.removeListener(this._onChange);
    },

    _onChange: function () {
      // TermStore.fetchTerms();
      var id = this.props.params.id;
      this.setState({ terms: TermStore.findByAuthorId(id) });
      console.log(this.state.terms);
    },

    render: function () {
      return (<div className="term_list">
          {this.state.terms.map (function (term){
            return (<TermListItem
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
