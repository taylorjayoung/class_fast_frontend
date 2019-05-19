import React, { Fragment, Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ShopClasses from "./components/ShopClassesComponents/ShopClasses";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";


//App component holds the outermost functionality
// logging in, signing up, rendering the class page
class App extends Component {
  state = {
    home: true,
    showLogin: false,
    showSignUp: false,
    exploreClasses: false,
    user: null,
    loggedIn: false,
    renderProfile: false,
    sideDrawerOpen: false
  };

  handleClickLogin = () => {
    this.setState({ showLogin: true });
  };

  handleClickSignUp = () => {
    this.setState({ showSignUp: true, home: false });
  };

  handleClickExplore = () => {
    this.setState({
      exploreClasses: true,
      home: false,
      renderProfile: false
    });
  };

  handleClickFalse = () => {
    this.setState({ showLogin: false, showSignUp: false });
  };

  handleClickHome = () => {
    this.setState({ loggedIn: false, exploreClasses: false });
  };

  setUser = user => {
    this.setState({
      user: user,
      loggedIn: true,
      showSignUp: false,
      showLogin: false,
      exploreClasses: true,
      home: false
    });
  };

  handleClickLogout = () => {
    // fetch('http://localhost:3000/logout', {
    fetch("https://study-js-backened.herokuapp.com/logout", {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          showLogin: false,
          showSignUp: false,
          exploreClasses: false,
          loggedIn: false,
          user: null
        });
      });
  };

  renderProfileLink = () => {
    return (
      <div
        className="ProfileButton"
        id={this.state.user.id}
        onClick={event => this.renderProfile(event)}
      >
        Profile
      </div>
    );
  };

  renderProfile = event => {
    this.setState({
      renderProfile: true,
      exploreClasses: false
    });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };


  //Home component displays the sign up and explore classes options
  //if showLogin state is true, render the Login component

  //if showSignUp state is true, render the SignUp component
  //conditionally render profile link in nav bar

  //right now profile is coniditionally rendered based on state
  //but would be more ideal to create a link to profile page based on click

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <div>
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            handleClickLogin={this.handleClickLogin}
            handleClickExplore={this.handleClickExplore}
            renderProfile={this.renderProfile}
            loggedIn={this.state.loggedIn}
          />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          {this.state.home ? (
            <Home
              handleClickSignUp={this.handleClickSignUp}
              handleClickExplore={this.handleClickExplore}
            />
          ) : null}
          {this.state.showLogin || this.state.showSignUp ? (
            <div id="login_background" />
          ) : null}
          {this.state.showLogin ? (
            <Login
              handleClickFalse={this.handleClickFalse}
              setUser={this.setUser}
            />
          ) : null}

          {this.state.showSignUp ? (
            <SignUp
              handleClickFalse={this.handleClickFalse}
              setUser={this.setUser}
            />
          ) : null}
          <div className="NavBar">
            {this.state.loggedIn ? this.renderProfileLink() : null}
          </div>
          {this.state.exploreClasses ? <ShopClasses /> : null}
          {this.state.renderProfile ? <Profile user={this.state.user} /> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
