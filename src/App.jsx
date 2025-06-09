import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage"
import About from "./Pages/AboutPage"
import Courses from "./Pages/CoursesPage"
import Contact from "./Pages/ContactPage"
import Admission from "./Pages/AdmissionPage"

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admission" element={<Admission/>}/>
      

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App