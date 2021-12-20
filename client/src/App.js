import './App.css';
import React from 'react';
import AllPets from './views/AllPets';
import OnePet from './views/OnePet';
import EditPet from './views/EditPet';
import NewPet from './views/NewPet';


import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>

      <div className="App">
        
        <div className= "Header">
          <h1>Pet Shelter</h1>
        </div>

        <div className='boxes'>
        <img className='catImg' src='https://www.humanesocietymiami.org/wp-content/uploads/2020/04/Adopt-a-shelter-pet-today_cat-2000px.jpg' alt='cat pic' />
        <Switch>

          <Route exact path = "/">
            <AllPets></AllPets>
          </Route>

          <Route exact path = "/new">
            <NewPet></NewPet>
          </Route>

          <Route exact path = "/pet/:idParam">
            <OnePet></OnePet>
          </Route>

          <Route exact path = "/edit/:idParam">
            <EditPet></EditPet>
          </Route>

        
        </Switch>

          <img className='dogImg' src='https://th.bing.com/th/id/OIP.mKN0VoyrHPZJBBavWGOD2AHaFC?pid=ImgDet&rs=1' alt='dog pic' />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
