import React from 'react';
import style from './App.module.scss'
import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import Quiz from "./components/Quiz/Quiz";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className={style.wrapper}>
            <Header/>
            <Main/>
            <Quiz/>
            <Footer/>
        </div>
    );
}

export default App;
