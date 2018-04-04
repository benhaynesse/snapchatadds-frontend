import React from 'react'
// import Header from './Header'
import IndexPage from '../pages/index';

require('../styles/App.css');

// Where react router will be inited
const App = ({ children }) =>
  <div>
    <IndexPage/>
  </div>

export default App