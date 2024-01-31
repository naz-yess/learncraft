


import { About,  Contacts,  Course, Navbar}  from "./components";
import { Box } from "@mui/material";
import Home from "../src/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseGerman from "./components/CourseGerman";
import CourseKorean from "./components/CourseKorean";
const App = () => (
  <BrowserRouter>
  <Navbar />
  <Box sx={{ backgroundColor: "#1a0f3b" }}>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
      <Route exact path='/Navbar' element={<Navbar />} />
      <Route path='/Contacts' element={<Contacts />} />
      <Route path='/Course' element={<Course />} />
      <Route path='/About' element={<About />} />
      <Route path='/CourseGerman' element={<CourseGerman />} />
      <Route path='/CourseKorean' element={<CourseKorean />} />
    </Routes>
 
    </Box>
</BrowserRouter>
)
export default App;


