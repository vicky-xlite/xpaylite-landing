// import { Box, Typography, Button, Grid, Container } from "@mui/material"
// import { useState } from "react"
// import StoreIcon from "@mui/icons-material/Store"
// import ApartmentIcon from "@mui/icons-material/Apartment"
// import CodeIcon from "@mui/icons-material/Code"

// const DATA = {
//   retailer: {
//     title: "Become A xpaylite Retailer",
//     points: [
//       "Become Aatmanirbhar & Earn Up-To 50000 every month",
//       "Completely Free Zero Charge Activation of All the Services",
//       "Earn Real Time Commission on Every Transaction",
//       "One Android Application with All the Services",
//       "Most Advanced & Secured Platform for Transactions",
//       "Complete Reports & Dedicated Support Team"
//     ]
//   },
//   distributor: {
//     title: "Become A Distributor",
//     points: [
//       "Build your own retailer network",
//       "Earn from every retailer transaction",
//       "Unlimited retailer onboarding",
//       "Advanced dashboard & analytics",
//       "Dedicated onboarding & support"
//     ]
//   },
//   api: {
//     title: "API Partner Integration",
//     points: [
//       "Seamless API integration",
//       "Secure & fast transactions",
//       "Complete developer documentation",
//       "Custom business solutions",
//       "24/7 technical support"
//     ]
//   }
// }

// function BusinessSection() {
//   const [activeTab, setActiveTab] = useState("retailer")
//   const current = DATA[activeTab]

//   return (
//     <Box sx={{ py: 12, background: "#f3f6fb" }}>
//       <Container maxWidth="lg">
//         <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

//           {/* LEFT SIDE (IMAGE COLLAGE) */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: 400,
//                 height: 400,
//                 mx: "auto"
//               }}
//             >
//               {/* Circle background */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   width: "100%",
//                   height: "100%",
//                   borderRadius: "50%",
//                   background: "#dbeafe"
//                 }}
//               />

//               {/* Images */}
//               <Box
//                 component="img"
//                 src="/images/img1.png"
//                 sx={{
//                   position: "absolute",
//                   top: 30,
//                   left: 30,
//                   width: 240,
//                   borderRadius: "16px"
//                 }}
//               />
//               <Box
//                 component="img"
//                 src="/images/img3.png"
//                 sx={{
//                   position: "absolute",
//                   top: 20,
//                   right: -20,
//                   width: 300,
//                   borderRadius: "16px"
//                 }}
//               />
//               <Box
//                 component="img"
//                 src="/images/img4.png"
//                 sx={{
//                   position: "absolute",
//                   bottom: 30,
//                   left: 90,
//                   width: 220,
//                   borderRadius: "16px"
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* RIGHT SIDE */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 background: "#263959",
//                 color: "#fff",
//                 borderRadius: "24px",
//                 p: { xs: 3, md: 5 },
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
//                 height: '80vh'
//               }}
//             >

//               {/* Small Heading */}
//               <Typography sx={{ opacity: 0.7, mb: 1 }}>
//                 Business Opportunities
//               </Typography>

//               {/* Main Heading */}
//               <Typography
//                 sx={{
//                   fontSize: { xs: "26px", md: "34px" },
//                   fontWeight: 700,
//                   mb: 3,
//                   lineHeight: 1.2
//                 }}
//               >
//                 XPaylite Business Opportunities
//               </Typography>

//               {/* Tabs */}
//               <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>

//                 <Button
//                   startIcon={<StoreIcon />}
//                   onClick={() => setActiveTab("retailer")}
//                   sx={{
//                     borderRadius: "12px",
//                     px: 3,
//                     background: activeTab === "retailer" ? "#3b82f6" : "#e5e7eb",
//                     color: activeTab === "retailer" ? "#fff" : "#111",
//                     textTransform: "none",
//                     fontWeight: 600
//                   }}
//                 >
//                   Retailer
//                 </Button>

//                 <Button
//                   startIcon={<ApartmentIcon />}
//                   onClick={() => setActiveTab("distributor")}
//                   sx={{
//                     borderRadius: "12px",
//                     px: 3,
//                     background: activeTab === "distributor" ? "#3b82f6" : "#e5e7eb",
//                     color: activeTab === "distributor" ? "#fff" : "#111",
//                     textTransform: "none",
//                     fontWeight: 600
//                   }}
//                 >
//                   Distributor
//                 </Button>

//                 <Button
//                   startIcon={<CodeIcon />}
//                   onClick={() => setActiveTab("api")}
//                   sx={{
//                     borderRadius: "12px",
//                     px: 3,
//                     background: activeTab === "api" ? "#3b82f6" : "#e5e7eb",
//                     color: activeTab === "api" ? "#fff" : "#111",
//                     textTransform: "none",
//                     fontWeight: 600
//                   }}
//                 >
//                   API Partner
//                 </Button>

//               </Box>

//               {/* Dynamic Title */}
//               <Typography
//                 sx={{
//                   fontSize: "20px",
//                   fontWeight: 600,
//                   mb: 2
//                 }}
//               >
//                 {current.title}
//               </Typography>

//               {/* Description */}
//               <Typography
//                 sx={{
//                   fontSize: "16px",
//                   opacity: 0.8,
//                   mb: 3,
//                   lineHeight: 1.6,
//                   width: '80%'
//                 }}
//               >
//                 This is the perfect platform for anyone who has a retail
//                 network or is looking forward to building one.
//               </Typography>

