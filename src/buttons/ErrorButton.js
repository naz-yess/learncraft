import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
    return (
        <Box sx={{
            textAlign:"center", padding: "50px", 
        }}>
            <Typography variant="h1" sx={{fontSize: "48px",
    color: "#333"}}>404 - Not Found</Typography>
            <Typography variant="h6" sx={{fontSize: "18px",
    color: "#666"}}>This page is in progress....</Typography>
        </Box>
    );
};

export default NotFoundPage;