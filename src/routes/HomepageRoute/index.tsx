import CodePreview from '../../components/CodePreview'
import Header from '../../components/Header'
import About from '../../components/sections/About/About'
import Documentation from '../../components/sections/Documentation'
import PoweredBy from '../../components/sections/PoweredBy/PoweredBy'
import config from '../../config/config'

const Homepage = () => {

  return (
    <>
      <Header options={config.headers['homepage']} />

      <CodePreview />

      <PoweredBy />

      <About />

      <Documentation />
    </>
  )
}

export default Homepage
