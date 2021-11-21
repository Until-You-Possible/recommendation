
import 'antd/dist/antd.css';
import './App.css';
import MobileHome from "./view/mobile/home";
import {BrowserRouter, Router} from "react-router-dom";

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
