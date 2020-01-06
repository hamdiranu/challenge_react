import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 col-sm-12 altalogo">
                        <img src={require("../assets/img/logo-ALTA.png")} />
                    </div>
                    <div className="col-md-5 option1">
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <p>HOME</p>
                                </li>
                                <li>
                                    <a href="about_me.html">ABOUT</a>
                                </li>
                                <li>
                                    <a href="experience.html">EXPERIENCE</a>
                                </li>
                                <li>
                                    <a href="contact.html">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Header;