// import React, { useState } from "react";

// const App = () => {
//   let time = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(time);

//   const UpdateTime = () => {
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
//   };

//   setInterval(UpdateTime, 1000);
//   return (
//     <>
//       <h1>{ctime}</h1>
//       {/* <button onClick={UpdateTime}>get time</button> */}
//     </>
//   );
// };

// export default App;

// import React, { useState }  from "react";

// const App = () => {

//   let newTime = new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(newTime);

//   const UpdateTime = () => {
//     let newTime = new Date().toLocaleTimeString();
//     setCtime(newTime);
//   }

//   return(
//    <>
//     <h1>{ctime}</h1>
//     <button onClick={UpdateTime}>get Time</button>
//    </>
//  );
// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
// const state = useState();

// const [count,setCount] = useState(0);

// const IncNum = () =>{
//  setCount(count + 1);
// // setCount(count +10); //for +10
// // setCount(count-1); //for decrement
// };

// return(
// <>
//   <h1> {count} </h1>
//   <button onClick={IncNum}>Click me</button>
// </>
// );
// };
// export default App;

// import React from "react";

// const SlotM = (props) => {
//     let x = props.x;
//     let y = props.y;
//     let z = props.z;

// if( (x===y) &&  (y===z))
// return(
//     <>
//         <div className='slot_inner'>

//         <h1>
//         {x} {y} {z} </h1>
//         <h1>This is Matching.</h1>
//         <hr/>
//         </div>
//     </>
// );else{
//     return(
//         <>
//             <div className='slot_inner'>
//             <h1>
//             {x} {y} {z} </h1>
//             <h1>This is Not Matching.</h1>
//             <hr/>
//             </div>
//         </>
//     );
// }
// }

// const App = () => {
//   return (
//     <>
//       <h1 className="heading_style">
//         🎰 Welocme to <span style={{fontWeight:'bold'}}>Slot machine game</span>🎰
//       </h1>
//     <div className="slot machine">
//       <SlotM  x='😊' y='😊'  z='😊'/>
//       <hr/>
//       <SlotM x='😊' y='😆' z='😊'/>
//       <hr/>
//       <SlotM x='🍎' y='🍌' z='🍎'/>
//       <hr/>
//       <SlotM x='💑' y='💑'  z='💑'/>
//     </div>
//     </>
//   );
// };
// export default App;

// import React from "react";
// import {add, sub, div , mul} from "./Calc";

// function  App(){
//   return(
//     <>
//      <ul>
//       <li>The add of two no is {add(30,3)}</li>
//       <li>The sub of two no is {sub(30,3)}</li>
//       <li>The div of two no is {div(10,3)}</li>
//       <li>The mul of two no is{mul(10,3)}</li>,
//     </ul>
//     </>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   let currDate = new Date(2023,21,3,16);
// currDate = currDate.getHours();
// let greeting = '';
// const cssStyle = {};

// if(currDate >= 1 && currDate <12){
//    greeting= 'Good Morning';
//    cssStyle.color = 'green';
// }else if(currDate>=12 && currDate < 19){
//   greeting= "Good Afternoon";
//   cssStyle.color = 'Orange';
// }else{
//   greeting= "Good Night";
//   cssStyle.color = 'Black';
// }
// return(
//   <>
//   <div>
//   <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>,
//   </div>
//   </>
// );
// }

// export default App;




// INDEX FILE

//   <>

//   <h1 className='heading_style'>List of top 5 Netflix Series in 2020</h1>
//     <Card 
//     imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
//      title="A Netflix Original Series"
//      sname="DARK"
//      link= "https://www.netflix.com/in/title/80990668?source=35"
//     />
//     <Card
//     imgsrc="https://wallpapercave.com/wp/wp7418550.jpg"
//     title="A Netflix Original Series"
//     sname="Extra Curricular"
//     link= "https://www.netflix.com/in/title/80990668?source=35"
//     />
//     <Card
//     imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
//     title="A Netflix Original Series"
//     sname="Stranger Things"
//     link= "https://www.netflix.com/in/title/80990668?source=35"
//     />
//   </>,
//   document.getElementById("root")
// );        

  // import React from "react";
// import ReactDOM  from "react-dom";
// import App from './App'
// import "./index.css";

// ReactDOM.render(<App/>,document.getElementById("root"));

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




