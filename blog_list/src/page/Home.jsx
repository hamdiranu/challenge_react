import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';

class Home extends React.Component {
    render() {
      return (
        <div className="body">
          < Header/>
            <div className="container container2">
                <div className="tengah">
                    <div className="row align-items-center gambar_fix">
                        <div className="col-md-5 foto">
                            <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} style={{width:"330px",height:"330px"}}/>
                        </div>
                        <div className="col-md-7 my_name">
                            <h4 id="home">Hi, my name is</h4>
                            <h1 id="home">Anne Sullivan</h1>
                            <h3 id="home">I build things for the web</h3>
                            <a href="contact.html" className="buttonhome">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;