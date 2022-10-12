import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header'

function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

export default Main;