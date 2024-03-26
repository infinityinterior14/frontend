import logo from './logo.svg';
import './App.css';


import { Home } from './component/home/home';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom";
import { About } from './component/about/about';
import { Service } from './component/service/service';
import { Contact } from './component/contact/contact';
import { Blog } from './component/blog/blog';
import { Single } from './component/single/single';
import { Project } from './component/project/project';
import { Login } from './component/login/login';
import { Oders } from './component/book oders/oders';
import { Signup } from './component/login/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          < About />
        </Route>
        <Route path="/service">
          < Service />
        </Route>
        <Route path="/contact">
          < Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/oders">
          <Oders />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
