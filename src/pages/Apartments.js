import React from "react";
import { useParams } from "react-router-dom";
import logements from "../assets/data/logements.json";
import Slideshow from "../components/Slideshow";
import Ratings from "../components/Ratings";
import Host from "../components/Host";
import Tags from "../components/Tag";
import Collapse from "../components/Collapse";
import "../styles/Apartment.css";
import Home from "../pages/Home";
const Apartments = () => {
  const { id } = useParams();
  const apartments = logements.find((apartment) => apartment.id === id);
  if (apartments === undefined)
    return (
      <main>
        <Home />
      </main>
    );

  return (
    <section className="apartments-display">
      {/* Afficher le carousel */}
      <div className="display-slideshow">
        <Slideshow pictures={apartments.pictures} />
      </div>
      {/* Afficher les noms du logement */}
      <div className="apartments-details">
        <div className="aparments-left">
          <div className="apartments-title">
            <h1>{apartments.title}</h1>
            <h2>{apartments.location}</h2>
          </div>
          {/* Les Tags du logement host et la note*/}
          <div className="apartments-tags">
            <Tags tags={apartments.tags} />
          </div>
        </div>
        <div className="apartments-right">
          <div className="apartments-hosts">
            <div className="apartments-rating">
              <Ratings rating={apartments.rating} />
            </div>
            <div className="apartment-host">
              <Host
                name={apartments.host.name}
                picture={apartments.host.picture}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Afficher le collapse de description et equipements */}
      <div className="apartments-collapses">
        <div className="apartments-description">
          <Collapse content={apartments.description} title={"Description"} />
        </div>
        <div className="apartments-equipments">
          <Collapse content={apartments.equipments} title={"Equipements"} />
        </div>
      </div>
    </section>
  );
};

export default Apartments;
