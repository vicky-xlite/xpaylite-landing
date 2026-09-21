import { useState } from "react"
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CircularProgress
} from "@mui/material"
import NavLayout from "../layouts/NavLayout"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import SendIcon from "@mui/icons-material/Send"
import ReportProblemIcon from "@mui/icons-material/ReportProblem"
import { submitComplaint } from "../api/complaintApi"

function Complaint() {

    const complaintTypes = [
        "Transaction / Payment",
        "Account / KYC",
        "API / Technical",
        "Refund / Dispute",
        "Service Quality",
        "Other"
    ]

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     alert("Complaint submitted successfully!")
    // }

    // const [complaintType, setComplaintType] = useState("")

    // const handleTypeChange = (event) => {
    //     setComplaintType(event.target.value)
    // }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        complaint_type: "",
        // transaction_id: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            const res = await submitComplaint(formData)

            alert(res.message || "Complaint submitted successfully")

            // reset form
            setFormData({
                name: "",
                email: "",
                mobile: "",
                complaint_type: "",
                // transaction_id: "",
                message: ""
            })

        } catch (err) {
            alert(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    const cardStyle = {
        p: 3,
        mb: 2,
        borderRadius: 3,
        background: "#f8fafc",
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
        transition: "0.3s",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }
    }
    const iconBox = (color) => ({
        width: 40,
        height: 40,
        borderRadius: "10px",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    })
    const inputStyle = {
    mb: 1.5,
    // "& .MuiInputBase-input": {
    //     fontSize: "0.85rem"
    // },
    "& .MuiInputLabel-root": {
        fontSize: "0.85rem"
    }
}

    return (

        <>
            <NavLayout title="Complaint" subtitle='Home -> Complaint' />

            <Box
                sx={{
                    background: "linear-gradient(135deg, #f0f4ff, #f9fafb)",
                    py: 6
                }}
            >
                <Container maxWidth="lg" disableGutters>
                    {/* <Box
                    sx={{
                        background: "linear-gradient(135deg, #f0f4ff, #f9fafb)",
                        // width: '100%'
                        // py: 6
                    }}
                > */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: 5,
                            alignItems: "flex-start",
                            justifyContent: 'space-between',
                            p:{xs:2,md: 6}
                        }}
                    >
                        {/* LEFT SIDE */}
                        {/* <Box>
                        <Typography variant="h5" fontWeight="bold" mb={3}>
                            Need Help?
                        </Typography>

                        <Box sx={cardStyle}>
                            <Typography fontWeight={600} mb={1}>
                                Quick Resolution
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our team ensures your complaints are handled within 24–48 hours.
                            </Typography>
                        </Box>

                        <Box sx={cardStyle}>
                            <Typography fontWeight={600} mb={1}>
                                Track Your Issue
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Use your transaction ID to track complaint status easily.
                            </Typography>
                        </Box>

                        <Box sx={cardStyle}>
                            <Typography fontWeight={600} mb={1}>
                                24/7 Support
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our support team is always available to assist you.
                            </Typography>
                        </Box>
                    </Box> */}
                        <Box>
                            <Typography variant="h5" fontWeight="bold" mb={3}>
                                Need Help?
                            </Typography>

                            {/* CARD 1 */}
                            <Box sx={{ ...cardStyle, display: "flex", gap: 2, alignItems: "flex-start" }}>
                                <Box sx={iconBox("#3b82f6")}>
                                    <AccessTimeIcon sx={{ color: "#fff" }} />
                                </Box>
                                <Box>
                                    <Typography fontWeight={600}>Quick Resolution</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our team resolves complaints within 24–48 hours.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* CARD 2 */}
                            <Box sx={{ ...cardStyle, display: "flex", gap: 2 }}>
                                <Box sx={iconBox("#22c55e")}>
                                    <TrackChangesIcon sx={{ color: "#fff" }} />
                                </Box>
                                <Box>
                                    <Typography fontWeight={600}>Track Your Issue</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Easily track complaints using your transaction details.
                                    </Typography>
                                </Box>
                            </Box>

                            {/* CARD 3 */}
                            <Box sx={{ ...cardStyle, display: "flex", gap: 2 }}>
                                <Box sx={iconBox("#f59e0b")}>
                                    <SupportAgentIcon sx={{ color: "#fff" }} />
                                </Box>
                                <Box>
                                    <Typography fontWeight={600}>24/7 Support</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our team is always available for your assistance.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: {xs:3, md:5},
                                borderRadius: 4,
                                background: "#ffffff",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                                border: "1px solid #f1f5f9"
                            }}
                        >

                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Register Complaint
                            </Typography>

                            <Typography color="text.secondary" sx={{ mb: 3 }}>
                                Please fill the form below and our team will contact you.
                            </Typography>

                            <form onSubmit={handleSubmit}>

                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    size="small"
                                    // margin="normal"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    sx={inputStyle}
                                />

                                <TextField
                                    fullWidth
                                    label="Email"
                                    size="small"
                                    // margin="normal"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    sx={inputStyle}
                                />

                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    size="small"
                                    // margin="normal"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    sx={inputStyle}
                                />

                                <FormControl fullWidth size="small" required sx={inputStyle}>
                                    <InputLabel>Complaint Type</InputLabel>

                                    <Select
                                        name="complaint_type"
                                        value={formData.complaint_type}
                                        label="Complaint Type"
                                        onChange={handleChange}
                                    >

                                        {complaintTypes.map((type) => (
                                            <MenuItem key={type} value={type}>
                                                {type}
                                            </MenuItem>
                                        ))}

                                    </Select>

                                </FormControl>

                                {/* <TextField
                                    fullWidth
                                    label="Transaction ID (optional)"
                                    margin="normal"
                                    name="transaction_id"
                                    value={formData.transaction_id}
                                    onChange={handleChange}
                                /> */}

                                <TextField
                                    fullWidth
                                    label="Describe your complaint in detail (transaction ID, date, and issue)..."
                                    multiline
                                    rows={4}
                                    size="small"
                                    // margin="normal"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    sx={inputStyle}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    // endIcon={!loading && (
                                    //     <SendIcon sx={{ size: 'small' }} />
                                    // )}
                                    fullWidth
                                    sx={{ mt: 1, background: "#0B3D91" }}
                                    disabled={loading}
                                >
                                    {loading ? <CircularProgress size={24} /> : "Submit Complaint"}
                                </Button>

                            </form>

                        </Box>
                    </Box>
                    {/* </Box> */}
                    {/* </Box> */}
                </Container>
            </Box>
            {/* </NavLayout> */}
        </>
    )
}

export default Complaint