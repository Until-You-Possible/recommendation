
import 'antd/dist/antd.css';
import './App.css';
import MobileHome from "./view/mobile/home";
import PcHomeComponent from "./view/pc/home"
import { BrowserRouter as Router,} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              {/*<MobileHome />*/}
              <PcHomeComponent />
          </div>
      </Router>
  );
}

export default App;
