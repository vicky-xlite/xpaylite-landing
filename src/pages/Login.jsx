// import AuthForm from "../components/AuthForm"

// function Login() {

//   const fields = [
//     { label: "Email", type: "email" },
//     { label: "Password", type: "password" }
//   ]

//   return (
//     <AuthForm
//       title="Login to XPayLite"
//       fields={fields}
//       buttonText="Login"
//       footerText="Don't have an account?"
//       footerLinkText="Sign Up"
//       footerLink="/signup"
//     />
//   )
// }

// export default Login

// import { Box, TextField, Button, Typography, Paper } from "@mui/material"
// import { Link } from "react-router-dom"

// function Login() {
//   return (
//     <Box sx={{ display: "flex", height: "100vh" }}>

//       {/* LEFT SIDE (IMAGE) */}
//       <Box
//         sx={{
//           flex: 1.5,
//           backgroundImage: "url('/images/xpay123jepg.jpg')", // 👉 put your image in public folder
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* RIGHT SIDE (LOGIN PANEL) */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "#f8fafc",
//         }}
//       >
//         <Paper
//           elevation={0}
//           sx={{
//             width: "80%",
//             maxWidth: 400,
//             padding: 4,
//             borderRadius: 4,
//             textAlign: "center",
//           }}
//         >
//           {/* LOGO */}
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//             sx={{ mb: 1, color: "#0B3D91" }}
//           >
//             XPayLite
//           </Typography>

//           <Typography variant="body2" sx={{ mb: 3, color: "#64748b" }}>
//             Login to your account
//           </Typography>

//           {/* INPUTS */}
//           <TextField
//             label="Mobile Number"
//             fullWidth
//             margin="normal"
//           />

//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             margin="normal"
//           />

//           {/* BUTTON */}
//           {/* <Link to = '/signup'> */}
//           <Button
//             variant="contained"
//             fullWidth
//             sx={{
//               mt: 2,
//               py: 1.2,
//               borderRadius: 5,
//               background: "linear-gradient(90deg, #6a5af9, #8b5cf6)",
//             }}
//           >
//             SIGN IN
//           </Button>
//           {/* </Link> */}

//           {/* FOOTER */}
//           <Typography sx={{ mt: 2, fontSize: 14 }}>
//             <Link to="#">Forgot password?</Link>
//           </Typography>

//           <Typography sx={{ mt: 1, fontSize: 14 }}>
//             New User? <Link to="/signup">Register here</Link>
//           </Typography>
//         </Paper>
//       </Box>

//     </Box>
//   )
// }

// export default Login

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
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8fafc",
          }}
        >
          <Box sx={{ width: "80%", maxWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* LOGO */}
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

            {/* INPUTS */}
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

            {/* BUTTON */}
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

            {/* FOOTER */}
            <Typography sx={{ mt: 2, fontSize: 14 }}>
              <Link to="#">Forgot password?</Link>
            </Typography>

            <Typography sx={{ mt: 1, fontSize: 14 }}>
              New User? <Link to="/signup">Register here</Link>
            </Typography>

          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Login