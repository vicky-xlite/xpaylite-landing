import NavLayout from "../layouts/NavLayout";
import BlogSection from "../components/BlogSection";
import { Padding } from "@mui/icons-material";

export default function Blogs () {
    return (<>
    <NavLayout title="Blogs" subtitle="Home -> Blogs">
        {/* <BlogSection /> */}
    </NavLayout> 
    {/* <Box sx={{bgcolor: '#111'}}> */}
    
    <BlogSection />   
    {/* </Box> */}
    </>)
}