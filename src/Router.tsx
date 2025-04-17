import { Route } from "wouter";
import OrdersPage from "./pages/OrdersPage";
import MerchantsPage from "./pages/MerchantsPage";
import StatisticsPage from "./pages/StatisticsPage";

const Router = () => {
  return (
    <div>
      <Route path="/" component={StatisticsPage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/merchants" component={MerchantsPage} />
    </div>
  );
};

export default Router;
