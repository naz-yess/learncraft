

import { Box } from "@mui/material";
import { Navbar, About, Contacts,  Course, Banner} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promotions from "./components/Promotions";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#1a0f3b" }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Banner />} />
       
        <Route path='/About/:id' element={<About />} />
        <Route path='/Contacts/:id' element={<Contacts />} />
        <Route path='/Course/:id' element={<Course />} />
      </Routes>
      <Promotions />
    </Box>
  </BrowserRouter>
)
export default App;



