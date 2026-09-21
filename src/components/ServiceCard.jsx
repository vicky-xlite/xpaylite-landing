import { Box, Typography, Paper } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

function ServiceCard({ title, description, icon, number }) {
  // Convert "01", "02", etc. to 1, 2, etc.
  const displayNumber = parseInt(number).toString()
  
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #eaeff5",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "visible", // Changed from "hidden" to "visible" to show floating icon
        mt: 4, // Add margin top to make space for floating icon
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          borderColor: "#d0d9e8"
        }
      }}
    >
      {/* Floating Icon - Positioned outside the card */}
      <Box
        sx={{
          position: "absolute",
          top: -30,
          left: 24,
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2563eb",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          border: "1px solid #eaeff5",
          zIndex: 10,
          "& svg": {
            fontSize: 30
          }
        }}
      >
        {icon}
      </Box>

      {/* Main Content */}
      <Box sx={{ p: 3, pt: 4, position: "relative", zIndex: 2 }}> {/* Increased top padding */}
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#1e293b",
            mb: 1,
            lineHeight: 1.4
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#64748b",
            mb: 2,
            lineHeight: 1.5
          }}
        >
          {description}
        </Typography>

        {/* Read More Link */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "#2563eb",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
            "&:hover": {
              gap: 1,
              color: "#1d4ed8"
            }
          }}
        >
          Read More
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>

      {/* Background Number - Positioned in bottom right */}
      <Typography
        sx={{
          position: "absolute",
          bottom: 5,
          right: 15,
          fontSize: "80px",
          fontWeight: 800,
          color: "#f1f5f9",
          lineHeight: 1,
          opacity: 0.5,
          zIndex: 1,
          userSelect: "none"
        }}
      >
        {displayNumber}
      </Typography>
    </Paper>
  )
}

export default ServiceCard