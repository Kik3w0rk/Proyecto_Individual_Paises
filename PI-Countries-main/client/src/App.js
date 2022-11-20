import './App.css';
import {Route} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Activity from './components/Activity/Activity';
import Countries from './components/Countries/Countries';
import Details from './components/Details/Details';
import { useDispatch } from 'react-redux';
import { getAllCountries } from "./redux/actions";

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllCountries());
  },[dispatch]);

  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/home">
        <Navbar/>
      </Route>
      <Route path="/home/countries">
        <Countries/>
      </Route>
      <Route path="/home/details/:countryId">
        <Details/>
      </Route>
      <Route path="/home/activities">
        <Activity/>
      </Route>
    </div>
  );
}

export default App;
