var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');
var Terms = require('./components/term_list');
var SignInForm = require('./components/sign_in_form');
var SignUpForm = require('./components/sign_up_form');
var SingleTerm = require('./components/single_term');
var Author = require('./components/author');
var Header = require('./components/header');
var CurrentUserStore = require('./stores/current_user_store');
var SessionsApiUtil = require('./util/sessions_api_util');
var TermListItem = require('./components/term_list_item');


var routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Terms} />
    // <IndexRoute component={Terms} onEnter={_ensureLoggedIn} />
    <Route path="login" component={SignInForm} />
    <Route path="users/new" component={SignUpForm} />
    <Route path="terms/:id" component={SingleTerm} />
    <Route path="users/:id" component={Author} />
  </Route>
);

function _ensureLoggedIn(nextState, replace, callback) {
  if (CurrentUserStore.hasBeenFetched()){
    _redirectIfNotLoggedIn();
  } else {
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }

  function _redirectIfNotLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      replace({}, "/login");
    }
    callback();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById("root")
  );
});
