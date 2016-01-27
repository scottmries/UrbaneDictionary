var React = require('react');

var Term = React.createClass({


  render: function () {
    var months = ["Jan", "Feb", "Mar", "Apr", "May",
      "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var usage;
    var date = new Date(this.props.date);
    var dateString = months[date.getMonth()] + " " + date.getDate();
    console.log(dateString);
    if (this.props.usage.length > 0){
      usage = <p className="usage">{this.props.usage}</p>;
    } else {
      usage = "";
    }
    return (<article className="term">
      <strong className="date">{dateString}</strong>
        <h2>{this.props.term}</h2>
      <p className="definition">
        {this.props.definition}
      </p>
      {usage}
    </article>
  );
  }
});

module.exports = Term;
