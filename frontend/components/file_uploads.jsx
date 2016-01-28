var React = require('react');

var FileUploads = React.createClass({
  getInitialState: function () {

    return {buttons_shown: false};
  },

  handleEllipsisClick: function () {
    this.setState({ buttons_shown: !this.state.buttons_shown});
  },

  handleImageClick: function (e) {
    console.log("image click");
  },

  handleAudioClick: function (e) {
    console.log("audio click");
  },

  handleVideoClick: function (e) {
    console.log("video click");
  },

  render: function () {
    var uploadButtons;
    if (this.state.buttons_shown){
      uploadButtons = <div className="upload-buttons">
        <button className="image-upload" onClick={this.handleImageClick}>
          <i className="fa fa-camera"></i>
        </button>
        <button className="audio-upload" onClick={this.handleAudioClick}>
          <i className="fa fa-microphone"></i>
        </button>
        <button className="video-upload" onClick={this.handleVideoClick}>
          <i className="fa fa-video-camera"></i>
        </button>
      </div>;
    }
    return (
      <div className="file-uploads">
        <button className="ellipsis" onClick={this.handleEllipsisClick}><i className="fa fa-ellipsis-h"></i></button>
        {uploadButtons}
      </div>
    );
  }
});

module.exports = FileUploads;
