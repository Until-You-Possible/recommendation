import * as React from "react";
import 'antd/dist/antd.css';
import './App.css';
import PcHomeComponent from "./view/pc/home"
import {BrowserRouter as Router, Navigate, Route, Routes,} from "react-router-dom";
import Login from "./view/pc/login";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="*" element={<Navigate to="/home/index" />} />
                  <Route path="/home/*" element={<PcHomeComponent/>}/>
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
