import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main'
import './styles/App.css'

function App() {
  return (
    <>
    <div className="container-header-main">
      <Header />
      <Main />
    </div>
    <Footer />
    </>
  );
}

export default App;
