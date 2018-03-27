import React from 'react'
// import Header from './Header'
import HomePage from '../pages/home';

// Where react router will be inited
const App = ({ children }) =>
  <div>
    <h4>Header</h4>
    <div>
      {/* {children} */}

      <HomePage/>
    </div>
  </div>

export default App