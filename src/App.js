import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from "./pages/Catalog";
import MainPage from "./pages/Main";
import ItemPage from "./pages/Item";
import './style.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<MainPage />}/>
      <Route path='/catalog' exact element={<CatalogPage />}/>
      <Route path='/catalog/:id' exact element={<ItemPage />}/>
    </Routes>
  );
};

export default App;
