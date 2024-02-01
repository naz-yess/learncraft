import { Box } from "@mui/material";
import { ButtonHeader, ButtonSubheader } from "../styles/buttons";

const NotFoundPage = () => {
    return (
        <Box sx={{
            margin: 'auto', textAlign:"center", padding: "200px 0px", 
        }}>
            <ButtonHeader variant="h1" sx={{
    color: "white"}}>404 - Not Found</ButtonHeader>
            <ButtonSubheader variant="h6" sx={{
    color: "lightgrey"}}>This page is in progress....</ButtonSubheader>
        </Box>
    );
};

export default NotFoundPage;