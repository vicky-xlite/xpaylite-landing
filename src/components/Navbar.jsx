import { AppBar, Toolbar, Typography } from "@mui/material"

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6">
          Payment Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar