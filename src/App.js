import React from 'react'
import {BrowserRouter as Router,Routes,Route,useRoutes,} from "react-router-dom";
import * as Pages from './pages';
import './App.css';

const App = () => {
  const routes = useRoutes ([
    {path:'/', element : <Pages.Home /> },
    {path:'/new', element : <Pages.New />}
  ])
  return routes;
}



const AppWrapper = () => {
  return (

    <Router>
      <App />
    </Router>

  );
};
export default AppWrapper;
