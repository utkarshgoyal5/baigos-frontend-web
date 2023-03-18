import React from 'react'
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div className='text-center'>This is a Test Component!
        <Link to="/Test2">Link to test 2</Link>
    </div>
  )
}
