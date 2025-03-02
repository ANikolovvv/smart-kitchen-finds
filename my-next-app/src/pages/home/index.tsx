import GeneralLayout from "@/layouts/GeneralLayout";
import HomePage from "../../features/home";
import withLayout from "@/helpers/withLayout";
import PageWrapper from "@/components/atoms/PageWrapper";


const Home = () => {
  return <HomePage />
};

Home.layout =withLayout (GeneralLayout);

export default Home;
