import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {useState} from 'react';




function App() {
  const[cart,setCart]=useState([]);
  return (
    <>
    <BrowserRouter>
    <Header cart={cart} />

    <div className='container'>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </>

  )
}

export default App;



      {/* <ClickCount/>
      <HoverCount/> */}

      {/* <Fragments/> */}
      {/* <ErrorBound>
      <Besant id={101} name="vijay"/>
      </ErrorBound>
      <ErrorBound>
      <Besant id={102} name="C"/>
      </ErrorBound>
      <ErrorBound>
      <Besant id={103} name="f"/>
      </ErrorBound> */}
      {/* <LifeCycleUnmount/> */}
        {/* <h2> Welcome to React JS</h2> */}
        {/* <LifeCycleUpdate /> */}
        {/* <State/>
        <Count/>
        <EventBinding/> */}
        {/* <CustomStyle/> */}
        {/* <ParentComponent/>
        <ClockHook/> */}
        {/* <Greet/> */}
        {/* <ConditionalRendering/> */}
          {/* <FunctionEvents/>
          <ClassEvents/>
          <StuDetails/> */}
  


