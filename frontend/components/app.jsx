var React = require('react');
var ApiUtil = require('./util/api_util');
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

  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionsApiUtil.fetchCurrentUser();
  },

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
          <Header />
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

module.exports = App;
