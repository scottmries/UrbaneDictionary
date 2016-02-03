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

  submit: function (e) {
    e.preventDefault();
    var formData = new FormData();

    // formData.append("term[id]", this.props.id);
    formData.append("term[image]", this.state.imageFile);
    debugger
    ApiUtil.addImage(this.props.term.id, formData, function () {});
    // ApiUtil.addImage(this.props.term, formData, function(){});
  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
        <div className="form-inner">
          <input type="file" onChange={this.changeFile} />
        </div>
        <button>Submit</button>
      </form>
    );
  }
});

module.exports = ImageUploadForm;
