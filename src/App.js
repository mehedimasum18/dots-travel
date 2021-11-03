
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Discount from "./Pages/Discount/Discount";
import Login from "./Pages/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Services from "./Pages/Home/Services/Services";
import Order from "./Pages/Order/Order";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import Bookings from "./Pages/Bookings/Bookings";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
           
            <PrivetRoute exact path="/myOrder">
              <Order></Order>
            </PrivetRoute>
            <PrivetRoute path="/manageOrder">
              <ManageAllOrders></ManageAllOrders>
            </PrivetRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route>
              <Bookings></Bookings>
            </Route>

            <Route>
              <NotFound path="*"></NotFound>
            </Route>
          </Switch>
          <Discount></Discount>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
