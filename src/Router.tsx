import { Route } from "wouter";
import OrdersPage from "./pages/OrdersPage";
import MerchantsPage from "./pages/MerchantsPage";
import StatisticsPage from "./pages/StatisticsPage";
import MerchantDetailsPage from "./pages/MerchantDetailsPage";
import LoginPage from "./pages/LoginPage";

const Router = () => {
  return (
    <div>
      <Route path="/" component={StatisticsPage} />
      <Route path={"/login"} component={LoginPage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/merchants" component={MerchantsPage} />
      <Route path={"/merchants/:id"} component={MerchantDetailsPage} />
    </div>
  );
};

export default Router;
