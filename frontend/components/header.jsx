var React = require('react');
var SignInButton = require('./sign_in_button');
var NewTermButton = require('./new_term_button');
var CurrentUserStore = require('./../stores/current_user_store');
var SearchResultsStore = require('./../stores/search_results_store');
var SearchResultsList = require('./search_results_list');
var SessionsApiUtil = require('./../util/sessions_api_util');
var Logo = require('./logo');
var SearchBar = require('./search_bar');

var Header = React.createClass({

  getInitialState: function () {
    return {
      currentUser: { user: {} },
      searchResults: [],
      searching: false
    };
  },

  componentDidMount: function () {
    this.currentUserListener = CurrentUserStore.addListener(this._onChange);
    this.searchResultListener = SearchResultsStore.addListener(this._onSearch);
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
  },

  _onChange: function () {
    this.setState({currentUser: {user: CurrentUserStore.currentUser()}});
  },

  _onSearch: function () {
    this.setState({searchResults: SearchResultsStore.all()});
  },

  searching: function () {
    this.setState({searching: true});
  },

  notSearching: function () {
    this.setState({searching: false});
  },

  logout: function () {
    SessionsApiUtil.logout();
  },

  newTerms: function () {
    //show the terms from the last week
  },

  render: function () {
    var logInStatus = "";
    if (CurrentUserStore.isLoggedIn()) { // if we're logged in....
      logInStatus =  (
        <div className="logInStatus">
          Logged in as { this.state.currentUser.user.user.username }<br />
          <button onClick={ this.logout }>LOG OUT</button>
        </div>
      );
    }
    var searchResultsList = "";
    if(this.state.searching){
      searchResultsList =
        <SearchResultsList
            results={this.state.searchResults}
            focusCallback={this.searching}
            blurCallback={this.notSearching}/>;
    }
    var alphabet = "abcdefghijklmnopqrstuvwxyz#".split("");
    alphabet.concat(["new"]);
    var alphabetMenu = alphabet.map( function (letter){
      return <li data-letter={letter} key={letter}>{letter}</li>;
    });
    var navbar = "";
    if (false){
      navbar = function (){
        return (

          <nav className="nav">
            <ul className="menu">
              <a className="browse">
                <li>Browse</li>
                <nav className="alphabetMenu group"><ul>{alphabetMenu}</ul></nav>
              </a>
              <a className="vote"><li>Vote</li></a>
              <a className="favorites"><li>Favorites</li></a>
            </ul>
          </nav>
        );
      }();
    }

    return (

      <header className="group">
        <div className="header-inner">
          <div className="header-top group">
            <Logo />
            {navbar}
            {logInStatus}
          </div>

          <nav className="subnav">
            <SignInButton clickCallback={this.props.openSignInModal} text="" />
            <NewTermButton clickCallback={this.props.openNewTermModal} text="" />
            <SearchBar focusCallback={this.searching} />
            {searchResultsList}
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
