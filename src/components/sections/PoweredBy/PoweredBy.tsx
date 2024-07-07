const PoweredBy = () => {
    return (
        <section id='section-powered-by' className='section'>
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
                                    <p>Multiple routing files for structure in your application.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <ul className='list-disc px-10'>
                                <li>Models<br />
                                    <p>Create, configure, and use models in your application.</p>
                                </li>
                                <li>Repositories<br />
                                    <p>A centralized area for all your queries across your application.</p>
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
        </section>
    )
}

export default PoweredBy