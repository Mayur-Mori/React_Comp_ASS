import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Assignment_Menu from './components/Assignment_Menu';
import ListView from './components/ListView';
import Increment_Decrement from './components/Increment_Decrement';

const App = () => {
  const arr = ["Use Array.Map", "Not a For Loop", "Give each item a unique key", "Avoid using array index as  the key"];
  return (
    <div className="App">
<BrowserRouter>
<Assignment_Menu/>
<Routes>
  <Route path='/ListView' element={<ListView myArray = {arr}/>}>
  </Route>
  <Route path='/Increment_decrement' element={<Increment_Decrement/>}>

  </Route>

</Routes>
</BrowserRouter>
    </div>
  )
}

export default App;