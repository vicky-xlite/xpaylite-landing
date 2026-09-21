import { Grid, Typography, Box } from "@mui/material"
import { gradientText } from "../styles/themeStyles"

const stats = [
  { value: "5L+", label: "Happy Users" },
  { value: "25+", label: "Services" },
  { value: "40Cr+", label: "Daily Volume" }
]

function Stats() {
  return (
    <Box
      sx={{
        mt: 5,
        pt: 2,
        borderTop: "2px solid rgba(30,58,138,0.25)",
        maxWidth: 520
      }}
    >
      <Grid container justifyContent="space-between" textAlign="center">
        {stats.map((stat, index) => (
          <Grid item xs={4} key={index}>
            <Typography
              sx={{
                fontSize: { xs: "26px", md: "42px" },
                fontWeight: 800,
                letterSpacing: "1px",
                ...gradientText
              }}
            >
              {stat.value}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "12px", md: "16px" },
                fontWeight: 800,
                ...gradientText
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Stats