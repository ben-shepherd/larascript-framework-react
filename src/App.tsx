import 'dotenv/config'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Routes from './routes/routes'

function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
