import { Button } from '@headlessui/react'
import './App.scss'

function App() {

  return (
    <>
      <header>
        <div id="logo-container" className="py-5 text-3xl">
          <div id="logo-text" className='py-5'>
            <h1>Larascript Node</h1>
          </div>
          <div id="logo-subtext">
            <p>A Node.js framework inspired by Laravel, built with TypeScript.</p>
          </div>
          <div id="header-buttons" className='p-5'>
            <div className="header-button">
              <Button className="rounded bg-stone-200 text-gray-500 py-2 px-4 text-sm data-[hover]:bg-red-300 data-[hover]:text-gray-50">
                View on GitHub
              </Button>
            </div>
            <div className="header-button">
              <Button className="rounded bg-stone-200 text-gray-500 py-2 px-4 text-sm data-[hover]:bg-red-300 data-[hover]:text-gray-50">
                Documentation
              </Button>
            </div>
          </div>
        </div>
        <div id="header-down">
          <svg className="size-6 h-6 alice-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="abstract-lines">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800" opacity="0.52"><g stroke-width="1" stroke="hsl(0, 0%, 100%)" fill="none" stroke-linecap="round"><line x1="110" y1="0" x2="0" y2="110" opacity="1.00"></line><line x1="220" y1="0" x2="110" y2="110" opacity="1.00"></line><line x1="220" y1="0" x2="330" y2="110" opacity="1.00"></line><line x1="440" y1="0" x2="330" y2="110" opacity="1.00"></line><line x1="440" y1="0" x2="550" y2="110" opacity="1.00"></line><line x1="550" y1="0" x2="660" y2="110" opacity="1.00"></line><line x1="770" y1="0" x2="660" y2="110" opacity="1.00"></line><line x1="770" y1="0" x2="880" y2="110" opacity="1.00"></line><line x1="880" y1="0" x2="990" y2="110" opacity="1.00"></line><line x1="990" y1="0" x2="1100" y2="110" opacity="1.00"></line><line x1="1210" y1="0" x2="1100" y2="110" opacity="1.00"></line><line x1="1320" y1="0" x2="1210" y2="110" opacity="1.00"></line><line x1="1430" y1="0" x2="1320" y2="110" opacity="1.00"></line><line x1="0" y1="110" x2="110" y2="220" opacity="0.87"></line><line x1="110" y1="110" x2="220" y2="220" opacity="0.87"></line><line x1="330" y1="110" x2="220" y2="220" opacity="0.87"></line><line x1="330" y1="110" x2="440" y2="220" opacity="0.87"></line><line x1="550" y1="110" x2="440" y2="220" opacity="0.87"></line><line x1="550" y1="110" x2="660" y2="220" opacity="0.87"></line><line x1="770" y1="110" x2="660" y2="220" opacity="0.87"></line><line x1="770" y1="110" x2="880" y2="220" opacity="0.87"></line><line x1="990" y1="110" x2="880" y2="220" opacity="0.87"></line><line x1="990" y1="110" x2="1100" y2="220" opacity="0.87"></line><line x1="1210" y1="110" x2="1100" y2="220" opacity="0.87"></line><line x1="1320" y1="110" x2="1210" y2="220" opacity="0.87"></line><line x1="1320" y1="110" x2="1430" y2="220" opacity="0.87"></line><line x1="0" y1="220" x2="110" y2="330" opacity="0.74"></line><line x1="110" y1="220" x2="220" y2="330" opacity="0.74"></line><line x1="220" y1="220" x2="330" y2="330" opacity="0.74"></line><line x1="330" y1="220" x2="440" y2="330" opacity="0.74"></line><line x1="550" y1="220" x2="440" y2="330" opacity="0.74"></line><line x1="550" y1="220" x2="660" y2="330" opacity="0.74"></line><line x1="770" y1="220" x2="660" y2="330" opacity="0.74"></line><line x1="770" y1="220" x2="880" y2="330" opacity="0.74"></line><line x1="880" y1="220" x2="990" y2="330" opacity="0.74"></line><line x1="990" y1="220" x2="1100" y2="330" opacity="0.74"></line><line x1="1100" y1="220" x2="1210" y2="330" opacity="0.74"></line><line x1="1320" y1="220" x2="1210" y2="330" opacity="0.74"></line><line x1="1430" y1="220" x2="1320" y2="330" opacity="0.74"></line><line x1="110" y1="330" x2="0" y2="440" opacity="0.61"></line><line x1="110" y1="330" x2="220" y2="440" opacity="0.61"></line><line x1="220" y1="330" x2="330" y2="440" opacity="0.61"></line><line x1="330" y1="330" x2="440" y2="440" opacity="0.61"></line><line x1="550" y1="330" x2="440" y2="440" opacity="0.61"></line><line x1="550" y1="330" x2="660" y2="440" opacity="0.61"></line><line x1="660" y1="330" x2="770" y2="440" opacity="0.61"></line><line x1="880" y1="330" x2="770" y2="440" opacity="0.61"></line><line x1="880" y1="330" x2="990" y2="440" opacity="0.61"></line><line x1="1100" y1="330" x2="990" y2="440" opacity="0.61"></line><line x1="1100" y1="330" x2="1210" y2="440" opacity="0.61"></line><line x1="1320" y1="330" x2="1210" y2="440" opacity="0.61"></line><line x1="1320" y1="330" x2="1430" y2="440" opacity="0.61"></line><line x1="0" y1="440" x2="110" y2="550" opacity="0.48"></line><line x1="110" y1="440" x2="220" y2="550" opacity="0.48"></line><line x1="220" y1="440" x2="330" y2="550" opacity="0.48"></line><line x1="330" y1="440" x2="440" y2="550" opacity="0.48"></line><line x1="550" y1="440" x2="440" y2="550" opacity="0.48"></line><line x1="660" y1="440" x2="550" y2="550" opacity="0.48"></line><line x1="660" y1="440" x2="770" y2="550" opacity="0.48"></line><line x1="770" y1="440" x2="880" y2="550" opacity="0.48"></line><line x1="880" y1="440" x2="990" y2="550" opacity="0.48"></line><line x1="1100" y1="440" x2="990" y2="550" opacity="0.48"></line><line x1="1210" y1="440" x2="1100" y2="550" opacity="0.48"></line><line x1="1210" y1="440" x2="1320" y2="550" opacity="0.48"></line><line x1="1320" y1="440" x2="1430" y2="550" opacity="0.48"></line><line x1="0" y1="550" x2="110" y2="660" opacity="0.35"></line><line x1="110" y1="550" x2="220" y2="660" opacity="0.35"></line><line x1="220" y1="550" x2="330" y2="660" opacity="0.35"></line><line x1="330" y1="550" x2="440" y2="660" opacity="0.35"></line><line x1="550" y1="550" x2="440" y2="660" opacity="0.35"></line><line x1="550" y1="550" x2="660" y2="660" opacity="0.35"></line><line x1="770" y1="550" x2="660" y2="660" opacity="0.35"></line><line x1="880" y1="550" x2="770" y2="660" opacity="0.35"></line><line x1="880" y1="550" x2="990" y2="660" opacity="0.35"></line><line x1="990" y1="550" x2="1100" y2="660" opacity="0.35"></line><line x1="1100" y1="550" x2="1210" y2="660" opacity="0.35"></line><line x1="1320" y1="550" x2="1210" y2="660" opacity="0.35"></line><line x1="1430" y1="550" x2="1320" y2="660" opacity="0.35"></line><line x1="110" y1="660" x2="0" y2="770" opacity="0.22"></line><line x1="110" y1="660" x2="220" y2="770" opacity="0.22"></line><line x1="330" y1="660" x2="220" y2="770" opacity="0.22"></line><line x1="330" y1="660" x2="440" y2="770" opacity="0.22"></line><line x1="550" y1="660" x2="440" y2="770" opacity="0.22"></line><line x1="660" y1="660" x2="550" y2="770" opacity="0.22"></line><line x1="770" y1="660" x2="660" y2="770" opacity="0.22"></line><line x1="770" y1="660" x2="880" y2="770" opacity="0.22"></line><line x1="990" y1="660" x2="880" y2="770" opacity="0.22"></line><line x1="1100" y1="660" x2="990" y2="770" opacity="0.22"></line><line x1="1100" y1="660" x2="1210" y2="770" opacity="0.22"></line><line x1="1320" y1="660" x2="1210" y2="770" opacity="0.22"></line><line x1="1430" y1="660" x2="1320" y2="770" opacity="0.22"></line><line x1="0" y1="770" x2="110" y2="880" opacity="0.09"></line><line x1="220" y1="770" x2="110" y2="880" opacity="0.09"></line><line x1="330" y1="770" x2="220" y2="880" opacity="0.09"></line><line x1="440" y1="770" x2="330" y2="880" opacity="0.09"></line><line x1="440" y1="770" x2="550" y2="880" opacity="0.09"></line><line x1="550" y1="770" x2="660" y2="880" opacity="0.09"></line><line x1="660" y1="770" x2="770" y2="880" opacity="0.09"></line><line x1="770" y1="770" x2="880" y2="880" opacity="0.09"></line><line x1="990" y1="770" x2="880" y2="880" opacity="0.09"></line><line x1="1100" y1="770" x2="990" y2="880" opacity="0.09"></line><line x1="1210" y1="770" x2="1100" y2="880" opacity="0.09"></line><line x1="1320" y1="770" x2="1210" y2="880" opacity="0.09"></line><line x1="1430" y1="770" x2="1320" y2="880" opacity="0.09"></line></g></svg>
        </div>
      </header>

      <div id='section-powered-by' className='section'>
        <h1 className='text-center pt-10'>Powered By</h1>
        <div className="container logo-items h-56">
          <div className='logo-item nodejs' style={{ backgroundImage: 'url(/images/nodejs.png)' }}></div>
          <div className='logo-item typescript' style={{ backgroundImage: 'url(/images/typescript.png)' }}></div>
          <div className='logo-item express' style={{ backgroundImage: 'url(/images/express.png)' }}></div>
          <div className='logo-item mongodb' style={{ backgroundImage: 'url(/images/mongodb.png)' }}></div>
        </div>

        <h1 className='text-center pt-10 pb-3'>Core Features</h1>
        <h3 className='text-slate-600 text-center pb-10'>Explore the essential components that power the framework.</h3>

        <div className='core-features-container mb-10'>
          <div className='container'>
            <div className='grid grid-cols-6 px-26 text-slate-700'>
              <div className='col-span-2 col-start-2'>
                <ul className='list-disc px-10'>
                  <li>Providers<br />
                    <p>Easily provide configuration to your application services.</p>
                  </li>
                  <li>Containers<br />
                    <p>Containerize your services for easy usage across the application.</p>
                  </li>
                  <li>Services<br />
                    <p>Create, configure, and use services in your application.</p>
                  </li>
                  <li>Singletons<br />
                    <p>Use singletons to share a single instance of a service across the application.</p>
                  </li>
                  <li>MongoDB<br />
                    <p>Easy to use MongoDB module.</p>
                  </li>
                  <li>Express<br />
                    <p>Web server for your API.</p>
                  </li>
                  <li>Routing<br />
                    <p>Structured routes for Express.</p>
                  </li>
                </ul>
              </div>
              <div className='col-span-2'>
                <ul className='list-disc px-10'>
                  <li>Models<br />
                    <p>Create, configure, and use models in your application.</p>
                  </li>
                  <li>Repositories<br />
                    <p>Centralized queries for your application.</p>
                  </li>
                  <li>Authentication (JWTs)<br />
                    <p>Plug and play authorization component using JSON Web Tokens.</p>
                  </li>
                  <li>Events<br />
                    <p>Subscrie and listen to events in your application.</p>
                  </li>
                  <li>Observers<br />
                    <p>Monitor data changes in your application and modify them.</p>
                  </li>
                  <li>Console Commands<br />
                    <p>Run your console commands in your application.</p>
                  </li>
                  <li>Queue Worker<br />
                    <p>Run stored tasks as workers in your application.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section-about" className='section p-0 my-10'>
        <h1 className='text-center mb-10'>Author Bio</h1>
        <div className="container">
          <div className='grid grid-cols-2 pb-10'>
            <div className='left'>
              <div className='author-image mr-24 mt-5' style={{ backgroundImage: 'url(/images/author.jpg)' }}></div>
            </div>
            <div>
              <h3 className='author-text text-2xl'>Benjamin Shepherd</h3>
              <p className='role text-xs tex'>Software Developer</p>

              <p className='mt-3 bio'>
                Hello, I'm Benjamin, an experienced software developer with expertise in Node.js, Typescript, MongoDB, Express, PHP, Laravel, Symfony, SQL/Postgres, and React. My passion for technology drives me to constantly innovate and improve my skills. I believe in the power of code to transform ideas into reality and am committed to developing top-notch web applications. Feel free to connect with me to discuss projects, technology, or just to share ideas!
              </p>


              <p className='mt-3 email'>
                <strong>Email Address</strong>: <a href='mailto:ben.shepherd@gmx.com'>ben.shepherd@gmx.com</a>
              </p>
              <p className='mt-3 github'>
                <strong>GitHub</strong>: <a href='https://github.com/ben-shepherd' target='_blank'>https://github.com/ben-shepherd</a>
              </p>
              <p className='mt-3 email'>
                <strong>LinkedIn</strong>: <a href='https://www.linkedin.com/in/benjamin-programmer/' target='_blank'>https://www.linkedin.com/in/benjamin-programmer/</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