//               {/* Points */}
//               <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
//                 {current.points.map((point, i) => (
//                   <Typography
//                     key={i}
//                     sx={{
//                       fontSize: "15px",
//                       opacity: 0.9,
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 1
//                     }}
//                   >
//                     ✔ {point}
//                   </Typography>
//                 ))}
//               </Box>

//             </Box>
//           </Grid>

//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default BusinessSection


import { Box, Typography, Button, Grid, Container } from "@mui/material"
import { useState } from "react"
import StoreIcon from "@mui/icons-material/Store"
import ApartmentIcon from "@mui/icons-material/Apartment"
import CodeIcon from "@mui/icons-material/Code"

const DATA = {
  retailer: {
    title: "Become A xpaylite Retailer",
    points: [
      "Become Aatmanirbhar & Earn Up-To 50000 every month",
      "Completely Free Zero Charge Activation of All the Services",
      "Earn Real Time Commission on Every Transaction",
      "One Android Application with All the Services",
      "Most Advanced & Secured Platform for Transactions",
      "Complete Reports & Dedicated Support Team"
    ]
  },
  distributor: {
    title: "Become A Distributor",
    points: [
      "Build your own retailer network",
      "Earn from every retailer transaction",
      "Unlimited retailer onboarding",
      "Advanced dashboard & analytics",
      "Dedicated onboarding & support"
    ]
  },
  api: {
    title: "API Partner Integration",
    points: [
      "Seamless API integration",
      "Secure & fast transactions",
      "Complete developer documentation",
      "Custom business solutions",
      "24/7 technical support"
    ]
  }
}

function BusinessSection() {
  const [activeTab, setActiveTab] = useState("retailer")
  const current = DATA[activeTab]

  return (
    <Box sx={{ py: { xs: 6, md: 12 }, background: "#f3f6fb" }}>
      <Container maxWidth="lg">
        <Grid container spacing={10} alignItems="center" justifyContent='center'>

          {/* LEFT SIDE */}
          <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: 320, md: 400 },
                aspectRatio: "1 / 1",
                maxWidth: 400,
                mx: "auto"
              }}
            >
              {/* Background Circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#dbeafe"
                }}
              />

              {/* Image 1 */}
              <Box
                component="img"
                src="/images/img1.png"
                sx={{
                  position: "absolute",
                  top: { xs: 10, md: 30 },
                  left: { xs: 10, md: 10 },
                  width: { xs: 140, md: 240 },
                  borderRadius: "16px"
                }}
              />

              {/* Image 2 */}
              <Box
                component="img"
                src="/images/img3.png"
                sx={{
                  position: "absolute",
                  top: { xs: 0, md: 20 },
                  right: { xs: 0, md: -20 },
                  width: { xs: 180, md: 330 },
                  borderRadius: "16px"
                }}
              />

              {/* Image 3 */}
              <Box
                component="img"
                src="/images/img4.png"
                sx={{
                  position: "absolute",
                  bottom: { xs: 10, md: 30 },
                  left: { xs: 60, md: 90 },
                  width: { xs: 140, md: 200 },
                  borderRadius: "16px"
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "#263959",
                color: "#fff",
                borderRadius: "24px",
                p: { xs: 3, sm: 4, md: 5 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                textAlign: { xs: "center", md: "left" }
              }}
            >
              {/* Small Heading */}
              <Typography sx={{ opacity: 0.7, mb: 1 }}>
                Business Opportunities
              </Typography>

              {/* Main Heading */}
              <Typography
                sx={{
                  fontSize: { xs: "22px", sm: "26px", md: "34px" },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2
                }}
              >
                XPaylite Business Opportunities
              </Typography>

              {/* Tabs */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mb: 3,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" }
                }}
              >
                <Button
                  startIcon={<StoreIcon />}
                  onClick={() => setActiveTab("retailer")}
                  sx={{
                    borderRadius: "12px",
                    px: 2.5,
                    background: activeTab === "retailer" ? "#3b82f6" : "#e5e7eb",
                    color: activeTab === "retailer" ? "#fff" : "#111",
                    textTransform: "none",
                    fontWeight: 600
                  }}
                >
                  Retailer
                </Button>

                <Button
                  startIcon={<ApartmentIcon />}
                  onClick={() => setActiveTab("distributor")}
                  sx={{
                    borderRadius: "12px",
                    px: 2.5,
                    background: activeTab === "distributor" ? "#3b82f6" : "#e5e7eb",
                    color: activeTab === "distributor" ? "#fff" : "#111",
                    textTransform: "none",
                    fontWeight: 600
                  }}
                >
                  Distributor
                </Button>

                <Button
                  startIcon={<CodeIcon />}
                  onClick={() => setActiveTab("api")}
                  sx={{
                    borderRadius: "12px",
                    px: 2.5,
                    background: activeTab === "api" ? "#3b82f6" : "#e5e7eb",
                    color: activeTab === "api" ? "#fff" : "#111",
                    textTransform: "none",
                    fontWeight: 600
                  }}
                >
                  API Partner
                </Button>
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  mb: 2
                }}
              >
                {current.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "15px",
                  opacity: 0.85,
                  mb: 3,
                  lineHeight: 1.6,
                  maxWidth: 500,
                  mx: { xs: "auto", md: 0 }
                }}
              >
                This is the perfect platform for anyone who has a retail
                network or is looking forward to building one.
              </Typography>

              {/* Points */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.2,
                  alignItems: { xs: "flex-start", md: "flex-start" },
                   textAlign: 'left',
                  // justifyContent: 'flex-start'
                  // alignItems: 'flex-start',
                  // bgcolor: 'red'
                }}
              >
                {current.points.map((point, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: "14.5px",
                      opacity: 0.9,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    ✔ {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default BusinessSection