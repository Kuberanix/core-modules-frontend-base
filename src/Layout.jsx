import React from 'react';
import Header from './theme/uielements/Header';
import Footer from './theme/uielements/Footer';
import Main from './theme/uielements/Main';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </>
  );
}
