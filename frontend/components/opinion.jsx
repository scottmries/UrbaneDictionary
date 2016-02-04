var React = require('react');
var TermStore = require('./../stores/term');
var CurrentStore = require('./../stores/current_user_store');

var Opinion = React.createClass({
  getInitialState: function (){
    return {
      currentUserLiked: null,
      "likes": 0,
      "dislikes": 0
   };
  },

  componentDidMount: function () {
    this.termListener = TermStore.addListener(this._onTermChange);
    this.currentUserListener = CurrentStore.addListener(this._onCurrentUserChange);
  },

  componentWillUnmount: function () {
    this.termListener.remove();
  },

  _onCurrentUserChange: function () {
    //if the user does not have an opinion about the term: null
    //if liked, true, else false
    //increment/decrement on the backend, then pass down the opinions as like/dislike integers

    //Disable the button that corresponds to the current opinion
    this.setState({ "currentUserLiked": "STUFF" });
  },

  _onTermChange: function () {
    this.setState({ "likes": "STUFF", "dislikes": "STUFF"});
  },

  handleDislike: function () {
    this.setState({ "currentUserLiked": false });
    ApiUtil.setLike(false);
  },

  handleLike: function () {
    this.setState({ "currentUserLiked": true });
    ApiUtil.setLike(true);
  },

  render: function() {

    return (
      <div className="opinion">
        <button className="dislike" onClick={this.handleDislike} disabled={this.state.currentUserLiked === false}><i className="fa fa-thumbs-down"></i> {this.state.dislikes}</button>
        <button className="like" onClick={this.handleLike} disabled={this.state.currentUserLiked}><i className="fa fa-thumbs-up"></i> {this.state.likes}</button>
      </div>
    );
  }
});

module.exports = Opinion;
