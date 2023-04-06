import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {ToDoForm} from "./components/ToDo/ToDoForm";

import {NoPage} from "./pages/NoPage";

function App() {
  return (

    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="todo" element={<ToDoForm/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
        <Footer/>



    </div>
  );
}

export default App;
