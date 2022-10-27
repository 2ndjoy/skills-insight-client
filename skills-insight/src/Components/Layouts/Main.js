import React from 'react';
import { Outlet } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;