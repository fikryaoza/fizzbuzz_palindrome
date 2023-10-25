import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
// import Team from "./pages/Team";
import Fizzbuzz from "./pages/Fizzbuzz";
import Palindrome from "./pages/Palindrome";
// import Tasks from './pages/Tasks';
// import Chats from './pages/Chats';
// import Analytics from './pages/Analytics';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fizzbuzz" element={<Fizzbuzz />} />
          <Route path="/palindrome" element={<Palindrome />} />
          {/* <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
