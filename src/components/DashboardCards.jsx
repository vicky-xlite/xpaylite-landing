import { Card, CardContent, Typography, Grid } from "@mui/material"

function DashboardCards() {
  return (
    <Grid container spacing={3}>
      
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography>Total Revenue</Typography>
            <Typography variant="h5">₹1,25,000</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography>Transactions</Typography>
            <Typography variant="h5">850</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography>Customers</Typography>
            <Typography variant="h5">320</Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}

export default DashboardCards