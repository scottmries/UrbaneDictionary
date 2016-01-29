var React = require('react');
var ReactDOM = require('react-dom');
// var ReactRouter = require('react-router');
var ApiUtil = require('./util/api_util');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Terms = require('./components/term_list');
var SignInButton = require('./components/sign_in_button');
var SignInForm = require('./components/sign_in_form');
var NewTermButton = require('./components/new_term_button');
var NewTermForm = require('./components/new_term_form');
var Modal = require('./components/modal');
var SingleTerm = require('./components/single_term');
var Author = require('./components/author');
var Sidebar = require('./components/sidebar');

var App = React.createClass({

  getInitialState: function () {
    return ({
      signInModalIsOpen: false,
      newTermModalIsOpen: false
    });
  },

  openSignInModal: function () {
    this.setState({
      signInModalIsOpen: true
    });
    console.log("Opening sign in modal");
  },

  closeSignInModal: function () {
    this.setState({
      signInModalIsOpen: false
    });
    console.log("Closing sign in modal");
  },

  openNewTermModal: function () {
    this.setState({
      newTermModalIsOpen: true
    });
    console.log("Opening new term modal");
  },

  closeNewTermModal: function () {
    this.setState({
      newTermModalIsOpen: false
    });
    console.log("Closing new term modal");
  },

  render: function () {
      var signInModal;
      var newTermModal;
      if (this.state.signInModalIsOpen){
        signInModal = <Modal>
          <SignInForm />
        </Modal>;
      } else {
        signInModal = "";
      }
      if (this.state.newTermModalIsOpen){
        newTermModal = <Modal>
          <NewTermForm />
        </Modal>;
      } else {
        newTermModal = "";
      }
      return (
        <div id="content">
          {newTermModal}
          {signInModal}
          <header className="group">
            <div className="header-inner">
              <h1>Urbane Dictionary</h1>
              <h2>Colloquialisms for the City-Dwelling Sophisticate</h2>
              <nav className="subnav">
                <SignInButton clickCallback={this.openSignInModal} text="" />
                <NewTermButton clickCallback={this.openNewTermModal} text="" />
              </nav>
            </div>
          </header>
          <main className="group">
            {this.props.children}

            <Sidebar>
              <NewTermButton clickCallback={this.openNewTermModal} text="Add a term" />
            </Sidebar>
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
    // <Route path="sessions/new" component={SignInForm}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById("root")
  );
});
