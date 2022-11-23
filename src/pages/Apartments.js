import React from "react";
import { useParams } from "react-router-dom";
import logements from "../assets/data/logements.json";
import Slideshow from "../components/Slideshow";
import Ratings from "../components/Ratings";
import Host from "../components/Host";
import Tags from "../components/Tag";
import Collapse from "../components/Collapse";
import "../styles/Apartment.css";
const Apartments = () => {
  const { _id } = useParams();
  const apartment = logements.find((apartment) => apartment.id === _id);

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = apartment;
  return (
    <section className="apartments-display">
      {/* Afficher le carousel */}
      <div className="display_slideshow">
        <Slideshow pictures={pictures} />
      </div>
      {/* Afficher les noms du logement */}
      <div className="apartments_display_details">
        <div className="aparments-left">
          <div className="apartments-title">
            <h1>{title}</h1>
            <h2>{location}</h2>
          </div>
          {/* Les Tags du logement */}
          <div className="apartments_tags">
            <Tags tags={tags} />
          </div>
        </div>
        <div className="apartments-right">
          <div className="apartments-host">
            <div className="apartments-rating">
              <Ratings rating={rating} />
            </div>
            <div className="logement_owner">
              <Host host={host} />
            </div>
          </div>
        </div>
      </div>
      {/* Afficher le collapse de description et equipements */}
      <div className="apartments-collapses">
        <div className="apartments-description">
          <Collapse props={description} title={"Description"} />
        </div>
        <div className="apartments-equipements">
          <Collapse props={equipments} title={"Equipements"} />{" "}
        </div>
      </div>
    </section>
  );
};

export default Apartments;
