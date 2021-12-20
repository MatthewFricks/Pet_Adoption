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
        <h1>Pet Shelter</h1>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
