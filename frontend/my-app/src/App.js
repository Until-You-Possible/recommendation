
import 'antd/dist/antd.css';
import './App.css';
import MobileHome from "./view/mobile/home";
import {Link, Route, Router, Routes, Switch} from "react-router-dom";
function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    return <h2>Topics</h2>;
}

function App() {
  return (
      // <div className="App">
      //     <MobileHome />
      // </div>
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/topics">Topics</Link>
                  </li>
              </ul>

              <Routes>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/topics">
                      <Topics />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
