import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Film from "./components/Film";
import Error404 from "./components/Error404";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films/:id" component={Film} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
