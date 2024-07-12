import { useState } from 'react'
import './App.css'
import View from './component/View'

import Add from './component/Add'
import {Route,Routes} from 'react-router-dom'
import Demoaxios from './component/Demoaxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To React </h1>
      <View/>
     <Routes>
      <Route path='/'element={<Demoaxios/>}></Route>
      <Route path='/Add'element={<Add/>}></Route>
     </Routes>
    </>
  )
}

export default App