import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {ErrorBoundary} from "./components";

function App() {
  return (
      <ErrorBoundary>
        <ToastContainer
            limit={2}
            autoClose={2000}
            hideProgressBar
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            containerId="toast-container"
            position="top-center"
        />
        {Routes}
      </ErrorBoundary>
  );
}

export default App;
