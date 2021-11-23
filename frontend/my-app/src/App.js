
import 'antd/dist/antd.css';
import './App.css';
import MobileHome from "./view/mobile/home";
import {Link, Route, BrowserRouter as Router, Routes , Switch} from "react-router-dom";

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const MissingPage = () => <h1>404</h1>

function App() {
  return (
      <Router>
          <div className="App">
              <MobileHome />
          </div>
      </Router>
  );
}

export default App;
