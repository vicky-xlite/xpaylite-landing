import { Box, Typography, Button, Grid, Container } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"

function DownloadSection() {
  return (
    <Box sx={{ py: 12, background: "#f8fafc" }}>
      <Container maxWidth="lg">

        <Box sx={{ display: 'flex', flexDirection: {xs: 'column-reverse', md: 'row'}, justifyContent: 'space-between' }}>

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6} sx={{ width:{ xs: '100%',md: "50%"}, mt:{xs: '20px', md: 0} }}>

            {/* Small heading */}
            <Typography
              sx={{
                color: "#3b82f6",
                fontWeight: 600,
                mb: 1
              }}
            >
              Download xpaylite
            </Typography>

            {/* Main heading */}
            <Typography
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                color: "#1e3a8a",
                lineHeight: 1.2,
                mb: 3
              }}
            >
              Download xpaylite application from Google Play Store
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                fontSize: "16px",
                color: "#64748b",
                maxWidth: 500,
                mb: 4,
                lineHeight: 1.6
              }}
            >
              Signup and create your account. In 48 hours you can start your own
              business and increase your income
            </Typography>

            {/* Button */}
            <Button
              onClick={() =>
                  window.open(
                      "https://play.google.com/store/apps/details?id=com.banking.xpaylite", 
                      "_blank",
                      "noopener,noreferrer"
                  )
              }
              variant="contained"
              endIcon={<DownloadIcon />}
              sx={{
                background: "#3b82f6",
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  background: "#1e3a8a"
                }
              }}
            >
              Download App
            </Button>

          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6}>

            <Box
              sx={{
                background: "#fff",
                borderRadius: "24px",
                p: 3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Box
                component="img"
                src="/images/image.png"
                alt="app"
                sx={{
                  width: "100%",
                  maxWidth: 500
                }}
              />
            </Box>

          </Grid>

        </Box>

      </Container>
    </Box>
  )
}

export default DownloadSection