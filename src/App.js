import React, { Fragment, Component } from "react";
import "./App.css";
import SignUp from "./components/general_components/SignUp";
import Login from "./components/general_components/Login";
import ShopClasses from "./components/ShopClassesComponents/ShopClasses";
import Home from "./components/general_components/Home";
import Profile from "./components/profile_components/Profile";
import Toolbar from "./components/Toolbar";
import ClassInfo from "./components/ShopClassesComponents/ClassInfo";
import Footer from "./components/general_components/Footer";
import ContactUs from "./components/general_components/ContactUs";
import { BrowserRouter as Router, Link} from "react-router-dom";
import Route from "react-router-dom/Route"
import About from './components/about_components/About'
import BookClass from './components/checkout_components/BookClass'


class App extends Component {
  constructor(){
    super()
    this.saveIdToState = this.saveIdToState.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  state = {
    home: true,
    selectedClass: null,
    showSignUp: false,
    showLogin: false
  };

  saveIdToState(id){
    this.setState({
      selectedClass: id
    })
  }

  handleSignUp(e){
    e.preventDefault()
    this.setState({
      showSignUp: !this.state.showSignUp
    })
  }

  handleLogin(e){
    e.preventDefault()
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
            <Toolbar handleSignUp={this.handleSignUp} handleLogin={this.handleLogin}/>
            <Route path="/" exact={true} render =
              { (props) =>
                <Home saveIdToState = {this.saveIdToState} />
              }
              />
            <Route path="/classes" exact={true} component={ShopClasses}/>
            <Route path="/about" exact={true} component={About}/>
            <Route path="/profile" exact={true} component={Profile}/>
            <Route path="/contact" exact={true} component={ContactUs}/>
            <Route path="/book" exact={true} render={
                props => <BookClass classId={this.state.selectedClass}/>
              }
              />
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}
export default App;
