import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Courses = () => {
    return(
        <div id="course">

            <Header/>
            <div id="course1">
            <h2 id="chead">Our Academic Programs</h2>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to
                 equip students with theknowledge and skills demanded by today's dynamic global landscape. 
                 Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            
            <h2>Discover Campus Life</h2>
            <div className='video-container'>
                <video id="v1" src="https://vck.codewonders.in/assets/college-tour-FAmcnyfF.mp4" controls="autoplay"></video>
            </div>
            <h2>Undergraduate Programs (UG)</h2>
            <ul>
                <li>
                    **Bachelor of Science (B.Sc.)**
                <ul>
                    <li>
                        Computer Science (3 years)
                    </li>
                    <li>
                        Information Technology (3 years)
                    </li>
                    <li>
                        Biotechnology (3 years)
                    </li>
                </ul>
                </li>
                    **Bachelor of Commerce (B.Com)**
                    <ul>
                        <li>
                            Accounting &amp; Finance (3 years)
                        </li>
                        <li>
                            Banking &amp; Insurance (3 years)
                        </li>
                    </ul>
                    <li>
                        **Bachelor of Arts (B.A.)**
                        <ul>
                            <li>
                                English Literature (3 years)
                            </li>
                            <li>
                                Psychology (3 years)
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2>Postgraduate Programs (PG)</h2>
                <ul>
                    <li>
                        **Master of Science (M.Sc.)**
                        <ul>
                            <li>
                                Computer Science (2 years)
                            </li>
                            <li>
                                Information Technology (2 years)
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2>Program Details &amp Fee Structure (Annual)</h2>
                <table id="table" border="2">
                <thead>
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>   
                        <th>Eligibility</th>                
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UG</td>
                        <td>B.Sc. Computer Science</td>
                        <td>3 Years</td>
                        <td>₹ 85,000</td>
                        <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                </tbody>
            </table>
                <h2>Specialized &amp; Vocational Courses</h2>
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <p>Explore detailed syllabi and admission criteria on our Admissions page.</p>
                <p id="para1">Have questions about a specific course?</p>
                <a id="cnt"href='Contact'>Inqurie About Courses</a>
            </div>
            <Footer/>
        </div>
    )
}

export default Courses