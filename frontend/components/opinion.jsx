var React = require('react');
var TermStore = require('./../stores/term');
var CurrentUserStore = require('./../stores/current_user_store');

var Opinion = React.createClass({
  getInitialState: function () {
    return {
      currentUserOpined: null,
      likes: NaN,
      dislikes: NaN
    };
  },

  componentWillMount: function () {
    this.parseProps(this.props);
  },

  componentWillReceiveProps: function (nextProps) {
    this.parseProps(nextProps);
  },

  parseProps: function (props) {
    console.log("current user", CurrentUserStore.currentUser());
    console.log("before parsing props", props);
    var likes = 0;
    var dislikes = 0;
    var opinions = props.term.opinions;
    var currentUserOpined = null;
    for (var i = 0; i < opinions.length; i++){

      if (opinions[i].liked){
        likes++;
      } else {
        dislikes++;
      }
      if (opinions[i].user_id === CurrentUserStore.currentUser().user.id){
        currentUserOpined = opinions[i].liked;
      }
    }
    this.setState({
      likes: likes,
      dislikes: dislikes,
      currentUserOpined: currentUserOpined
    });
    console.log("State after parsing props", this.state);
  },

  handleDislike: function () {
    this.setState({ currentUserOpined: false });
    ApiUtil.setLike(this.props.term.id, CurrentUserStore.currentUser().user.id, false);
  },

  handleLike: function () {
    this.setState({ currentUserOpined: true });
    ApiUtil.setLike(this.props.term.id, CurrentUserStore.currentUser().user.id, true);
  },

  render: function() {
    var dislikeClass = this.state.currentUserOpined === false ? "dislike pressed" : "dislike";
    var likeClass = this.state.currentUserOpined === true ? "like pressed" : "like";
    return (
      <div className="opinion">
      <button className={dislikeClass} onClick={this.handleDislike} disabled={this.state.currentUserOpined === false}><i className="fa fa-thumbs-down"></i> {this.state.dislikes}</button>
      <button className={likeClass} onClick={this.handleLike} disabled={this.state.currentUserOpined === true}><i className="fa fa-thumbs-up"></i> {this.state.likes}</button>
      </div>
    );
  }
});

module.exports = Opinion;
