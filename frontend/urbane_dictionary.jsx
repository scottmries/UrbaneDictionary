var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Terms}/>
    <Route path="login" component={SignInForm} />
    <Route path="terms/:id" component={SingleTerm} />
    <Route path="users/:id" component={Author} />
    <Route path="sessions/new" component={SignInForm}/>
  </Route>
);

function _ensureLoggedIn(nextState, replace, callback) {

  if (CurrentUserStore.userHasBeenFetched()) {
    _redirectIfNotLoggedIn();
  } else {
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }

  function _redirectIfNotLoggedIn() {
    if (!CurrentUser.Store.isLoggedIn()) {
      replace({}, "/login");
      callback();
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById("root")
  );
});
