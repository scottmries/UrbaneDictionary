var React = require('react');
var ImageUploadForm = require('./image_upload_form');
var VideoUploadForm = require('./video_upload_form');
var AudioUploadForm = require('./audio_upload_form');
var Modal = require('./modal');

var FileUploads = React.createClass({
  getInitialState: function () {

    return {
      buttons_shown: false,
      modal: ""
    };
  },

  handleEllipsisClick: function () {
    this.setState({
      buttons_shown: !this.state.buttons_shown,
      modal: ""
    });
  },

  handleImageClick: function (e) {
    this.setState( {buttons_shown: false, modal: "image"} );
  },

  handleAudioClick: function (e) {
    this.setState( {buttons_shown: false, modal: "audio"} );

  },

  handleVideoClick: function (e) {
    this.setState( {buttons_shown: false, modal: "video"} );
  },

  closeHandler: function () {
    this.setState({
      modal: ""
    });
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
    var modal;
    switch (this.state.modal) {
      case "image":
        modal = <Modal closeHandler={this.closeHandler}><ImageUploadForm term={this.props.term}/></Modal>;
        break;
      case "video":
        modal = <Modal closeHandler={this.closeHandler}><VideoUploadForm term={this.props.term}/></Modal>;
        break;
      case "audio":
        modal = <Modal closeHandler={this.closeHandler}><AudioUploadForm term={this.props.term}/></Modal>;
        break;
      default:
        modal = <div></div>;

    }
    return (
      <div>
        {modal}
        <div className="file-uploads">
          <button className={pressedClass} onClick={this.handleEllipsisClick}><i className="fa fa-ellipsis-h"></i></button>
          {uploadButtons}
        </div>
      </div>
    );
  }
});

module.exports = FileUploads;
