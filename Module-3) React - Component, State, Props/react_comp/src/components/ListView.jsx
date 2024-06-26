import React from 'react'
import styles from "./Inc.css";
import { Col } from 'react-bootstrap';


 const ListView = (props) => {
    const datalist = props.myArray.map((i, index) => {
        return <li className='listItems' key={index}>{i}</li>
      })
  return (
    <>

      <ul className='list'>
        <h2 className='listHead'>The "React Way" to Render a List</h2>
        {datalist}
      </ul>
    </>
  )
}
export default ListView;
