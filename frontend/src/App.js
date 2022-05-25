import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component } from 'react';
import './App.css';

import NotesPageList from './pages/NotesPageList'
import Header from './components/Header'
import NotePage from './pages/NotePage'
// import NoPage from './pages/NoPage'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        
      <Header/>
    
      
      <BrowserRouter>

      <Routes>
  
        <Route path="/" exact="true" element={<NotesPageList />}/>  
        <Route path="/note/:id" element={<NotePage />} />
        {/* <Route path="*" element={<NoPage />} />  */}

      </Routes>

    </BrowserRouter>
    </div>
    );
  }
}

export default App;
