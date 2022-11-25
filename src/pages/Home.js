import Banner from "../components/Banner";
import Card from "../components/Card";
import Logements from "../assets/data/logements.json";
import bannerHome from "../assets/images/banner_image.png";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="Home">
      <Banner image={bannerHome} title="Chez vous,  et partout ailleurs" />
      <div className="appart">
        {Logements.map((item) => {
          return (
            <Card
              className="link"
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
