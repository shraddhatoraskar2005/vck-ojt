import React from 'react'
import Header from '../components/Header/Header'
import './page.css'
import Footer from '../components/Footer/Footer'



const Home = () => {
    return(
        <div id="body">
            <Header/>
          <div id="body1">
            <div id="id4">
              <img  id="img1" src="Images/college.jpg"/>
              <p id="id1"> Welcome to Vivekanand College !</p>
              <p id="id2"> Your journey of excellence starts here .</p>
              <a  href="/admission"><button id="id3"> Apply Now !</button></a>
            </div>
          
           <p> **Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation,
            and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations
             of students, empowering them to achieve their full potential.</p>
           <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. 
           Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where
                curiosity thrives and future leaders are shaped.</p>
        
           <h2 id="head2">Why Choose Vivekanand College?</h2>
           <ul id="content">
             <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
             <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
             <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
             <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
             <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
           </ul>
           <h2>Campus Life & Facilities</h2>
           <img className='image-item' src="Images/vck2.jpeg"/>
           <img className='image-item' src="Images/vck1.jpeg"/>
           <p id="para">Ready to explore our courses?</p>
          <a href="courses"><button className="btn2">Explore Courses</button></a>


          </div>   
          <Footer/>

        </div>
    )
}

export default Home