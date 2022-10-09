import React from 'react'
import {Link} from "react-router-dom";

const Home: React.FC = () => {


  return (
    <div>
        <h1 className="text-3xl font-bold underline bg-blend-color-burn text-amber-700">
            Hello Home world!
        </h1>
        <div>
            <Link to='/detail'>Go details</Link>
        </div>
    </div>
  )
}

export default Home
