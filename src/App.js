

import { Box } from "@mui/material";
import { Navbar, About, Contacts, Hero, Course} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#1a0f3b" }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/About/:id' element={<About />} />
        <Route path='/Contacts/:id' element={<Contacts />} />
        <Route path='/Course/:id' element={<Course />} />
      </Routes>
    </Box>
  </BrowserRouter>
)
export default App;



