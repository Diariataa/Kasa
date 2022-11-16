import Banner from "../components/Banner";
// import Apartments from "../components/Apartments";
import useFetch from "../components/useFetch";
import Card from "../components/Card";

const Home = () => {
  // const { data, aparts, error } = useFetch("https://localhost:3000");

  return (
    <div className="aparts">
      {error && <div>{error}</div>}
      {/* {aparts && <Apartments />} */}
      <Banner />
      <Card />
    </div>
  );
};

export default Home;
