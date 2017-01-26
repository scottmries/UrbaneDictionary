var React = require('react');
var TermStore = require('../stores/term');
var CurrentUserStore = require('../stores/current_user_store');
var History = require('react-router').History;
var TermHeader = require('./term_header');
var FileUploads = require('./file_uploads');
var Opinion = require('./opinion');
var YoutubeVideo = require('./youtube_video');
var DeleteButton = require('./delete_button');
var ApiUtil = require('../util/api_util');

var SingleTerm = React.createClass({

  getInitialState: function () {
    return {
        term: TermStore.findById(this.getId()),
        currentUser: {user: CurrentUserStore.currentUser()}
    };
},

  getId: function () {
    var id = this.props.params.id;
    id = parseInt(id);
    return id;
  },

  getCurrentUser: function () {
    this.setState({currentUser: {user: CurrentUserStore.currentUser()}});
  },

  componentWillMount: function () {
    ApiUtil.fetchSingleTerm(this.getId());
    TermStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this.getCurrentUser);
  },

  componentDidMount: function () {
    var id = this.getId();
    this.currentUserListener = CurrentUserStore.addListener(this.getCurrentUser);
    // ApiUtil.fetchSingleTerm(id);
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  _onChange: function () {
    var id = this.getId();
    this.setState({ term: TermStore.findById(id) });
  },

  deleteTerm: function (e) {
    e.preventDefault();
    ApiUtil.deleteTerm(this.getId());
  },

  render: function () {
    var months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    var usage = "";
    var date = new Date();
    var author = "";
    var youtubeVideo = <div></div>;
    var image = <div></div>;
    var term = "";
    var definition = "";
    if (typeof this.state.term !== "undefined"){
      date = new Date(this.state.term.created_at);
      if (typeof this.state.term.video_url === "string" && this.state.term.video_url.length > 7){
        youtubeVideo = <YoutubeVideo video={this.state.term.video_url} />;
      }
      if (typeof this.state.term.image_url === "string" && this.state.term.image_url.length > 1){
        image = <img className="termImg" src={this.state.term.image_url} />;
      }
      if (typeof this.state.term.usage !== "undefined" && this.state.term.usage.length > 0){
        usage = <p className="usage">{this.state.term.usage}</p>;
      }
      author = <a href="#" onClick={this.showUserTerms}>  {this.state.term.user.username} </a>;
      term = this.state.term.term;
      definition = this.state.term.definition;
    }
    var shortMonth = months[date.getMonth()].slice(0,3);
    var dateString = shortMonth + " " + date.getDate();
    return (
      <article className="term term_list_item group">
        <TermHeader termHeader={dateString} />
        <a href="#" onClick={this.showTerm}>
          <h2>{term}</h2>
        </a>
        <p className="definition">
          {definition}
        </p>
        {usage}
        <p className="author">
          by {author} {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        </p>
        <FileUploads term={this.state.term} />
        {image}
        {youtubeVideo}
        <DeleteButton term={this.props.term} currentUser={this.state.currentUser.user.user.id} />
        <Opinion term={this.state.term}/>
      </article>
    );
  }
});

module.exports = SingleTerm;
