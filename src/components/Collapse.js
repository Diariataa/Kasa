// import React, { useState } from "react";
// import "../styles/Collapse.css";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";

// const Collapse = () => {
//   const [clicked, setClicked] = useState(false);

//   const toggle = (index) => {
//     if (clicked === index) {
//       // si le bouton cliquer est actif alors fermer
//       return setClicked(null);
//     }
//     setClicked(index);
//   };
//   return (
//     <Container>
//       <Wrap onClick={() => toggle(index)} key={index}>
//         <h3>{title}</h3>
//         <span>{clicked === index ? FaChevronDown : FaChevronUp}</span>
//         <ul>
//           {props.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </Wrap>
//       <DropDown></DropDown>
//     </Container>
//   );
// };
// //   drops.map((drop, index)=> {
// //     key = {index}, collapse = {drop.collapse}
// //   })
// //   return (
// //     <article>

// //     </article>
// //   );
// // };

// // export default Collapse;
