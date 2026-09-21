import { Outlet } from "react-router-dom"
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer/Footer"
import { Box } from "@mui/material"

function HomeLayout() {
  return (
    <>
      <NavbarHome />

      <Box>
        <Outlet />
      </Box>
      <Footer />  
    </>
  )
}

export default HomeLayout