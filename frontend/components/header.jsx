var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
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
    );
  }
});
