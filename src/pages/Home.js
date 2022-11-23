import Banner from "../components/Banner";
import Card from "../components/Card";
import Logements from "../assets/data/logements.json";
import "../styles/Home.css";

import bannerHome from "../assets/images/banner_image.png";
const Home = () => {
  return (
    <div className="Home">
      {" "}
      <Banner image={bannerHome} title="Chez vous,  et partout ailleurs" />
      <div className="all-cards">
        {Logements.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              cover={item.cover}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
