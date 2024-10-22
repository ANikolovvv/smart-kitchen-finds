import GeneralLayout from "@/layouts/GeneralLayout";
import HomePage from "../../features/home";
import withLayout from "@/helpers/withLayout";

const Home = () => {
  return <HomePage />;
};

Home.layout =withLayout (GeneralLayout);

export default Home;
