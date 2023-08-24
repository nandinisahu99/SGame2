import React, { useSyncExternalStore } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// function printdata(data)
// {
//   console.log(data);
// }
// //ASync
// const detchdata= (url,printdata)=>{
//   const data=//url data fetch time 2s
//   printdata(da
// }
// async await is a better way of dealing with promises rather than "then" .
// 2) We can use await only in front of a function that returns promise(either resolved or rejected).
// 3) We can use await only in an async function and an async function also retuns the values wrapped inside a promise.



