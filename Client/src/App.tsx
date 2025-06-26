
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './appRoutes'
import Header from './comps/header'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
