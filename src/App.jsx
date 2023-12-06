import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import './App.css'
import Navbar from "./common/navbar/Navbar";
import E_learning from "./components/e_learning/E_Learning";
import Footer from "./common/footer/Footer";
import SelectedCourse from "./components/selectedCourse/SelectedCourse";
import AboutUs from "./components/aboutus/AboutUs";
import OutSourcing from "./components/outSourcing/OutSourcing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PaymentMethod from "./components/paymentMethod/PaymentMethod";
import RemoteJobs from "./components/careers/RemoteJobs";
import ContactUs from "./components/contactus/ContactUs";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/remotejobs" element={<RemoteJobs />} />
          <Route path="/outsourcing" element={<OutSourcing />} />
          <Route path="/elearning" element={<E_learning />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="/selectedCourse/:id" element={<SelectedCourse />} />
          {/* ---------- PAGES ---------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;