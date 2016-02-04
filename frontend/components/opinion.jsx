var React = require('react');

var Opinion = React.createClass({
  getInitialState: function (){
    return {
      currentUserLiked: null,
      "likes": 0,
      "dislikes": 0
   };
  },

  componentDidMount: function () {
    this.termListener = TermStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.termListener.remove();
  },

  _onChange: function () {
    //if the user does not have an opinion about the term: null
    //if liked, true, else false
    //increment/decrement on the backend, then pass down the opinions as like/dislike integers

    //Disable the button that corresponds to the current opinion
    this.setState({ "currentUserLiked": "stuff" });
    this.dislikeDisabled = this.state.currentUserLiked === false ? " disable" : "";
    this.likeDisabled = this.state.currentUserLiked === true ? " disable" : "";
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
        <button className="dislike" onClick={handleDislike}>{this.state.dislikes} {this.dislikeDisabled}></button>
        <button className="like" onClick={handleLike}>{this.state.likes} {this.likeDisabled}></button>
      </div>
    );
  }
});

module.exports = Opinion;
