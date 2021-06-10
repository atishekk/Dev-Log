import React from 'react';
import Theme from '../theme/Theme';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export function notif() {
  return toast('Code Copied', {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      backgroundColor: Theme.nord0,
      color: Theme.nord6,
    }
  });
}
export function Notif() {

  return (
    <ToastContainer
      position="top-right"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />)
}

