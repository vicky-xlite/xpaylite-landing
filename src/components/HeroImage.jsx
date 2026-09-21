import { Box } from "@mui/material"

function HeroImage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center"
      }}
    >
      <Box
        component="img"
        src="/images/hero-img.png"
        alt="payments"
        sx={{
          width: "100%",
          maxWidth: { xs: 280, sm: 320, md: 380, lg: 420 },
          height: "auto",
          borderRadius: "16px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)"
        }}
      />
    </Box>
  )
}

export default HeroImage