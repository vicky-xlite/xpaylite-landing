import { useState, useEffect } from "react"
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    Button,
    CircularProgress,
} from "@mui/material"
import { CalendarToday } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person"


function BlogSection() {
    const [blogs, setBlogs] = useState([])
    const [displayedBlogs, setDisplayedBlogs] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const postsPerPage = 3

    // Fetch blogs from API
    useEffect(() => {
        fetchBlogs()
    }, [])

   const fetchBlogs = async () => {
        setLoading(true)
        try {
            const [blogRes, namesRes] = await Promise.all([
                fetch("https://dev.to/api/articles?per_page=20"),
                fetch("https://randomuser.me/api/?results=20&nat=in&inc=name")
            ])

            const data = await blogRes.json()
            const namesData = await namesRes.json()

            const indianNames = namesData.results.map(
                (u) => `${u.name.first} ${u.name.last}`
            )

            const formattedBlogs = data.map((post, index) => ({
                id: post.id,
                title: post.title,
                date: new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                author: indianNames[index] || "Team xpaylite",   // 👈 fetched Indian name, with fallback
                excerpt: post.description || "No description available...",
                image: post.cover_image || `https://picsum.photos/400/300?random=${post.id}`,
                url: post.url,
            }))

            setBlogs(formattedBlogs)
            setDisplayedBlogs(formattedBlogs.slice(0, postsPerPage))
        } catch (error) {
            console.error("Error fetching blogs:", error)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = () => {
        const nextPage = page + 1
        const newDisplayedBlogs = blogs.slice(0, nextPage * postsPerPage)
        setDisplayedBlogs(newDisplayedBlogs)
        setPage(nextPage)

        if (newDisplayedBlogs.length >= blogs.length) {
            setHasMore(false)
        }
    }

    return (
        <Box sx={{
            py: { xs: 6, md: 12 }, backgroundImage: "url('/images/blogbg4.jpg')", backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Container maxWidth="lg">
                {/* HEADER */}
                <Box textAlign="center" mb={10}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#3b82f6",
                            fontWeight: 600,
                            letterSpacing: 1,
                            mb: 1,
                        }}
                    >
                        Latest News & Blog
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "1.75rem", md: "2.5rem" },
                            fontWeight: 700,
                            color: "#1e3a8a",
                            lineHeight: 1.2,
                            // mb: 4,
                        }}
                    >
                        Read Our Latest Articles
                    </Typography>
                </Box>

                {/* BLOG GRID */}
                {loading ? (
                    <Box textAlign="center" py={8}>
                        <CircularProgress sx={{ color: "#22c55e" }} />
                    </Box>
                ) : (
                    <>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "repeat(2, 1fr)",
                                    md: "repeat(3, 1fr)",
                                },
                                columnGap: 3,
                                rowGap: 25,
                            }}
                        >
                            {displayedBlogs.map((blog) => (
                                <Card
                                    key={blog.id}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        position: "relative",
                                        overflow: "visible",
                                        borderRadius: 4,
                                        background: "#fff",
                                        height: '130%',
                                        pb: 2,
                                        px: 2,
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                        },
                                    }}
                                >

                                    {/* VERTICAL DATE */}
                                    <Box
                                        sx={{
                                            pt: 3,
                                            px: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >

                                        <Typography
                                            sx={{
                                                writingMode: "vertical-rl",
                                                transform: "rotate(180deg)",
                                                color: "#1e3a8a",
                                                fontSize: '15px',
                                                fontWeight: 600
                                            }}
                                        >
                                            {blog.date}
                                        </Typography>
                                        <CalendarToday sx={{ fontSize: 15, color: "#1e3a8a", mb: 1, mt: 1.5 }} />
                                    </Box>
                                    {/* FLOATING IMAGE */}
                                    <Box >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: -40, // 👈 THIS creates floating effect
                                                right: 0,
                                                width: "85%",
                                                zIndex: 2,
                                                ".MuiCard-root:hover &::after": {
                                                    opacity: 1,
                                                },

                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: "12px",
                                                    background:
                                                        "linear-gradient(180deg, rgba(30,58,138,0.15), rgba(30,58,138,0.35))", // bluish overlay
                                                    opacity: 0,
                                                    transition: "0.3s ease",
                                                },
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={blog.image}
                                                alt={blog.title}
                                                sx={{
                                                    width: "100%",
                                                    height: 180,
                                                    objectFit: "cover",
                                                    borderRadius: 3,
                                                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                                    display: "block",
                                                }}
                                            />
                                        </Box>

                                        {/* CONTENT */}
                                        <CardContent sx={{ pt: 6, transform: "translateY(110px)", }}>
                                            {/* AUTHOR */}
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                                                <Avatar
                                                    sx={{
                                                        width: 28,
                                                        height: 28,
                                                        bgcolor: "#e2e8f0",
                                                        color: "#64748b",
                                                    }}
                                                >
                                                    <PersonIcon sx={{ fontSize: 16 }} />
                                                </Avatar>
                                                <Typography variant="body2" color="#94a3b8">
                                                    {blog.author}
                                                </Typography>
                                            </Box>

                                            {/* TITLE */}
                                            <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    color: "#1e3a8a",
                                                    mb: 1.5,
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {blog.title}
                                            </Typography>

                                            {/* EXCERPT */}
                                            <Typography sx={{ color: "#64748b", fontSize: "0.9rem", mb: 2 }}>
                                                {blog.excerpt}
                                            </Typography>

                                            {/* READ MORE */}
                                            <Typography
                                                sx={{
                                                    fontSize: "0.85rem",
                                                    color: "#64748b",
                                                    cursor: "pointer",
                                                    "&:hover": { color: "#3b82f6" },
                                                }}
                                            >
                                                Read More →
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            ))}
                        </Box>

                        {/* LOAD MORE BUTTON */}
                        {hasMore && (
                            <Box textAlign="center" mt={6}>
                                <Button
                                    variant="contained"
                                    onClick={loadMore}
                                    disableElevation
                                    sx={{
                                        bgcolor: "#3b82f6",
                                        color: "white",
                                        mt: 12,
                                        px: 5,
                                        py: 1.5,
                                        borderRadius: 2,
                                        fontWeight: 600,
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            bgcolor: "#1e3a8a",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Load More
                                </Button>
                            </Box>
                        )}
                    </>
                )}
            </Container>
        </Box>
    )
}

export default BlogSection