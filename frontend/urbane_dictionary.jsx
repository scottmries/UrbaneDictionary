var React = require('react');
var ReactDOM = require('react-dom');
// var ReactRouter = require('react-router');
var ApiUtil = require('./util/api_util');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Terms = require('./components/term_list');
var SignIn = require('./components/sign_in');
var SingleTerm = require('./components/single_term');
var Author = require('./components/author');

var App = React.createClass({
  render: function () {
    return (<div id="content">
      <header>
        <h1>Urbane Dictionary</h1>
        <h2>Colloquialisms for the City-Dwelling Sophisticate</h2>
        <SignIn />
      </header>
      <main>
        {this.props.children}
      </main>

    </div>
  );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Terms}/>
    <Route path="terms/:id" component={SingleTerm} />
    <Route path="users/:id" component={Author} />
    // <Route path="sessions/new" component={SignIn}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById("root")
  );
});
