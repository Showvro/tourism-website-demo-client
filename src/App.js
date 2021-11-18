import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NotFount from "./components/NotFound/NotFount";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AuthProvider from "./components/Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
import AddNewLocation from "./components/AddNewLooking/AddNewLocation";
import MyBooking from "./components/MyBooking/MyBooking";
import ManageBooking from "./components/ManageBooking/ManageBookings";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Navbar Component */}
        <Navbar></Navbar>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* Home Route */}
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* Login Route */}
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* About Route */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* Order Route */}
          <PrivateRoute path="/service/:id">
            <Order></Order>
          </PrivateRoute>
          {/* Manage Booking Route */}
          <PrivateRoute path="/managebooking">
            <ManageBooking></ManageBooking>
          </PrivateRoute>
          {/* My Booking Route */}
          <PrivateRoute path="/mybooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          {/* Add New Location Route */}
          <PrivateRoute path="/addnewlocation">
            <AddNewLocation></AddNewLocation>
          </PrivateRoute>
          {/* Not Found Route */}
          <Route path="*">
            <NotFount></NotFount>
          </Route>
        </Switch>
        {/* Footer Component */}
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
