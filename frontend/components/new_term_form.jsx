var React = require('react');

var NewTermForm = React.createClass({
  handleClick: function () {
    console.log("clicked new term");
  },

  render: function () {
    return (<section className="newTermForm">
      <h2>New Term</h2>
      <form>
        <label>Term
          <input type="text" value="" name="term"></input>
        </label>
        <label>Definition
          <input type="textarea" value="" name="definition"></input>
        </label>
        <label>Usage
          <input type="textarea" value="" name="usage"></input>
        </label>
        <button>Submit</button>
      </form>
      </section>
    );
  }
});

module.exports = NewTermForm;
