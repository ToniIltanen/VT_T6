import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toaster extends Component {
    render(){
        return (
          <div>
            <ToastContainer autoClose={2000} type='info' />
          </div>
        );
      }
    }

export default Toaster;
