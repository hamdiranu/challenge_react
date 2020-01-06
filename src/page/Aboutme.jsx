import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';
import Footer from '../component/footer';

class Contactus extends React.Component {
    render() {
      return (
        <div className="body">
          <Header/>
            <div className="container-fluid about">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="aboutme1">
                                <h1>ABOUT ME.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid about_isi">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="deskripsi">
                                <p>
                                    Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.
                                </p>
                                <br/>
                            </div> 
                            <div className="education">
                                <h3>Education</h3>   
                                <ul>
                                    <li>
                                        <div className="tahun">2014</div>
                                        <div className="grade">DIPLOMA</div>
                                        <div className="jurusan">Computer Engineering - University of Chicago</div>
                                    </li><br/>
                                    <li>
                                        <div className="tahun">2018</div>
                                        <div className="grade">BACHELOR DEGREE</div>
                                        <div className="jurusan">BS Computer Engineering - University of Chicago</div>
                                    </li><br/>
                                </ul>
                            </div>
                            <div className="Table" id="judul">
                                <h4>Here’s few technologies I’ve been working with recently :</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>HTML & CSS</td>
                                            <td>Serverless</td>
                                            <td>Scrum</td>
                                        </tr>
                                        <tr>
                                            <td>Programming</td>
                                            <td>Restful API</td>
                                            <td>Tes-Driven Dev</td>
                                        </tr>
                                        <tr>
                                            <td>Database</td>
                                            <td>javascript</td>
                                            <td>Software Testing</td>
                                        </tr>
                                        <tr>
                                            <td>Git & Github</td>
                                            <td>Single Page App</td>
                                            <td>UX/UI Designer</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-6 foto_about">
                            <div className="foto">
                                <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} style={{width:"249px", height:"248"}}/>
                            </div>
                            <div className="dots">
                            <img src={require("../assets/img/img-dot.png")} style={{width:"90", height:"76"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Contactus;
  