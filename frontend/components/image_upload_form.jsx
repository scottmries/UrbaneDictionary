var React = require('react');

var ImageUploadForm = React.createClass({

  getInitialState: function () {
    return {
      imageFile: null,
      imageUrl: ""
     };
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
        <input type="file" onChange={this.changeFile} />
      </form>
    );
  }
});

module.exports = ImageUploadForm;
