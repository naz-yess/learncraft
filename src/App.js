

import { Box } from "@mui/material";
import { Navbar, About, Contacts, Hero} from "./components";

const App = () => (
  
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Hero />
      <About />
      <Contacts />
    </Box>
)

export default App;
