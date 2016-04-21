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
var TermStore = require('./../stores/term');
var SessionsApiUtil = require('./../util/sessions_api_util');
var Spinner = require('./spinner');
var History = require('react-router').History;
var ErrorComponent = require('./error');

var App = React.createClass({

  mixins: [History],

  componentDidMount: function () {
    // CurrentUserStore.addListener(this.forceUpdate.bind(this));
    this.userlistener = CurrentUserStore.addListener(this._onChange);
    this.termlistener = TermStore.addListener(this._newTerms);
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.userlistener.remove();
    this.termlistener.remove();
  },

  _onChange: function () {
    if (CurrentUserStore.isLoggedIn()){
      this.setState( { fetchingModalIsOpen: false } );
    } else {
      // this.history.replace("/login");
    }
  },

  _newTerms: function () {
    this.setState({
      newTermModalIsOpen: false
    });
  },

  getInitialState: function () {
    return ({
      signInModalIsOpen: false,
      newTermModalIsOpen: false,
      fetchingModalIsOpen: false
    });
  },
  // refactor: move modal logic to a store
  openFetchingModal: function () {
    this.setState({
      fetchingModalIsOpen: true,
      signInModalIsOpen: false
    });
  },

  closeFetchingModal: function () {
    this.setState({
      fetchingModalIsOpen: false
    });
  },

  openSignInModal: function () {
    this.setState({
      signInModalIsOpen: true,
      fetchingModalIsOpen: false
    });
  },

  closeSignInModal: function () {
    this.setState({
      signInModalIsOpen: false
    });
  },

  openNewTermModal: function () {
    // this.history.push({}, 'terms/new');
    this.setState({
      newTermModalIsOpen: true
    });
  },

  closeNewTermModal: function () {
    this.setState({
      newTermModalIsOpen: false
    });
  },

  animateGif: function (){
  },

  stopGif: function (){
  },

  render: function () {
    var signInModal = "";
    if (this.state.signInModalIsOpen){
      signInModal = <SignInForm closeHandler={this.closeSignInModal} />;
    }
    var newTermModal;
    var fetchingModal;
    if (this.state.fetchingModalIsOpen) {
      fetchingModal = (
        <Modal closeHandler={this.closeFetchingModal} >
          <Spinner />
        </Modal>

      );
    } else {
      fetchingModal = <div></div>;
    }

    if (this.state.newTermModalIsOpen){
      newTermModal = <Modal closeHandler={this.closeNewTermModal} closeButton="show" >
        <NewTermForm />
      </Modal>;
    } else {
      newTermModal = <div></div>;
    }
    return (
      <div id="content">
        {fetchingModal}
        {newTermModal}
        {signInModal}
        <ErrorComponent />

        <Header openNewTermModal={this.openNewTermModal}
          openSignInModal={this.openSignInModal} />
        <main className="group">
          {this.props.children}

          <Sidebar onmouseover={this.animateGif} onmouseout={this.stopGif}>
            <NewTermButton clickCallback={this.openNewTermModal} text="Add a term" />
            <img src={this.state.gifUrl} />
          </Sidebar>
        </main>
      </div>
    );
  }
});

module.exports = App;
