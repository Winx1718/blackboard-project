import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Development from "./pages/Development";
import Design from "./pages/Design";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Development" component={Development} />
          <Route path="/Design" component={Design} />
          <Route path="/Marketing" component={Marketing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
