import NavLayout from "../layouts/NavLayout";
import {
    Box,
    Typography,
    Container,
    Grid,
    TextField,
    Button,
    MenuItem,
    // Link
    Tabs,
    Tab
} from "@mui/material"
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite"; // for life
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"; // for health
import { useState, useEffect } from "react";

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#3b82f6",
    border: "2px solid white",
    color: "white",
    padding: "10px 32px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "none",
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: "#1e3a8a",
        // color: theme.palette.primary.main,
        borderColor: "white",
    },
}));

export default function About() {
    const [count, setCount] = useState(0);
    const [tab, setTab] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = 5;
        const duration = 1000; // total time (1 second)
        const incrementTime = duration / end;

        const timer = setInterval(() => {
            start += 1;
            setCount(start);

            if (start === end) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <NavLayout title="About Us" subtitle="Home -> About Us">
                <Box sx={{ py: 10, background: "#f9fafb", mb: 5 }}>
                    <Container maxWidth="lg">
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'space-between' }}>

                            {/* LEFT IMAGE SECTION */}
                            <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                                <Box sx={{ position: "relative" }}>

                                    {/* Main Image */}
                                    <Box
                                        component="img"
                                        src="/images/xpaylite-retailer2.png"
                                        sx={{
                                            width: { xs: '100%', md: "130%" },
                                            borderRadius: "16px",
                                        }}
                                    />

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: { xs: "10px", md: "50px" },
                                            left: { xs: "-20px", md: "90px" },
                                            background: "#fff",
                                            p: { xs: 1, md: 2 },
                                            borderRadius: "12px",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                            display: 'flex',
                                            gap: 1,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <FavoriteIcon sx={{ color: "#ef4444", fontSize: 18 }} />
                                        <Typography fontSize={{ xs: "10px", md: "14px" }} fontWeight={600}>
                                            Life Insurance
                                        </Typography>
                                        <CheckCircleIcon sx={{ color: "#22c55e", fontSize: 18 }} />
                                    </Box>

                                    {/* Floating Card - Experience */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: { xs: "10px", md: "10%" },
                                            left: { xs: "10px", md: "80px" },
                                            background: "#2563eb",
                                            color: "#fff",
                                            p: { xs: 1.5, md: 3 },
                                            borderRadius: "12px",
                                            width: { xs: "65px", md: "140px" },
                                            textAlign: "left",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        <Typography
                                            sx={{ fontSize: { xs: "20px", md: "70px" }, fontWeight: 700 }}
                                        >

                                            {count}+
                                        </Typography>
                                        <Typography fontSize={{ xs: "12px", md: "22px" }}>
                                            Years Of Experience
                                        </Typography>
                                        {/* <Box sx={{marginBottom:'10px solid white'}}>hi</Box> */}
                                    </Box>

                                    {/* Small Floating Card */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: { xs: "-10px", md: "-20px" },
                                            right: { xs: "10px", md: "20px" },
                                            background: "#fff",
                                            p: { xs: 1, md: 2 },
                                            borderRadius: "12px",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                            display: 'flex',
                                            gap: 1,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <HealthAndSafetyIcon sx={{ color: "#3b82f6", fontSize: 18 }} />
                                        <Typography fontSize={{ xs: "10px", md: "14px" }} fontWeight={600}>
                                            Health Insurance
                                        </Typography>
                                        <CheckCircleIcon sx={{ color: "#22c55e", fontSize: 18 }} />
                                    </Box>
                                </Box>
                            </Grid>

                            {/* RIGHT CONTENT SECTION */}
                            <Grid item xs={12} md={6} sx={{ width: '90%' }}>
                                <Typography
                                    sx={{
                                        color: "#3b82f6",
                                        fontWeight: 600,
                                        mb: 1,
                                    }}
                                >
                                    Our Company
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: { xs: "28px", md: "36px" },
                                        fontWeight: 700,
                                        mb: 1,
                                        color: "#1e3a8a",
                                    }}
                                >
                                    We’re a Trusted and Professional Company
                                </Typography>

                                {/* TABS */}
                                <Tabs
                                    value={tab}
                                    onChange={(e, newValue) => setTab(newValue)}
                                    sx={{
                                        mb: 2,
                                        "& .MuiTab-root": {
                                            textTransform: "none",
                                            fontWeight: 600,
                                        },
                                    }}
                                >
                                    <Tab label="About Us" />
                                    <Tab label="Mission" />
                                    <Tab label="Vision" />
                                </Tabs>

                                {/* TAB CONTENT */}
                                <Box>
                                    {tab === 0 && (
                                        <Typography sx={{ opacity: 0.7, lineHeight: 1.7 }}>
                                            Since its inception in 2024 MUDRAMARVEL PVT. LTD. (Xpaylite) has travelled a long way to reach its current status as one of the leading Fintech Enabled Company in India with over 50,000 + Satisfied Customers & 3000+ Partners, during the journey we have Invented & Introduced many Innovative Products and Services and our Innovation still continues..
                                        </Typography>
                                    )}

                                    {tab === 1 && (
                                        <Typography sx={{ opacity: 0.7, lineHeight: 1.7 }}>
                                            To live up to the client's expectation through Dynamic ideas, innovation and Dedication.
                                        </Typography>
                                    )}

                                    {tab === 2 && (
                                        <Typography sx={{ opacity: 0.7, lineHeight: 1.7 }}>
                                            To provide our clients best valuable services and helping them in fulfilling their dream goal
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
                <Box
                >
                    <Container maxWidth="lg">
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
                            {/* Left column: Text content */}
                            <Box sx={{ width: { xs: '100%', md: '60%' } }}>
                                {/* "Our Commitment" equivalent - small uppercase tagline */}
                                <Typography
                                    sx={{
                                        mb: 2,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        opacity: 0.9,
                                        color: '#3b82f6'
                                        // width:'50%'
                                    }}
                                >
                                    Our Commitment
                                </Typography>

                                {/* Main heading */}
                                <Typography
                                    sx={{
                                        fontSize: { xs: "32px", md: "42px" },
                                        fontWeight: 700,
                                        mb: 3,
                                        lineHeight: 1.2,
                                        color: '#1e3a8a'
                                    }}
                                >
                                    We Help you to Build for Better Future
                                </Typography>

                                {/* Description text */}
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        lineHeight: 1.6,
                                        mb: 4,
                                        opacity: 0.7,
                                    }}
                                >
                                    At Xpaylite we are committed towards achieving high levels of customers
                                    satisfaction by ensuring quality, cost effective and timely solutions.
                                    It would our endeavour to achieve this with technical, financial,
                                    business and moral excellence.
                                </Typography>

                                {/* Learn More button */}
                                {/* <Link to="/contactus" style={{ textDecoration: "none" }}> */}
                                <StyledButton variant="outlined" component={Link}
                                    to="/contactus" >
                                    Learn More
                                </StyledButton>
                                {/* </Link> */}
                            </Box>

                            {/* Right column: Logo/Brand area matching the image */}
                            <Grid item xs={12} md={5} sx={{ textAlign: { xs: "left", md: "right" } }}>
                                <Box
                                    component="img"
                                    src="/images/xpaylite-retailer.png"
                                    sx={{
                                        border: "5px solid #1e3a8a",
                                        width: { xs: '100%', md: '85%' },
                                        borderRadius: "16px"
                                    }}
                                />
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </NavLayout>
            <Box
                sx={{
                    py: 8,
                    background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 40%, #3b82f6 100%)",
                    color: "#fff",
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                        <Grid item xs={12} md={6} >
                            <Typography sx={{ mb: 2, fontSize: '20px' }}>

                                Quality is a Concept
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "28px", md: "35px" },
                                    fontWeight: 700,
                                    mb: 3,
                                    lineHeight: 1.2,
                                }}
                            >
                                Quality is an all encompassing part of our business and lives.
                                Strong quality processes are built into every areas of work.

                            </Typography>

                            <Typography sx={{ lineHeight: 1.6 }}>
                                Quality by all means can be described as the tool that ensures complete customer satisfaction and in turn the only way to measure customer satisfaction is quality.
                            </Typography>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}