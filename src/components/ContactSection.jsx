import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material"

function ContactSection() {
  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 40%, #3b82f6 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection:{xs: 'column', md: 'row'}, gap: 2}}>

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6} sx={{width: {xs: '100%',md:'40%'}}}>
            <Typography sx={{ opacity: 0.8, mb: 2 }}>
              Get In Touch
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "28px", md: "24px" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Join xpaylite Today, Become Digital Banker of Your Area!
            </Typography>

            <Typography sx={{ opacity: 0.9, lineHeight: 1.6 }}>
              Become a part of the fastest growing network of Independent
              Business Owners and become financially independent.
            </Typography>
          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={6} sx={{width: {xs:'100%',md:'50%'}}}>
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: "16px",
                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  mb: 3,
                  color: "#1e3a8a",
                }}
              >
                Fill the Form to Get Started!
              </Typography>

              {/* INPUTS */}
              <Box display="flex" flexDirection="column" gap={2}>

                <TextField
                  fullWidth
                  placeholder="Full Name"
                  variant="outlined"
                />

                <TextField
                  fullWidth
                  placeholder="Phone Number"
                />

                <TextField
                  fullWidth
                  select
                  defaultValue="Retailer"
                >
                  <MenuItem value="Retailer">XPay Retailer</MenuItem>
                  <MenuItem value="Distributor">XPay Distributor</MenuItem>
                  <MenuItem value="Distributor">Whitelabel Partner</MenuItem>
                  <MenuItem value="Distributor">B2B Partner</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  placeholder="Message (Optional)"
                />

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "#3b82f6",
                    borderRadius: "10px",
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      background: "#1e3a8a",
                    },
                  }}
                >
                  Enquire Now
                </Button>

              </Box>
            </Box>
          </Grid>

        </Box>
      </Container>
    </Box>
  )
}

export default ContactSection