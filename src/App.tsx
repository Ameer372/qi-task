import Layout from "./components/Layout";
import StatisticsPage from "./pages/StatisticsPage";

const App = () => {
  return <Layout children={[<StatisticsPage />]} />;
};

export default App;
