import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";

const themeConfig = {
  theme: {
    MapToken: {
      // colorPrimary: '#8f9ac3',
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider {...themeConfig}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);

