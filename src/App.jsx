import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeLayout from "./layouts/HomeLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Complaint from "./pages/Complaint"
import About from "./pages/About"
import Products from "./pages/Products"
import ContactUs from "./pages/ContactUs"
import Blogs from "./pages/Blogs"
import PrivacyPolicy from "./pages/PrivacyPolicy"
// import Transactions from "./pages/Transactions"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages with Home Navbar */}

        <Route element={<HomeLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Route>

        {/* Pages WITHOUT Home Navbar */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App