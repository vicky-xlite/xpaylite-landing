import { Container, Typography, Grid, Box } from "@mui/material"
import ServiceCard from "./ServiceCard"

import CreditCardIcon from "@mui/icons-material/CreditCard"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SecurityIcon from "@mui/icons-material/Security"
import SendIcon from "@mui/icons-material/Send"
import FlightIcon from "@mui/icons-material/Flight"
import ReceiptIcon from "@mui/icons-material/Receipt"
import PaymentsIcon from "@mui/icons-material/Payments"

const services = [
    {
        title: "Aadhaar ATM",
        description: "AEPS agents can convert their store into banking points.",
        icon: <CreditCardIcon />,
        number: "1"
    },
    {
        title: "Mini ATM",
        description: "Mini ATM is a solution for merchants.",
        icon: <PhoneIphoneIcon />,
        number: "2"
    },
    {
        title: "Account Opening",
        description: "Open zero-balance savings accounts.",
        icon: <AccountCircleIcon />,
        number: "3"
    },
    {
        title: "Insurance",
        description: "Offer health, motor and life insurance.",
        icon: <SecurityIcon />,
        number: "4"
    },
    {
        title: "Money Transfer",
        description: "Start instant domestic money transfers.",
        icon: <SendIcon />,
        number: "5"
    },
    {
        title: "Travel Services",
        description: "Book flights, buses and hotels.",
        icon: <FlightIcon />,
        number: "6"
    },
    {
        title: "Bill Payments",
        description: "Mobile, DTH, electricity and more.",
        icon: <ReceiptIcon />,
        number: "7"
    },
    {
        title: "Cash/Loan EMI",
        description: "220+ billers available for payments.",
        icon: <PaymentsIcon />,
        number: "8"
    }
]

function ServicesSection() {
    return (
        <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: "#2563eb",
                            fontWeight: 600,
                            letterSpacing: 1.5,
                            fontSize: "0.8rem",
                            mb: 1,
                            display: "block"
                        }}
                    >
                        ONE WALLET – MULTIPLE SERVICES
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "1.8rem", md: "2.2rem" },
                            color: "#0f172a",
                            mb: 2,
                            lineHeight: 1.2
                        }}
                    >
                        Transform Your Shop into a Digital Bank
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: "600px",
                            mx: "auto",
                            color: "#475569",
                            fontSize: "1rem"
                        }}
                    >
                        Offer 25+ financial and digital services with our single powerful platform and start earning from day one.
                    </Typography>
                </Box>

                {/* Cards Grid - Using proper spacing */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)"
                        },
                        gap: 3,
                        alignItems: "stretch"
                    }}
                >
                    {services.map((service, index) => (
                        <Box key={index} sx={{ height: "100%" }}>
                            <ServiceCard {...service} />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default ServicesSection