var React = require('react');
var ApiUtil = require('./../util/api_util');
var Terms = require('./term_list');
var SignInButton = require('./sign_in_button');
var SignInForm = require('./sign_in_form');
var NewTermButton = require('./new_term_button');
var NewTermForm = require('./new_term_form');
var Modal = require('./modal');
var SingleTerm = require('./single_term');
var Author = require('./author');
var Sidebar = require('./sidebar');
var Header = require('./header');
var CurrentUserStore = require('./../stores/current_user_store');
var SessionsApiUtil = require('./../util/sessions_api_util');

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
      signInModal = <Modal closeHandler={this.closeSignInModal}>
        <SignInForm />
      </Modal>;
    } else {
      signInModal = <div></div>;
    }
    if (this.state.newTermModalIsOpen){
      newTermModal = <Modal closeHandler={this.closeNewTermModal}>
        <NewTermForm />
      </Modal>;
    } else {
      newTermModal = <div></div>;
    }
    return (
      <div id="content">
        {newTermModal}
        {signInModal}

        <Header openNewTermModal={this.openNewTermModal}
          openSignInModal={this.openSignInModal} />
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
