import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import Layout from './Layout';
import Home from './Home';
import About from './About'

import './index.scss';

import { CadeParana, Cec, Courier, Tcp, Yandeh, Zipgo } from './my-work'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="my-work">
            <Route path="cadeparana" element={<CadeParana />} />
            <Route path="cec" element={<Cec />} />
            <Route path="courier" element={<Courier />} />
            <Route path="tcp" element={<Tcp />} />
            <Route path="yandeh" element={<Yandeh />} />
            <Route path="zipgo" element={<Zipgo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
