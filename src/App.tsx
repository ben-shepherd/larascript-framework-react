import './App.scss'
import Header from './components/Header'
import About from './components/sections/About/About'
import Documentation from './components/sections/Documentation'
import PoweredBy from './components/sections/PoweredBy/PoweredBy'

function App() {

  return (
    <>
      <Header />

      <PoweredBy />

      <Documentation />

      <About />
    </>
  )
}

export default App
