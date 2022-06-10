import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import App from './App';
import Layout from './components/Layout'
import Templates from "./routes/templates";
import About from "./routes/about";
import Guide from "./routes/guide";
import Beginners from "./routes/beginners";
import Sbir from "./routes/sbir";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />} />
            <Route path="/guide" element={ <Guide />}>
              <Route path="/guide/beginners" element={ <Beginners />} />
              <Route path="/guide/sbir" element={ <Sbir />} />
              {/* <Route exact path="/post/:id" render={props => <Post {...props} />} /> */}
            </Route>
          <Route path="/about" element={ <About />} />
          <Route path="/templates" element= { <Templates />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
