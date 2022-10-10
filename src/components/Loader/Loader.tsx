import React from 'react'
import './Loader.scss';
import { BeatLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
      <div className="spinnerContainer">
          <BeatLoader/>
      </div>
  )
}

export default Loader;
