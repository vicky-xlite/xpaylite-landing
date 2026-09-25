import NavLayout from "../layouts/NavLayout";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ContactSection from "../components/ContactSection";

const contactData = [
  {
    title: "Location",
    icon: <LocationOnIcon sx={{ fontSize: 40, color: "#ff5722" }} />,
    content: [
      "A-14, First Floor, Major Dhyanchand Nagar, Meerut, Uttar Pradesh - 250002"
    ],
  },
  {
    title: "Email",
    icon: <EmailIcon sx={{ fontSize: 40, color: "#f4b400" }} />,
    content: ["For information: info@xpaylite.com","For query: info@mudramarvel.in" ,"For support: support@xpaylite.com"],
    isLink: true,
    linkPrefix: "mailto:",
  },
  {
    title: "Call Us",
    icon: <CallIcon sx={{ fontSize: 40, color: "#e53935" }} />,
    content: ["+91 9634350506", " +91 9762357400"],
    isLink: true,
    linkPrefix: "tel:",
  },
];

export default function ContactUs() {
  return (
    <>
      <NavLayout title="Contact Us" subtitle="Home -> Contact Us" >

        {/* <Box sx={{ pb: 6, px: 2 }}> */}
        <Box sx={{ display: 'flex', flexDirection: { xs: "column", md: 'row' }, gap: 2 }} >
          {contactData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{
              display: "flex",   // ✅ makes child stretch
              width: '100%',
              justifyContent: 'center'
            }}>
              <Card
                elevation={0}
                sx={{
                  textAlign: "center",
                  borderRadius: 4,
                  p: { xs: 0, sm: 0 },
                  backgroundColor: "#f8fafc",
                  width: "100%", // ✅ FIX
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  //  flexDirection:{ xs: "column", md: 'row'},
                  justifyContent: "center",
                  gap: 2,
                  //   height: "max-content",
                }}
              >
                <CardContent>
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 2,
                      borderRadius: "50%",
                      backgroundColor: "#e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Title */}
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>

                  {/* Content */}
                  {item.content.map((text, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ color: "#64748b" }}
                    >
                      {item.isLink ? (
                        <a
                          href={`${item.linkPrefix}${text}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {text}
                        </a>
                      ) : (
                        text
                      )}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Box>
        <Box sx={{ mt: 4 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", md: "450px" },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.6819314748764!2d77.6459920741823!3d28.93749167016917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6154982e7e51%3A0x21c8c2e452a78d75!2sA-6%2C%20Kunda%2C%20Partapur%2C%20Meerut%2C%20Uttar%20Pradesh%20250103!5e0!3m2!1sen!2sin!4v1774675238681!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
        {/* <ContactSection /> */}

        {/* </Box> */}
      </NavLayout>
      <ContactSection />

    </>
  );
}