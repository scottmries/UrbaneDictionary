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
    console.log("searching");
  },

  notSearching: function () {
    this.setState({searching: false});
    console.log("not searching");
  },

  logout: function () {
    SessionsApiUtil.logout();
  },

  render: function () {
    var logInStatus;
    if (this.state.currentUser.user.user && CurrentUserStore.isLoggedIn()) { // if we're logged in....
      logInStatus =  (
        <div className="logInStatus">
          Logged in as { this.state.currentUser.user.user.username }<br />
          <button onClick={ this.logout }>LOG OUT</button>
        </div>
      );
    } else {
      logInStatus = (
        <div className="logInStatus">
          <a href="#/login">Login</a>
        </div>
      );
    }
    var searchResultsList = "";
    if(this.state.searching){
      searchResultsList = <SearchResultsList results={this.state.searchResults} />;
    }
    return (

      <header className="group">
        <div className="header-inner">
          <Logo />
          <h2>Colloquialisms for the City-Dwelling Sophisticate</h2>
          <nav className="subnav">
            <SignInButton clickCallback={this.props.openSignInModal} text="" />
            <NewTermButton clickCallback={this.props.openNewTermModal} text="" />
            <SearchBar focusCallback={this.searching} blurCallback={this.notSearching}/>
            {searchResultsList}
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
