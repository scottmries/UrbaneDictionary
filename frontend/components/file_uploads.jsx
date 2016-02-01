var React = require('react');

var FileUploads = React.createClass({
  getInitialState: function () {

    return {buttons_shown: false};
  },

  handleEllipsisClick: function () {
    this.setState({ buttons_shown: !this.state.buttons_shown});
  },

  handleImageClick: function (e) {
    return
  },

  handleAudioClick: function (e) {
    return
  },

  handleVideoClick: function (e) {
    return
  },

  render: function () {
    var uploadButtons;
    var pressedClass = "ellipsis";
    if (this.state.buttons_shown){
      pressedClass = "pressed";
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
        <button className={pressedClass} onClick={this.handleEllipsisClick}><i className="fa fa-ellipsis-h"></i></button>
        {uploadButtons}
      </div>
    );
  }
});

module.exports = FileUploads;
