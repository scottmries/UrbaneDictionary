var React = require('react');

var FileUploads = React.createClass({
  getInitialState: function () {

    return {buttons_shown: false};
  },

  handleEllipsisClick: function () {
    this.setState({ buttons_shown: !this.state.buttons_shown});
  },

  render: function () {
    var uploadButtons;
    if (this.state.buttons_shown){
      uploadButtons = <div className="upload-buttons">
        <button className="image-upload">
          <i className="fa fa-camera"></i>
        </button>
        <button className="audio-upload">
          <i className="fa fa-microphone"></i>
        </button>
        <button className="video-upload">
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
