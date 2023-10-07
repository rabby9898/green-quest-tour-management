import Banner from "../../Components/Banner/Banner";
import ClientsReview from "../../Components/ClientsReview/ClientsReview";
import Services from "../../Components/Services/Services";
import Upcoming from "../../Components/Upcoming/Upcoming";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientsReview></ClientsReview>
      <Upcoming></Upcoming>
    </div>
  );
};

export default Home;
