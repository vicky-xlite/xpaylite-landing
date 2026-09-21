import { Box, Typography, Grid, Container } from "@mui/material"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"
import GroupsIcon from "@mui/icons-material/Groups"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import SecurityIcon from "@mui/icons-material/Security"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import AnimateUp from "../utils/AnimateUp"

const FEATURES = [
    {
        icon: <CalendarMonthIcon />,
        title: "5 Years",
        desc: "Trusted by businesses for over 5 years, offering reliable services and proven industry experience."
    },
    {
        icon: <CurrencyRupeeIcon />,
        title: "0 Joining Fee",
        desc: "Start using xpaylite with no joining fee, making it accessible for everyone to grow their business."
    },
    {
        icon: <GroupsIcon />,
        title: "5 lacs+ Users",
        desc: "Join a community of over 5 lakh satisfied users who trust xpaylite for their AEPS and other transactions."
    },
    {
        icon: <TrendingUpIcon />,
        title: "Highest Commission",
        desc: "Earn the highest commissions in the industry, helping you maximise your profits effortlessly."
    },
    {
        icon: <SecurityIcon />,
        title: "100% Secure",
        desc: "Enjoy complete peace of mind with our 100% secure platform for safe transactions and data protection."
    },
    {
        icon: <AccountBalanceWalletIcon />,
        title: "Single Wallet",
        desc: "Manage 30+ services with a single wallet. No need to maintain funds in different wallets."
    }
]

function WhyChooseSection() {
    return (
        <Box
            sx={{
                py: 12,
                background: "#1e3a5f",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Optional background pattern */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    // backgroundImage: "url('/images/pattern.png')", // optional
                    opacity: 0.08
                }}
            />

            <Container maxWidth="lg">

                {/* Heading */}
                <AnimateUp>
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Typography sx={{ color: "#3b82f6", mb: 1 }}>
                        Why Choose xpaylite?
                    </Typography>

                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: { xs: "28px", md: "40px" },
                            fontWeight: 700,
                            mb: 2
                        }}
                    >
                        Why xpaylite?
                    </Typography>

                    <Typography sx={{ color: "#cbd5e1", mx: "auto" }}>
                        xpaylite offers many advantages which makes it one of the best option
                        for anyone who is looking to start a business
                    </Typography>
                </Box>
                </AnimateUp>

                {/* Cards */}
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)"
                    },
                    columnGap: 3,
                    rowGap: 6,
                    alignItems: "stretch"
                }}>
                    {FEATURES.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <AnimateUp delay={i * 0.09}>
                            <Box
                                sx={{
                                    background: "#f8fafc",
                                    //   borderRadius: "16px",
                                    p: 3,
                                    display: "flex",
                                    gap: 2,
                                    height: "max-content",
                                    alignItems: "flex-start",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
                                }}
                            >

                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "12px",
                                        background: "#1976d2",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        flexShrink: 0
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                {/* Text */}
                                <Box>
                                    <Typography
                                        onClick={() =>
                                            //  console.log("clicked");
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            })
                                        }
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            mb: 0.5,
                                            color: "#1e3a8a"
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: "17px",
                                            color: "#64748b",
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>

                            </Box>
                            </AnimateUp>
                        </Grid>
                    ))}
                </Box>

            </Container>
        </Box>
    )
}

export default WhyChooseSection