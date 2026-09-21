import { Box, Typography } from "@mui/material"

function NavHero({ title, subtitle }) {
  return (
    <Box
      sx={{
        height: "60vh",
        backgroundImage: "url('/images/navLayoutbg.jpg')", // same image for all pages
        backgroundSize: "cover",
        backgroundPosition: "50% 35%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        // transform: "translateY(20px)",
      }}
    >
      {/* DARK OVERLAY */}
      <Box
        sx={{
              position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(10,20,32,0.70), rgba(30,58,138,0.85))",
        }}
      />

      {/* TEXT */}
      <Box sx={{ position: "relative", textAlign: "center", color: "#fff",display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Typography variant="h2" fontWeight="bold">
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body">
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default NavHero