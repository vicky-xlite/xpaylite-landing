import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

const drawerWidth = 220

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#0B3D91",
          color: "white"
        }
      }}
    >
      <h2 style={{ padding: "20px" }}>XPayLite</h2>

      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/transactions">
          <ListItemText primary="Transactions" />
        </ListItem>

        <ListItem button component={Link} to="/customers">
          <ListItemText primary="Customers" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar