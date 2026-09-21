import { Box, Typography, Container, Avatar } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import "../App.css"
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
    {
        name: "Pradip Singh",
        role: "Retail Store",
        image: "/images/testimonials/pradip-singh.jpg",
        text: "xpaylite से जुड़ने के बाद हमारी दुकान पूरे गांव में बैंकिंग सेवाओं के लिए मशहूर हो गयी है जिसकी वजह से हमारे ग्राहकों की संख्या काफी बढ़ गयी है।",
    },
    {
        name: "Prasad Bandaru",
        role: "DHANICSP",
        image: "/images/testimonials/prasad-bandaru.jpg",
        text: "xpaylite consistently introduces new features and services. The addition of insurance policies boosted my income significantly.",
    },
    {
        name: "Ruchi Yadav",
        role: "Green Tech",
        image: "/images/testimonials/ruchi-yadav.jpg",
        text: "xpaylite consistently introduces new features and services. The addition of insurance policies boosted my income significantly.",
    },
    {
        name: "Diwakar Kumar Singh",
        role: "Srishti Enterprises",
        image: "/images/testimonials/diwakar-kumar-singh.jpg",
        text: "xpaylite से जुड़ने के लिए ज्यादा निवेश की ज़रूरत नहीं पड़ी, और मुझे डिजिटल सेवाओं के ज़रिए अच्छा मुनाफ़ हो रहा है।",
    },
    {
        name: "Mintu Verma",
        role: "Internet Cafe",
        image: "/images/testimonials/mintu-verma.jpg",
        text: "xpaylite consistently introduces new features and services. The addition of insurance policies boosted my income significantly.",
    },
    {
        name: "Shubham Gupta",
        role: "CSC Center",
        image: "/images/testimonials/shubham-gupta.jpg",
        text: "xpaylite से जुड़ने के बाद हमारी दुकान पूरे गांव में बैंकिंग सेवाओं के लिए मशहूर हो गयी है जिसकी वजह से हमारे ग्राहकों की संख्या काफी बढ़ गयी है।",
    },
]

function TestimonialSection() {
    return (
        <Box sx={{ py: 12, background: "#f1f5f9" }}>
            <Container maxWidth="lg">

                {/* TOP HEADING */}
                <Box textAlign="center" mb={8}>
                    <Typography sx={{ color: "#3b82f6", fontWeight: 600 }}>
                        What Our Clients Say
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "28px", md: "42px" },
                            fontWeight: 700,
                            color: "#1e3a8a",
                            mt: 1,
                        }}
                    >
                        What Our Clients Said About xpaylite
                    </Typography>

                    <Typography
                        sx={{
                            color: "#64748b",
                            mt: 2,
                            mx: "auto",
                        }}
                    >
                        Hear from thousands of successful retailers and distributors who
                        have transformed their businesses with xpaylite.
                    </Typography>
                </Box>

                {/* SLIDER */}
                <Swiper
                    className="testimonial-swiper"
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true} // ✅ infinite loop
                    autoplay={{
                        delay: 2500, // speed of auto slide
                        disableOnInteraction: false, // keeps autoplay after swipe
                    }}
                    pagination={{
                        clickable: true, // dots clickable
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    background: "#dbeafe",
                                    borderRadius: "20px",
                                    p: 4,
                                    height: "100%",
                                }}
                            >

                                {/* USER */}
                                <Box display="flex" alignItems="center" gap={2} mb={2}>
                                    <Avatar
                                        src={item.image}
                                        alt={item.name}
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            border: "2px solid #fff",
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                        }}
                                    >
                                        {/* fallback if image fails */}
                                        {item.name?.charAt(0)}
                                    </Avatar>
                                    <Box>
                                        <Typography fontSize="20px" fontWeight={600}>{item.name}</Typography>
                                        <Typography fontSize="16px" color="gray">
                                            {item.role}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* TEXT */}
                                <Typography
                                    sx={{
                                        fontSize: "22px",
                                        color: "#1e3a8a",
                                        lineHeight: 1.6,
                                        mb: 3,
                                    }}
                                >
                                    “ {item.text} ”
                                </Typography>

                                {/* STARS */}
                                <Box
                                    sx={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        py: 1,
                                        px: 2,
                                        display: "flex",
                                        justifyContent: 'center',
                                        gap: 0.5,
                                    }}
                                >
                                    <StarIcon sx={{ color: "#3b82f6", fontSize: 20 }} />
                                    <StarIcon sx={{ color: "#3b82f6", fontSize: 20 }} />
                                    <StarIcon sx={{ color: "#3b82f6", fontSize: 20 }} />
                                    <StarIcon sx={{ color: "#3b82f6", fontSize: 20 }} />
                                    <StarBorderIcon sx={{ color: "#3b82f6", fontSize: 20 }} />
                                </Box>
                                {/* </Box> */}
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Container>
        </Box>
    )
}

export default TestimonialSection