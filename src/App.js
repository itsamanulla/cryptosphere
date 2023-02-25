import React from 'react'
import { useGetCoinsQuery } from './services/cryptoApi'
import CryptoCards from './components/CryptoCards';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import MainPage from './components/MainPage';
import './App.css';
import CoinDetail from './components/CoinDetail';
import Error from './components/Error';
const App = () => {
  const { data, isLoading, error } = useGetCoinsQuery();
  // console.log(data);
  return (
    <>
      <Router>
        <Routes>         
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/crypto/:coinId" element={<CoinDetail />} />
          <Route path='*' element={<Error />} />
        </Routes></Router>
    </>
  )
}

export default App