var React = require('react');

var YoutubeVideo = React.createClass({
  render: function () {
    return (
      <iframe width="420" height="315"
        src={this.props.video} frameBorder="0"
        allowFullScreen className="yt-video"></iframe>
    );
  }
});

module.exports = YoutubeVideo;
