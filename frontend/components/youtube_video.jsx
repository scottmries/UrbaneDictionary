var React = require('react');

var YoutubeVideo = React.createClass({
  // getInitialState: function () {
  //   // return ({ video_url: "" });
  // },
  //
  // componentWillMount: function () {
  //   console.log("component will mount");
  //   // this.setState({ video_url: this.parseEmbedCode() });
  // },

  render: function () {
    return (
      <iframe width="420" height="315"
        src={this.props.video} frameBorder="0"
        allowFullScreen className="yt-video"></iframe>
    );
  }
});

module.exports = YoutubeVideo;
