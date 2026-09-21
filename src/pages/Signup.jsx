// import AuthForm from "../components/AuthForm"

// function Signup() {

//   const fields = [
//     { label: "Full Name", type: "text" },
//     { label: "Email", type: "email" },
//     { label: "Password", type: "password" }
//   ]

//   return (
//     <AuthForm
//       title="Create an Account"
//       fields={fields}
//       buttonText="Sign Up"
//       footerText="Already have an account?"
//       footerLinkText="Login"
//       footerLink="/login"
//     />
//   )
// }

// export default Signup

import { Box, TextField, Button, Typography, Paper } from "@mui/material"
import { Link } from "react-router-dom"

function Login() {
  return (
    // 🌑 OUTER BACKGROUND
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // px: 13,
        // py: 1,
      }}
    >

      {/* 🧊 CENTERED BANNER */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          height: "80vh",
          display: "flex",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >

        {/* LEFT SIDE (IMAGE) */}
        <Box
          sx={{
            flex: 1.5,
            backgroundImage: "url('/images/xpay123jepg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* RIGHT SIDE (LOGIN PANEL) */}
        {/* <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8fafc",
          }}
        >
          <Box sx={{ width: "80%", maxWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 1, color: "#0B3D91" }}
            >
              XPayLite
            </Typography>

            <Typography variant="body2" sx={{ mb: 3, color: "#64748b" }}>
              Login to your account
            </Typography>

            <TextField
              label="Mobile Number"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                py: 1.2,
                borderRadius: 5,
                background: "linear-gradient(90deg, #6a5af9, #8b5cf6)",
              }}
            >
              SIGN IN
            </Button>

            <Typography sx={{ mt: 2, fontSize: 14 }}>
              <Link to="#">Forgot password?</Link>
            </Typography>

            <Typography sx={{ mt: 1, fontSize: 14 }}>
              New User? <Link to="/signup">Register here</Link>
            </Typography>

          </Box>
        </Box> */}

        {/* RIGHT SIDE (SIGNUP PANEL) */}
<Box
  sx={{
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8fafc",
    overflowY: "auto"
  }}
>
  <Box sx={{ width: "90%", maxWidth: 500 }}>

    {/* TITLE */}
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{ mb: 2, color: "#0B3D91", textAlign: "center" }}
    >
      Member Registration
    </Typography>

    {/* FORM GRID */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2,
        height: '26vh'
        // py: 1
      }}
    >

      <TextField label="Name" fullWidth size="small"/>
      <TextField label="Email" fullWidth size="small"/>

      <TextField label="Mobile" fullWidth size="small"/>
      <TextField label="State" fullWidth size="small"/>

      <TextField label="City" fullWidth size="small"/>
      <TextField label="Pincode" fullWidth size="small"/>

    </Box>

    {/* ADDRESS (FULL WIDTH) */}
    <TextField
      label="Address"
      fullWidth
      multiline
      rows={2}
      sx={{ mt: 2 }}
      size="small"
    />

    {/* BUTTON */}
    <Button
      variant="contained"
      fullWidth
      sx={{
        mt: 3,
        py: 1.2,
        borderRadius: 5,
        background: "linear-gradient(90deg, #6a5af9, #8b5cf6)",
      }}
    >
      SUBMIT
    </Button>

    {/* FOOTER */}
    <Typography sx={{ mt: 2, fontSize: 14, textAlign: "center" }}>
      Already have an account? <Link to="/login">Login</Link>
    </Typography>

  </Box>
</Box>

      </Box>
    </Box>
  )
}

export default Login