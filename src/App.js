import './App.css';
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import FeatureScreen from './screens/FeatureScreen'
import CareerScreen from './screens/CareerScreen'
import CareerScreen1 from './screens/CareerScreen1'

import Review from './components/Review'

import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

function App() {
  return(
    <Router className='body'>
      {/* <Route  path='/' component={Review} exact /> */}

      <Route  path='/' component={HomeScreen} exact />
      <Route path='/feature' component={FeatureScreen} />
      <Route path='/career' component={CareerScreen} />
      <Route path='/career1' component={CareerScreen1} />
      <Route path='/howitwork' component={FeatureScreen} />
    </Router>
  )
    
}

export default App;
