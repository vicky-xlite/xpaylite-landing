import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import { footerData, footerRoutes } from "./constants"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { Link as LinkV2 } from "react-router-dom"

// Reusable styled components
const FooterLink = styled(Link)(({ theme }) => ({
    color: "#ffffff",
    fontSize: "0.9rem",
    textDecoration: "none",
    display: "block",
    marginBottom: theme.spacing(0.8),
    opacity: 0.9,
    transition: "opacity 0.2s ease-in-out",
    "&:hover": {
        opacity: 1,
        textDecoration: "underline"
    }
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "1.1rem",
    marginBottom: theme.spacing(2),
    position: "relative",
    "&:after": {
        content: '""',
        position: "absolute",
        bottom: -8,
        left: 0,
        width: 40,
        height: 2,
        backgroundColor: "#3b82f6"
    }
}))

// Extracted contact info component for better organization
const ContactInfo = () => {
    const contactItems = [
        { Icon: EmailIcon, href: "mailto:info@mudramarvel.in", text: "info@mudramarvel.in" },
        { Icon: EmailIcon, href: "mailto:info@xpaylite.com", text: "info@xpaylite.com" },
        { Icon: PhoneIcon, href: "tel: +919762357400", text: " +91 9762357400" }
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '15px' }}>
            {contactItems.map(({ Icon, href, text }) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Icon sx={{ color: "#ffffff", fontSize: 20 }} />
                    <Link
                        href={href}
                        sx={contactLinkStyles}
                    >
                        {text}
                    </Link>
                </Box>
            ))}

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ color: "#ffffff", fontSize: 20 }} />
                <Box sx={contactTextStyles}>
                    A-14, First Floor,<br />
                     Major Dhyanchand Nagar,<br /> Meerut, Uttar Pradesh -<br />  250002
                </Box>
            </Box>

            <Box sx={{ ...contactTextStyles, fontSize: '12px' }}>
                Mon–Sat, 10 AM – 6 PM IST
            </Box>
        </Box>
    )
}

// Shared styles for contact elements
const contactLinkStyles = {
    color: "#ffffff",
    textDecoration: "none",
    opacity: 0.8,
    "&:hover": { opacity: 1, textDecoration: "underline" }
}

const contactTextStyles = {
    color: '#ffffff',
    opacity: 0.8
}

// Extracted footer sections component
const FooterSections = () => {
    const sections = [
        { title: "OUR SERVICES", data: footerData.services },
        { title: "COMPANY", data: footerData.company },
        { title: "SOFTWARE & IT", data: footerData.software },
        { title: "CONTACT US", isContact: true }
    ]

    return (
        <Grid container spacing={5}>
            {sections.map(({ title, data, isContact }) => (
                <Grid item xs={12} sm={6} md={3} key={title}>
                    <SectionTitle variant="h6">{title}</SectionTitle>
                    {isContact ? (
                        <ContactInfo />
                    ) : (
                        <Box sx={{ opacity: 0.8 }}>
                            {data.map((item) => (
                                footerRoutes[item] ? (
                                    <FooterLink
                                        key={item}
                                        component={LinkV2}
                                        to={footerRoutes[item]}
                                        state={{ title: item, user: `Home -> ${item}` }}
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        {item}
                                    </FooterLink>
                                ) : (
                                    <FooterLink key={item} href="#">
                                        {item}
                                    </FooterLink>
                                )
                            ))}
                        </Box>
                    )}
                </Grid>
            ))}
        </Grid>
    )
}

function Footer() {
    return (
        <Box sx={{ backgroundColor: "#0a1a3a", pt: { xs: 6, md: 8 }, pb: 4 }}>
            <Container maxWidth="lg">
                {/* Main Footer Grid */}
                <Grid
                    container
                    spacing={{ xs: 1, md: 2 }}
                    sx={{ mb: 6, justifyContent: 'space-between' }}
                >
                    {/* Left Section */}
                    <Grid item xs={12} md={4} sx={{ width: { xs: '100%', md: '25%' } }}>
                        <Box
                            component="img"
                            src='/images/xpaylite.jpeg'
                            alt="XLite Wallet India"
                            sx={{
                                width: { xs: 120, md: 140 },
                                height: 'auto',
                                objectFit: "contain"
                            }}
                        />

                        <Typography
                            sx={{
                                color: "#ffffff",
                                fontSize: "0.85rem",
                                lineHeight: 1.6,
                                mb: 3,
                                mt: 2,
                                opacity: 0.9,
                                maxWidth: { md: '100%' },
                            }}
                        >
                            We operate on a B2B2C model, where we partner with neighborhood retail stores who can offer Assisted Digital Financial Services like Aadhaar Withdrawal, ATM, Utility Bill Payments, Travel, Insurance, Money Transfer and Software by MUDRAMARVEL PVT. LTD.(Xpaylite). Our innovative solutions are modeled to make the financial transactions seamless, quick, easy, secure and strives to empower our partners.
                        </Typography>

                        {/* <ContactInfo /> */}
                    </Grid>

                    {/* Right Section */}
                    <Grid item xs={12} md={8}>
                        <FooterSections />
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 3 }} />

                {/* Disclaimer Section */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    <Typography variant="body2" sx={disclaimerTextStyles}>
                        MudraMarvel Pvt. Ltd. is a NextGen technology platform specialising in digital banking & payment services. We are not a bank, we collaborate with the bank, payment aggregator and third party companies.
                    </Typography>

                    <Typography variant="body2" sx={disclaimerTextStyles}>
                        Never share your OTP, username, password or pin with anyone including our representatives. Report any suspicious activities to our support team immediately.
                    </Typography>
                </Box>

                <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 3 }} />

                {/* Bottom Footer */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                    <Typography variant="body2" sx={copyrightTextStyles}>
                        © 2025 Powered By MudraMarvel Pvt. Ltd.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                        {footerData.bottomLinks.map((item) => (
                            <Box
                                key={item}
                                component={LinkV2}
                                to="/privacypolicy"
                                state={{ title: `${item}`, user: `Home -> ${item}` }}
                                onClick={() => window.scrollTo(0, 0)}
                                sx={{
                                    display: "inline-block",
                                    fontSize: "0.85rem",
                                    marginBottom: 0,
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    opacity: 0.8,
                                    "&:hover": {
                                        opacity: 1,
                                        textDecoration: "underline"
                                    },
                                    "&:visited": {
                                        color: "#ffffff" 
                                    }
                                }}
                            >
                                {item}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

// Shared text styles
const disclaimerTextStyles = {
    color: "#ffffff",
    fontSize: "0.85rem",
    opacity: 0.8
}

const copyrightTextStyles = {
    color: "#ffffff",
    fontSize: "0.85rem",
    opacity: 0.8
}

export default Footer