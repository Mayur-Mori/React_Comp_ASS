import React, { useState } from 'react'
import styles from "./Inc.css";
// import styles from '../Components/style1.module.css';

 const Increment_Decrement = () => {
    const [count,setCount] = useState(0);
  return (
    <>
      <div className='incDecMain'>
        <h2 className='heading'>React Web</h2>
        <p className='counter'>Count: {count}</p>
        <div>
          <button className='action' onClick={() => { if (count > 0) setCount(count - 1); }}>Decrement</button>
          <button className='action' onClick={() => { setCount(count + 1); }}>Increment</button>
          <br />
          <button className='action' onClick={() => { setCount(0); }}>Reset</button>
        </div>
      </div>
   
    </>
  )
}
export default Increment_Decrement;