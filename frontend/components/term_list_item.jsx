var React = require('react');
var TermStore = require('../stores/term');
var History = require('react-router').History;
var FileUploads = require('./file_uploads');
var TermHeader = require('./term_header');
var YoutubeVideo = require('./youtube_video');

var TermListItem = React.createClass({

  mixins: [History],

  show: function (e) {
    e.preventDefault();
  },

  showTerm: function (e) {
    e.preventDefault();
    this.history.pushState(this.state, "/terms/" + this.props.term.id);
  },

  showUserTerms: function (e) {
    e.preventDefault();
    this.history.pushState(this.state, "/users/" + this.props.term.user_id);
  },

  render: function () {
    var months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    var usage = "";
    var date = new Date();
    var author = "";
    var youtubeVideo = <div></div>;
    var term = "";
    var definition = "";
    if (typeof this.props.term !== "undefined"){
      date = new Date(this.props.term.created_at);
      if (typeof this.props.term.video_url === "string" && this.props.term.video_url.length > 7){
        youtubeVideo = <YoutubeVideo video={this.props.term.video_url} />;
      }
      if (typeof this.props.term.usage !== "undefined" && this.props.term.usage.length > 0){
        usage = <p className="usage">{this.props.term.usage}</p>;
      }
      author = <a href="#" onClick={this.showUserTerms}>  {this.props.user.username} </a>;
      term = this.props.term.term;
      definition = this.props.term.definition;
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
        <FileUploads term={this.props.term} />
        {youtubeVideo}
      </article>
    );
  }
});

module.exports = TermListItem;
