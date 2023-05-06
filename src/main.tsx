import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import 'normalize.css';
import './styles/index.scss';

import { Main } from './components/layouts/Main';
import { Catalog } from './components/views/Catalog';
import { Product } from './components/views/Product';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Main>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Main>
  </BrowserRouter>,
);
