import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './context';
import './index.css';
import Root from './root';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <Root />
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



// function one(func){
//   if(typeof func == 'function' ){
//      var res = func();
//      return 1 + res
//   }
//   if( (typeof func == 'string') ){
//     return 1 + func
//   }
//   if(func !== '' ){
//     return 1;
//   }
// }


// function two(func){
//   if(typeof func == 'function' ){
//     var res = func();
//     return 2 + res
//   }
//   if( (typeof func == 'string') ){
//     return 2 + func
//   }
//   if(func !== '' ){
//     return 2;
//   }
// }


// // -----------------------

// function plus(func){
//   if(typeof func == 'function' || (typeof func == 'string') ){
//     var res = func();
//     return  '+' + res
//   }
//   if(func!==''){
//     return '+';
//   }
// }

// console.log(((one(plus(two)))));



