import { Route, Switch } from "wouter";
import OrdersPage from "./pages/OrdersPage";
import MerchantsPage from "./pages/MerchantsPage";
import StatisticsPage from "./pages/StatisticsPage";
import MerchantDetailsPage from "./pages/MerchantDetailsPage";
import ItemsPage from "./pages/ItemsPage";
import OrderDetialsPage from "./pages/OrderDetialsPage";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={StatisticsPage} />
      <Route path="/orders" component={OrdersPage} />
      <Route path="/items" component={ItemsPage} />
      <Route path="/merchants" component={MerchantsPage} />
      <Route path={"/merchants/:id"} component={MerchantDetailsPage} />
      <Route path={"/orders/:id"} component={OrderDetialsPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Router;
