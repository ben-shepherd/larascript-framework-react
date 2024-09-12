import './App.scss'
import CodePreview from './components/CodePreview'
import Header from './components/Header'
import About from './components/sections/About/About'
import Documentation from './components/sections/Documentation'
import PoweredBy from './components/sections/PoweredBy/PoweredBy'

function App() {

  return (
    <>
      <Header />

      <CodePreview />

      <PoweredBy />

      <About />

      <Documentation />
    </>
  )
}

export default App
