var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ApiUtil = require('./util/api_util');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (<div id="content">
      <header>
        <h1>Urbane Dictionary</h1>
        <h2>Colloquialisms for the City-Dwelling Sophisticate</h2>
        {this.props.children}
      </header>
    </div>
  );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Terms}/>
    <Route path="users/new" component={SignUp}/>
    <Route path="sessions/new" component={SignIn}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById("root")
  );
});
