import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Layout from './styles/layout/Layout';
// import { About, Home, Portfolio, Contact, NotFound } from './pages';
import './styles/main.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Suspense fallback={<h1 className="suspense heading">Loading...</h1>}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
