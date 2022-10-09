import React from 'react'
import {Link} from "react-router-dom";

const Home: React.FC = () => {


  return (
    <div>
        Home
        <div>
            <Link to='/detail'>Go details</Link>
        </div>
    </div>
  )
}

export default Home
