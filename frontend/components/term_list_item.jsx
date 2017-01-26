var React = require('react');
var Router = require('react-router');
var TermStore = require('../stores/term');
var History = require('react-router').History;
var FileUploads = require('./file_uploads');
var TermHeader = require('./term_header');
var YoutubeVideo = require('./youtube_video');
var Opinion = require('./opinion');
var CurrentUserStore = require('../stores/current_user_store');
var DeleteButton = require('./delete_button');
var Waypoint = require('react-waypoint');
import { browserHistory } from "react-router";

var TermListItem = React.createClass({

  show: function (e) {
    e.preventDefault();
  },

  componentWillMount: function () {
    this.setState({
        hasBeenVisible: false
    });
  },

  componentWillReceiveProps: function () {
  },

  getCurrentUser: function () {
    this.setState({currentUser: {user: CurrentUserStore.currentUser()}});
  },

  componentDidMount: function () {
    this.currentUserListener = CurrentUserStore.addListener(this.getCurrentUser);
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  showTerm: function (e) {
    e.preventDefault();
    browserHistory.push(this.state, "/terms/" + this.props.term.id);
  },

  showUserTerms: function (e) {
    e.preventDefault();
    browserHistory.push(this.state, "/users/" + this.props.term.user_id);
  },

  enterCallback: function () {
      this.setState({hasBeenVisible: true});
  },

  leaveCallback: function () {
    //   console.log(this.props.term + " left");
  },

  render: function () {
    var months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    var usage = "";
    var date = new Date();
    var author = "";
    var youtubeVideo = <div></div>;
    var image = <img className="termImg" src={this.props.term.image_url} />;
    var term = "";
    var definition = "";
    if (typeof this.props.term !== "undefined"){
      date = new Date(this.props.term.created_at);

          if (typeof this.props.term.video_url === "string" && this.props.term.video_url.length > 7){
            if (this.state.hasBeenVisible){
                youtubeVideo = <YoutubeVideo video={this.props.term.video_url} />;
            } else {
                youtubeVideo = <div><i className="fa fa-circle-o-notch fa-spin"></i></div>;
            }
          }
      if (typeof this.props.term.usage !== "undefined" && this.props.term.usage.length > 0){
        usage = <p className="usage">{this.props.term.usage}</p>;
      }
      if (this.props.term.image_url.slice(0,4) === "http"){
        <img className="termImg" src={this.props.term.image_url} />;
      }

      author = <a href="#" onClick={this.showUserTerms}>  {this.props.user.username} </a>;
      term = this.props.term.term;
      definition = this.props.term.definition;
    }
    var shortMonth = months[date.getMonth()].slice(0,3);
    var dateString = shortMonth + " " + date.getDate();
    return (
      <article className="term term_list_item group">
        <Waypoint onEnter={this.enterCallback} onLeave={this.leaveCallback} />
        <TermHeader
            termHeader={dateString}
            termId={this.props.term.id}
            hasBeenVisible={this.state.hasBeenVisible}/>
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
        {image}
        {youtubeVideo}
        <Opinion term={this.props.term}/>
        <DeleteButton term={this.props.term} currentUser={this.state.currentUser} />
      </article>
    );
  }
});

module.exports = TermListItem;
