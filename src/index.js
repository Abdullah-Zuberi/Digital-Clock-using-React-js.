import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";

let currDate = new Date(2020,5,5,24);
currDate = currDate.getHours();
let greeting = '';
const cssStyle = {};

if(currDate >= 1 && currDate <12){
   greeting= 'Good Morning';
   cssStyle.color = 'green';
}else if(currDate>=12 && currDate < 19){
  greeting= "Good Afternoon";
  cssStyle.color = 'Orange';
}else{
  greeting= "Good Night";
  cssStyle.color = 'Black';
}
 
ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>,
  </div>
  </>,
   document.getElementById("root")
);  



// import React from "react";
// import ReactDOM  from "react-dom";

// const name="Abdullah";

// ReactDOM.render(

//   <>
//   <h1 contentEditable="true">My Name is {name}</h1>
//   <img src="https://picsum.photos/200/300" />
//   </>,
//   document.getElementById("root")
// );



// import React from "react";
// import ReactDOM  from "react-dom";

// ReactDOM.render(
//  <>
 
//   <h1>Netflix Series Picker</h1>,
//   <p>Here are the list of my fav 5 Netflix Series</p>
//   <ol>
//   <li> DARK </li>
//   <li> Extra curricular </li>
//   <li> My Holo love </li>
//   <li> My First-2 love </li>
//   <li> Mr Robot </li>
//   </ol>

//   </>,

//   document.getElementById("root") 
// );



// import React from "react";
// import ReactDOM  from "react-dom";

// const name="Abdullah";
// const currDate = new Date().toLocaleDateString();
// const currTime= new Date().toLocaleTimeString();

// ReactDOM.render(
// <>
// <h1>Hello,My Name is {name} </h1>
// <p>Current Date is= {currDate} </p>
// <p>Current Time is= {currTime} </p>
// </>,
// document.getElementById("root")
// );