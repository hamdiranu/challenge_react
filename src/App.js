import React, { Component } from 'react';
import Home from './page/Home';
import Contactus from './page/Contactus';
import Aboutme from './page/Aboutme';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Home/> */}
        {/* <Aboutme/> */}
        <Contactus/>
      </div>
    );
  }
}

export default App;
