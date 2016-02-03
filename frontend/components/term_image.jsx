var React = require('react');

var TermImage = React.createClass({
  render: function () {
    return (<div className="termImage">
        <img src={this.props.image_url} ></img>
    </div>);
  }
});

module.exports = TermImage;
