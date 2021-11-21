import React from 'react';
import { Link, Router, Route, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, News, Exchanges, Cryptocurrencies, HomePage, CryptoDetails } from './components';


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" component={<HomePage />} />
                            <Route exact path="/news" element={<News />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer">
            
            </div>
        </div>
    )
}

export default App;
