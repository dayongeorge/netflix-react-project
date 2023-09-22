import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import './App.css';
import {originals,action,horror} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost  url={action} title='Action' isSmall/>
      <RowPost  url={horror} title='Horror' isSmall/>


    </div>
  );
}

export default App;
