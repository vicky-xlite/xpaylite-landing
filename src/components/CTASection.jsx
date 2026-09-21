import { Box, Typography, Button, Container } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

function CTASection() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },
        marginLeft: {xs: 0, md: '24px'},
        marginRight:{xs: 0, md: '24px'},
        mt: 8,
        mb: 8
      }}
    >
      <Box
        sx={{
          borderRadius: "28px",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          textAlign: "center",

          // Gradient Background
          background: "linear-gradient(90deg,#0f172a,#1e3a8a)",

          color: "#fff"
        }}
      >

        <Container maxWidth="md">

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "36px" },
              fontWeight: 700,
              mb: 2
            }}
          >
            Ready to Start Your Digital Banking Journey?
          </Typography>

          {/* Subtext */}
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              opacity: 0.9,
              mb: 4
            }}
          >
            Join thousands of successful retailers who are earning up to ₹50,000
            per month with xpaylite services.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >

            {/* Primary Button */}
            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
              }
              sx={{
                background: "#fff",
                color: "#2563eb",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "#f1f5f9"
                }
              }}
            >
              Start Free Trial
            </Button>

            {/* Secondary Button */}
            <Button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                })
              }
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "#fff"
                }
              }}
            >
              Calculate Income
            </Button>

          </Box>

        </Container>
      </Box>
    </Box>
  )
}

export default CTASection