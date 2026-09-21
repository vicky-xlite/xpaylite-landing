import {
  Container,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material"
import { Link } from "react-router-dom"

function AuthForm({
  title,
  fields,
  buttonText,
  footerText,
  footerLinkText,
  footerLink
}) {

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>

      <Paper sx={{ padding: 5 }}>

        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        {fields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            fullWidth
            margin="normal"
          />
        ))}

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          {buttonText}
        </Button>

        <Typography sx={{ mt: 2 }}>
          {footerText}{" "}
          <Link to={footerLink}>{footerLinkText}</Link>
        </Typography>

      </Paper>

    </Container>
  )
}

export default AuthForm