import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layouts/Navbar";
import EditUser from "./components/users/EditUser";
import AddUser from "./components/users/AddUser";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/users/add" component={AddUser} />

          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/view/:id" component={ViewUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
