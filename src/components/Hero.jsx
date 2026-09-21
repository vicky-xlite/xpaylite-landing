import { Container, Grid, Typography, Button, Box } from "@mui/material"
import { Link } from "react-router-dom"
import Stats from "./Stats"
import HeroImage from "./HeroImage"
import { gradientText, subGradientText, heroStyle } from "../styles/themeStyles"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import IconButton from "@mui/material/IconButton"

const slides = [
  {
    title: "Become A Digital Banker",
    subtitle: "Offer 25+ Services",
    description:
      "Convert your shop into a mini bank and offer 25+ banking and utility services. Join XPay and increase your monthly income.",
    image: "/images/hero-img.png",
  },
  {
    title: "Grow Your Business",
    subtitle: "Earn More Daily",
    description:
      "Offer cash withdrawal services through Aadhar (AEPS) or use a mini ATM device for debit cards & earn maximum commission.",
    image: "/images/hero2.png",
  },
]

function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 7000) // change every 7 sec

    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <Box sx={heroStyle}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <AnimatePresence mode="wait">
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: {xs: 'center',md:'space-between'}, position: "relative", alignItems: 'center' }}
            key={index}
          >

            {/* LEFT ARROW */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: '-4%',
                top: "50%",
                // transform: "translateX(-50%)",
                background: "#fff",
                opacity: 0.5,
                boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                "&:hover": { background: "#fff", opacity: 0.8, transition: '0.2s ease-in-out' },
                zIndex: 10,
                display: { xs: "none", md: "flex" }
                // // opacity: 0.5,
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* RIGHT ARROW */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: { xs: 10, md: '-4%' },
                top: "50%",
                // transform: "translateY(-50%)",
                background: "#fff",
                opacity: 0.5,
                boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
                 "&:hover": { background: "#fff", opacity: 0.8, transition: '0.2s ease-in-out' },
                zIndex: 10,
                display: { xs: "none", md: "flex" }
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* LEFT CONTENT */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography sx={{ mb: 2, mt: 4, fontWeight: 600, fontSize: "16px", ...subGradientText }}>
                  India's Trusted Fintech Platform
                </Typography>

                <Typography sx={{ lineHeight: 1.1, fontSize: { xs: "34px", md: "52px" }, fontWeight: "bold", ...gradientText }}>
                  {slides[index].title} <br />
                  {slides[index].subtitle}
                </Typography>

                <Typography sx={{ mt: 3, fontSize: "18px", maxWidth: 520, ...gradientText }}>
                  {slides[index].description}
                </Typography>

              <Box sx={{display: 'flex', flexDirection:{xs: 'column',sm: 'row' ,md: 'row'}, gap: 2, mt: 4}}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="https://merchant.xpaylite.com/"
                  sx={{
                    // mt: 4,
                    px: 5,
                    py: 1.6,
                    // background: "#fff",
                    background: "#0B3D91",
                    // boxShadow: '#0B3D91'
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/contactus"
                  sx={{
                    // mt: { xs: 1,md: 4},
                    // ml: {xs: 0, md:2},
                    px: 5,
                    py: 1.6,
                    background: "#fff",
                    color: "#0B3D91",
                  }}
                >
                  Know More
                </Button>
                </Box>

                <Stats />
              </motion.div>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  component="img"
                  src={slides[index].image}
                  sx={{
                    width: "95%",
                    maxWidth: 420,
                    borderRadius: "16px",
                    border: '5px solid #0B3D91',
                    boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                  }}
                />
              </motion.div>
            </Grid>
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  )
}

export default Hero