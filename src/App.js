import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner'
import Category from './components/Category';
import CompanyPage from './Routes/company'
import request from './api/request';
import Row from './components/Row';
import { Outlet, Route, Routes } from 'react-router-dom';
import LoginPage from './Routes/login'
import MainPage from './Routes/main';
import DetailPage from './Routes/detail';
import SearchPage from './Routes/search';


const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          {/* <Route path="/search/:movieId" element={<DetailPage />} /> */}
          <Route path="/:company" element={<CompanyPage />} />

          <Route path="search" element={<SearchPage />} />

        </Route>


      </Routes>
    </div>

  );
}

export default App;
