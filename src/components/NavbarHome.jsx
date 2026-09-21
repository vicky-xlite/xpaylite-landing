import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Menu
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import SyncAltIcon from "@mui/icons-material/SyncAlt"
import StoreIcon from "@mui/icons-material/Store"
import PaymentsIcon from "@mui/icons-material/Payments"
import CreditCardIcon from "@mui/icons-material/CreditCard"

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import TvIcon from "@mui/icons-material/Tv"
import ReceiptIcon from "@mui/icons-material/Receipt"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"

import TrainIcon from "@mui/icons-material/Train"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"

import CodeIcon from "@mui/icons-material/Code"
import LanguageIcon from "@mui/icons-material/Language"
import DesignServicesIcon from "@mui/icons-material/DesignServices"
import BrushIcon from "@mui/icons-material/Brush"
import CampaignIcon from "@mui/icons-material/Campaign"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import AndroidIcon from "@mui/icons-material/Android"
import AppleIcon from "@mui/icons-material/Apple"

import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Divider from "@mui/material/Divider"

import CardTravelIcon from "@mui/icons-material/CardTravel";
import FlightIcon from "@mui/icons-material/Flight";

import { useState } from "react"
import { Link } from "react-router-dom"

const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Become Partner", path: "/partner" },
    { label: "Services", path: "/services" },
    // { label: "Products", path: "/products" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact Us", path: "/contactus" },
    { label: "Complaint", path: "/complaint" }
]

const authItems = [
    { label: "Login / Sign Up", path: "https://merchant.xpaylite.com/" },
    // { label: "Sign Up", path: "https://merchant.xpaylite.com/" }
]

const iconMap = {
    // BANKING
    AEPS: <PointOfSaleIcon fontSize="small" />,
    "Micro ATM": <AccountBalanceIcon fontSize="small" />,
    "Money Transfer": <SyncAltIcon fontSize="small" />,
    "Banking Services": <StoreIcon fontSize="small" />,
    "Payment Solutions": <PaymentsIcon fontSize="small" />,
    "PAN Card": <CreditCardIcon fontSize="small" />,
    "Account Opening": <AccountBalanceIcon fontSize="small" />,

    // RECHARGE & BILL
    "Mobile Recharge": <PhoneAndroidIcon fontSize="small" />,
    "Utility Bill Payment": <ReceiptIcon fontSize="small" />,
    "DTH Recharge": <TvIcon fontSize="small" />,
    "Cash & EMI Collection": <AccountBalanceWalletIcon fontSize="small" />,

    // TRAVEL
    "IRCTC Booking": <TrainIcon fontSize="small" />,
    "Bus Ticket": <DirectionsBusIcon fontSize="small" />,
    // "Courier Service Point": <LocalShippingIcon fontSize="small" />,
    "Holiday Packages": <CardTravelIcon fontSize="small" />,
    "Flight Booking": <FlightIcon fontSize="small" />,

    // INSURANCE
    "Health Insurance": <HealthAndSafetyIcon fontSize="small" />,
    "Bike Insurance": <TwoWheelerIcon fontSize="small" />,
    "Car Insurance": <DirectionsCarIcon fontSize="small" />,

    // DESIGN & DEVELOPMENT
    "Software Development": <CodeIcon fontSize="small" />,
    "Custom Web Development": <LanguageIcon fontSize="small" />,
    "Web Design": <DesignServicesIcon fontSize="small" />,
    "Logo & Graphic Designing": <BrushIcon fontSize="small" />,
    "Digital Marketing": <CampaignIcon fontSize="small" />,
    "Mobile App Development": <PhoneIphoneIcon fontSize="small" />,
    "Android App Development": <AndroidIcon fontSize="small" />,
    "iOS App Development": <AppleIcon fontSize="small" />,
}

