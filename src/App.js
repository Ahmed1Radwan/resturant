import React from 'react'
import './App.css';

import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer} from './containers';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <AboutUs/>
        <SpecialMenu/>
        <Chef/>
        <Intro/>
        <Laurels/>
        <Gallery/>
        <FindUs/>
        <Footer/>
    </div>
  )
}

export default App