import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {NoPage} from "./pages/NoPage";
import {Todo} from "./pages/Todo";


function App() {
  return (

    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="todo" element={<Todo/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
        <Footer/>



    </div>
  );
}

export default App;
