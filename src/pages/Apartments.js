import React from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";


import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Ratings from "../components/Ratings";


const Apartments = () => {
 
  return (
  document.title = "Kasa - Logement";
  let selectedId = useParams();
  let title;
  let pictures;
  let description;
  let rating;
  let location;
  let equipments; );
}
 




  for(let apartment of Apartments){
      if (_.id === selectedId.id) {
          title = apartment.title;
          pictures = apartment.pictures;
          description = apartment.description;
          rating = apartment.rating;
          location = apartment.location;
          equipments = apartment.equipments;
         
      }
  });

// const Apartments = () => {
//   const { id } = useParams();
//   return (
//     <div>
//       <h2>{id}</h2>
//     </div>
//   );
// };

// export default Apartments;
