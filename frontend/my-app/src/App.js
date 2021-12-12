import * as React from "react";
import 'antd/dist/antd.css';
import './App.css';
import PcHomeComponent from "./view/pc/home"
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Login from "./view/pc/login";
import SellerComponent from "./components/pc/Seller";
import CategoryComponent from "./components/pc/Category";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/home/*" element={<PcHomeComponent/>}/>
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
