import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Register from "./screens/auth/register";
import ContactUs from "./screens/contactUs";
import { Dealar } from "./screens/auth/register/Dealar";
import Home from "./screens/home";
import ChoosePlane from "./screens/ChoosePlane";
import NewLists from "./screens/newLists";
import CarDetails from "./screens/carDetails";
import CarPhotos from "./screens/carPhotos";
import ContactDetails from "./screens/contactDetails";
import CarInspection from "./screens/carInspection";
import GarageBookingConfirmation from "./screens/garageBookingConfirmation";
import CarDetailPage from "./screens/carDetailPage";
import MyAccount from "./screens/Dashboard/Pages/MyAccount/MyAccount";
import MyGarage from "./screens/Dashboard/Pages/MyGarage/MyGarage";
import FavouritCars from "./screens/Dashboard/Pages/FavouritCars/FavouritCars";
import GarageBooking from "./screens/Dashboard/Pages/GarageBooking/GarageBooking";
import Inbox from "./screens/Dashboard/Pages/Chat/index";
import News from "./screens/news";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";
import { AnimatePresence } from "framer-motion";
import PublicRoute from "./routes/PublicRoute";
import { useEffect } from "react";
import ForgottenEmail from "./screens/auth/Forgotten/ForgottenEmail";
import ForgottenPassword from "./screens/auth/Forgotten/ForgottenPassword";
import GarageDetailsUpload from "./screens/GarageDashboard/Pages/garageDetailsUpload";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <ToastContainer />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/choose_plane"
            element={
              <PublicRoute>
                <ChoosePlane />
              </PublicRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/forgotten_email"
            element={
              <PublicRoute>
                <ForgottenEmail />
              </PublicRoute>
            }
          />
          <Route path="/forgotten_password" element={<ForgottenPassword />} />
          <Route path="/car_details_page/:id" element={<CarDetailPage />} />
          <Route path="/new_lists" element={<NewLists />} />
          <Route element={<PrivateRoute />}>
            <Route path="/car_photos" element={<CarPhotos />} />
            <Route path="/contact_details" element={<ContactDetails />} />
            <Route path="/car_inspection" element={<CarInspection />} />
            <Route
              path="/garage_booking_confirmation"
              element={<GarageBookingConfirmation />}
            />

            <Route path="/news" element={<News />} />
          </Route>
          <Route path="/car_details" element={<CarDetails />} />
          {/* Dashboard */}
          <Route path="/dashboard/my-account" element={<MyAccount />} />
          <Route path="/dashboard/my-garage" element={<MyGarage />} />
          <Route path="/dashboard/favourite-cars" element={<FavouritCars />} />
          <Route
            path="/dashboard/garage-bookings"
            element={<GarageBooking />}
          ></Route>
          <Route
            path="/GarageDetails-upload"
            element={<GarageDetailsUpload />}
          ></Route>
          <Route path="/dashboard/my-inbox" element={<Inbox />} />

          {/* /garage-dashboard */}
          <Route path="/garage-dashboard/my-account" element={<MyAccount />} />
          <Route
            path="/garage-dashboard/dashboard/my-garage"
            element={<MyGarage />}
          />
          <Route
            path="/garage-dashboard/dashboard/favourite-cars"
            element={<FavouritCars />}
          />
          <Route
            path="/garage-dashboard/garage-bookings"
            element={<GarageBooking />}
          ></Route>
          <Route
            path="/garage-dashboard/GarageDetails-upload"
            element={<GarageDetailsUpload />}
          ></Route>
          <Route
            path="/garage-dashboard/dashboard/my-inbox"
            element={<Inbox />}
          />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dealar" element={<Dealar />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
