import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Basic router system</h1>
        <Link to="/">Home</Link> <br />
        <Link to="/contact">Contact</Link> <br />
        <Link to="/users">Users</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={Users} />
          <Route component={error404} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home component</h2>;
}

function Contact() {
  return <h2>Contact component</h2>;
}

function Users() {
  return <h2>Users component</h2>;
}

function error404() {
  return <h2>Error 404</h2>;
}
export default App;
