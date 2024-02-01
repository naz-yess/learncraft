import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
    return (
        <Box sx={{
            margin: 'auto', textAlign:"center", padding: "200px", 
        }}>
            <Typography variant="h1" sx={{fontSize: "48px",
    color: "white"}}>404 - Not Found</Typography>
            <Typography variant="h6" sx={{fontSize: "18px",
    color: "lightgrey"}}>This page is in progress....</Typography>
        </Box>
    );
};

export default NotFoundPage;