function NavbarHome() {
    const [open, setOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    let servicesTimeout
    // const [anchorEl, setAnchorEl] = useState(null)
    // let timeout
    const [partnersOpen, setPartnersOpen] = useState(false)
    let partnersTimeout

    const [openPartners, setOpenPartners] = useState(false)
    const [openServicesMobile, setOpenServicesMobile] = useState(false)

    const serviceSections = [
        {
            title: "BANKING",
            items: ["AEPS", "Micro ATM", "Money Transfer", "Banking Services", "Payment Solutions", "PAN Card", "Account Opening"],
        },
        {
            title: "RECHARGE & BILL",
            items: ["Mobile Recharge", "Utility Bill Payment", "DTH Recharge", "Cash & EMI Collection"],
        },
        {
            title: "TRAVEL",
            items: ["IRCTC Booking", "Bus Ticket", "Flight Booking", "Holiday Packages"],
        },
        {
            title: "INSURANCE",
            items: ["Health Insurance", "Bike Insurance", "Car Insurance"],
        },
        {
            title: "DESIGN & DEVELOPMENT",
            items: ["Software Development", "Custom Web Development", "Web Design", "Logo & Graphic Designing", "Digital Marketing", "Mobile App Development", "Android App Development", "iOS App Development"],
        },
    ]

    // const handleOpen = (event) => {
    //     clearTimeout(timeout)
    //     setAnchorEl(event.currentTarget)
    // }

    // const handleClose = () => {
    //     timeout = setTimeout(() => {
    //         setAnchorEl(null)
    //     }, 120) // slightly faster response
    // }

    const toggleDrawer = () => setOpen(!open)

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: "#fff",
                borderBottom: "1px solid #eee",
                color: "#000",
                width: "100%",
                zIndex: 1200,
                position: "relative",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>

                {/* Logo */}
                <Box
                    component="img"
                    src='/images/xpaylite.jpeg'
                    alt="XLite Wallet India"
                    sx={{
                        width: { xs: 60, md: 90 },
                        height: 'auto',
                        objectFit: "contain"
                    }}
                />

                {/* Desktop Navigation */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0 }}>
                    {navItems.map((item) => {
                        if (item.label === "Become Partner") {
                            return (
                                <Box
                                    key={item.label}
                                    onMouseEnter={() => {
                                        clearTimeout(partnersTimeout)
                                        setPartnersOpen(true)
                                    }}
                                    onMouseLeave={() => {
                                        partnersTimeout = setTimeout(() => {
                                            setPartnersOpen(false)
                                        }, 200)
                                    }}
                                >
                                    <Button
                                        sx={{ color: "#1976d2", fontWeight: 500 }}
                                        endIcon={<KeyboardArrowDownIcon />}
                                    >
                                        {item.label}
                                    </Button>

                                    {partnersOpen && (
                                        <Box
                                            onMouseEnter={() => clearTimeout(partnersTimeout)}
                                            onMouseLeave={() => setPartnersOpen(false)}
                                            sx={{
                                                position: "absolute",
                                                top: "100%",
                                                minWidth: 220,
                                                background: "#fff",
                                                boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                                                border: "1px solid #eee",
                                                borderRadius: 2,
                                                py: 1,
                                                zIndex: 1300,
                                            }}
                                        >
                                            {[
                                                "XPay Retailer",
                                                "XPay Distributor",
                                                "Whitelabel Partner",
                                                "B2B Partner",
                                            ].map((option) => (
                                                <Box
                                                    key={option}
                                                    sx={{
                                                        px: 2,
                                                        py: 1,
                                                        cursor: "pointer",
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: "#1e3a8a",
                                                        transition: "0.2s",
                                                        "&:hover": {
                                                            background: "#f1f5f9",
                                                        },
                                                    }}
                                                >
                                                    {option}
                                                </Box>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            )
                        }

                        if (item.label === "Services") {
                            return (
                                <Box
                                    key={item.label}
                                    onMouseEnter={() => {
                                        clearTimeout(servicesTimeout)
                                        setServicesOpen(true)
                                    }}
                                    onMouseLeave={() => {
                                        servicesTimeout = setTimeout(() => {
                                            setServicesOpen(false)
                                        }, 200)
                                    }}
                                >
                                    <Button
                                        sx={{ color: "#1976d2", fontWeight: 500 }}
                                        endIcon={<KeyboardArrowDownIcon />}
                                    >
                                        {item.label}
                                    </Button>

                                    {servicesOpen && (
                                        <Box
                                            onMouseEnter={() => clearTimeout(servicesTimeout)}
                                            onMouseLeave={() => setServicesOpen(false)}
                                            sx={{
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                width: "100%",
                                                boxSizing: 'border-box',
                                                background: "#fff",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                borderTop: "1px solid #eee",
                                                px: 8,
                                                py: 5,
                                                zIndex: 1300,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(5, 1fr)",
                                                    gap: 1,
                                                }}
                                            >
                                                {[
                                                    {
                                                        title: "BANKING",
                                                        items: ["AEPS", "Micro ATM", "Money Transfer", "Banking Services", "Payment Solutions", "PAN Card", "Account Opening"],
                                                    },
                                                    {
                                                        title: "RECHARGE & BILL",
                                                        items: ["Mobile Recharge", "Utility Bill Payment", "DTH Recharge", "Cash & EMI Collection"],
                                                    },
                                                    {
                                                        title: "TRAVEL",
                                                        items: ["IRCTC Booking", "Bus Ticket", "Flight Booking", "Holiday Packages"],
                                                    },
                                                    {
                                                        title: "INSURANCE",
                                                        items: ["Health Insurance", "Bike Insurance", "Car Insurance"],
                                                    },
                                                    {
                                                        title: "DESIGN & DEVELOPMENT",
                                                        items: ["Software Development", "Custom Web Development", "Web Design", "Logo & Graphic Designing", "Digital Marketing", "Mobile App Development", "Android App Development", "iOS App Development"],
                                                    },
                                                ].map((section, i) => (
                                                    <Box key={i}>
                                                        <Typography
                                                            sx={{
                                                                fontWeight: 700,
                                                                color: "#1e3a8a",
                                                                mb: 2,
                                                            }}
                                                        >
                                                            {section.title}
                                                        </Typography>

                                                        {section.items.map((item, idx) => (
                                                            // <Typography
                                                            //     key={idx}
                                                            //     sx={{
                                                            //         color: "#64748b",
                                                            //         mb: 1,
                                                            //         cursor: "pointer",
                                                            //         transition: "0.2s",
                                                            //         "&:hover": {
                                                            //             color: "#3b82f6",
                                                            //             // transform: "translateX(5px)",
                                                            //         },
                                                            //     }}
                                                            // >
                                                            //     {item}
                                                            // </Typography>
                                                            <Box
                                                                key={idx}
                                                                sx={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: 1.5,
                                                                    mb: 1.2,
                                                                    cursor: "pointer",
                                                                    transition: "0.2s",
                                                                    color: "#64748b",
                                                                    "&:hover": {
                                                                        color: "#3b82f6",
                                                                        // transform: "translateX(4px)",
                                                                    },
                                                                }}
                                                            >
                                                                {/* Icon */}
                                                                <Box sx={{ color: "#3b82f6", display: "flex" }}>
                                                                    {iconMap[item]}
                                                                </Box>

                                                                {/* Text */}
                                                                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                                                    {item}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    )}
                                </Box>
                            )
                        }

                        return (
                            <Button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: item.label === "#1976d2",
                                    fontWeight: item.label === "Complaint" ? 700 : 500,
                                    transform: item.label === "Complaint" ? "translateX(5px)" : "none",
                                    border: item.label === "Complaint" ? "1px solid #1976d2" : "none",
                                    borderRadius: "6px",
                                    px: 1.5,
                                    "&:hover": {
                                        background: "#f1f5f9",
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        )
                    })}
                </Box>

                {/* Desktop Auth Buttons */}

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    {authItems.map((item) => (
                        <Button
                            key={item.label}
                            variant="contained"
                            component={Link}
                            to={item.path}
                            sx={{ background: "#0B3D91" }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                {/* Mobile Menu Button */}

                <IconButton
                    sx={{ display: { xs: "flex", md: "none" } }}
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        width: 280,
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12,
                    }
                }}
            >
                <Box role="presentation">

                    {/* HEADER */}
                    <Box sx={{ p: 2, fontWeight: 700, fontSize: 16 }}>
                        Menu
                    </Box>

                    <Divider />

                    {/* MAIN NAV ITEMS */}
                    <List>
                        {navItems
                            .filter(item => item.label !== "Become Partner" && item.label !== "Services")
                            .map((item) => (
                                <ListItem
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    onClick={toggleDrawer}
                                    sx={{ py: 1.2, px: 2 }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: 15,
                                            fontWeight: 500,
                                        }}
                                    />
                                </ListItem>
                            ))}
                    </List>

                    <Divider sx={{ my: 1 }} />

                    {/* PARTNERS SECTION (INFO ONLY)
    <Box sx={{ px: 2, py: 1 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1 }}>
        Partners
      </Typography>

      {[
        "XPay Retailer",
        "XPay Distributor",
        "Whitelabel Partner",
        "B2B Partner",
      ].map((item) => (
        <Typography
          key={item}
          sx={{
            fontSize: 13,
            color: "#64748b",
            mb: 0.5,
          }}
        >
          • {item}
        </Typography>
      ))}
    </Box>

    <Divider sx={{ my: 1 }} /> */}

                    {/* SERVICES SECTION (GRID UI) */}
                    {/* <Box sx={{ px: 2, py: 2 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 2 }}>
        Services
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        {[
          "AEPS",
          "Money Transfer",
          "Mobile Recharge",
          "DTH Recharge",
          "IRCTC Booking",
          "Bus Ticket",
        ].map((item) => (
          <Box
            key={item}
            sx={{
              textAlign: "center",
              p: 1.5,
              borderRadius: 2,
              background: "#f8fafc",
            }}
          >
            <Box sx={{ color: "#3b82f6", mb: 0.5 }}>
              {iconMap[item]}
            </Box>

            <Typography sx={{ fontSize: 11 }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box> */}
                    <Box sx={{ px: 2, py: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 2 }}>
                            Services
                        </Typography>

                        {serviceSections.map((section) => (
                            <Box key={section.title} sx={{ mb: 2 }}>

                                {/* Section Title */}
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: "#1e3a8a",
                                        mb: 1,
                                    }}
                                >
                                    {section.title}
                                </Typography>

                                {/* HORIZONTAL SCROLL */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        overflowX: "auto",
                                        gap: 1.5,
                                        pb: 1,
                                        scrollSnapType: "x mandatory",

                                        "&::-webkit-scrollbar": {
                                            display: "none",
                                        },
                                    }}
                                >
                                    {section.items.map((item) => (
                                        <Box
                                            key={item}
                                            sx={{
                                                minWidth: 80,
                                                flexShrink: 0,
                                                textAlign: "center",
                                                p: 1.5,
                                                borderRadius: 2,
                                                background: "#f8fafc",
                                                cursor: "pointer",
                                                scrollSnapAlign: "start",
                                                transition: "0.2s",

                                                "&:hover": {
                                                    background: "#eef2ff",
                                                },
                                            }}
                                        >
                                            <Box sx={{ color: "#3b82f6", mb: 0.5 }}>
                                                {iconMap[item]}
                                            </Box>

                                            <Typography
                                                sx={{
                                                    fontSize: 10.5,
                                                    lineHeight: "14px",
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Divider sx={{ my: 1 }} />
                    {/* PARTNERS SECTION (INFO ONLY) */}
                    <Box sx={{ px: 2, py: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1 }}>
                            Become Partner
                        </Typography>

                        {[
                            "XPay Retailer",
                            "XPay Distributor",
                            "Whitelabel Partner",
                            "B2B Partner",
                        ].map((item) => (
                            <Typography
                                key={item}
                                sx={{
                                    fontSize: 13,
                                    color: "#64748b",
                                    mb: 0.5,
                                }}
                            >
                                • {item}
                            </Typography>
                        ))}
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    {/* AUTH BUTTONS */}
                    <Box sx={{ px: 2, pb: 2 }}>
                        {authItems.map((item) => (
                            <Button
                                key={item.label}
                                fullWidth
                                variant="contained"
                                component={Link}
                                to={item.path}
                                sx={{
                                    mb: 1,
                                    background: "#0B3D91",
                                    textTransform: "none",
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                </Box>
            </Drawer>

        </AppBar>
    )
}

export default NavbarHome