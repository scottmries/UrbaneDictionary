var React = require('react');

var VideoUploadForm = React.createClass({
  getInitialState: function () {
    return { video_url: "" };
  },

  change: function (e) {
    this.setState({ video_url: e.currentTarget.value });
  },

  submit: function (e) {
    e.preventDefault();
    var video_url = {video_url: this.state.video_url};
    // var credentials = $(e.currentTarget).serializeJSON().user;
      ApiUtil.addVideoURL(this.props.term, video_url, function () {
        // this.history.pushState({}, "/terms/" + this.props.term.id);
    }.bind(this));
  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
        <div className="form-inner">
          <label>YouTube URL:
            <input type="text" onChange={this.change} value={this.state.video_url} />
          </label>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = VideoUploadForm;
