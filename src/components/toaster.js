import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

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
