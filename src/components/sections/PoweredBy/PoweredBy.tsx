const PoweredBy = () => {
    return (
        <section id='section-powered-by' className='section'>
            <h1 className='text-center pt-10'>Powered By</h1>
            <div className="container logo-items flex flex-wrap lg:flex-nowrap">
                <div className='logo-item w-full lg:w-1/4 md:w-1/2 nodejs'
                     style={{backgroundImage: 'url(/images/nodejs.png)'}}></div>
                <div className='logo-item w-full lg:w-1/4 md:w-1/2 typescript'
                     style={{backgroundImage: 'url(/images/typescript.png)'}}></div>
                <div className='logo-item w-full lg:w-1/4 md:w-1/2 express'
                     style={{backgroundImage: 'url(/images/express.png)'}}></div>
                <div className='logo-item w-full lg:w-1/4 md:w-1/2 mongodb'
                     style={{backgroundImage: 'url(/images/mongodb.png)'}}></div>
            </div>

            <h1 className='text-center pt-10 pb-3'>Core Features</h1>
            <h3 className='text-slate-600 text-center pb-10'>Explore the essential components that power the
                framework.</h3>

            <div className='core-features-container mb-10'>
                <div className='container'>
                    <div className='flex flex-wrap lg:flex-nowrap text-slate-700'>
                        <div className='w-full lg:w-1/2'>
                            <ul className='list-disc px-10'>
                                <li>Providers<br/>
                                    <p>Easily provide configuration to your application services.</p>
                                </li>
                                <li>Containers<br/>
                                    <p>Containerize your services for easy usage across the application.</p>
                                </li>
                                <li>Services<br/>
                                    <p>Create, configure, and use services in your application.</p>
                                </li>
                                <li>Singletons<br/>
                                    <p>Use singletons to share a single instance of a service across the
                                        application.</p>
                                </li>
                                <li>MongoDB<br/>
                                    <p>Easy to use MongoDB module.</p>
                                </li>
                                <li>Express<br/>
                                    <p>Web server for your API.</p>
                                </li>
                                <li>Routing<br/>
                                    <p>Multiple routing files for structure in your application.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <ul className='list-disc px-10'>
                                <li>Models<br/>
                                    <p>Create, configure, and use models in your application.</p>
                                </li>
                                <li>Repositories<br/>
                                    <p>A centralized area for all your queries across your application.</p>
                                </li>
                                <li>Authentication (JWTs)<br/>
                                    <p>Plug and play authorization component using JSON Web Tokens.</p>
                                </li>
                                <li>Events<br/>
                                    <p>Subscribe and listen to events in your application.</p>
                                </li>
                                <li>Observers<br/>
                                    <p>Monitor data changes in your application and modify them.</p>
                                </li>
                                <li>Console Commands<br/>
                                    <p>Run your console commands in your application.</p>
                                </li>
                                <li>Queue Worker<br/>
                                    <p>Run stored tasks as workers in your application.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-center pt-10 pb-3 mb-5'>Want to contribute?</h1>
            <div className="container flex justify-center">
                <div className='text-center mb-10 text-slate-700 w-full lg:w-1/2'>
                    <p className='mb-10'>The Larascript Node community is growing, and I'd love for you to be a part of
                        it! If you've
                        been inspired by what this framework can do and want to help shape its future, I welcome your
                        contributions.</p>

                    <p className='mb-10'>Whether you've found a bug that needs squashing, an idea for a new feature, or
                        you simply want to
                        lend your coding expertise - I'm eager to have you on board. Simply fork the Larascript Node
                        repository on GitHub, work your magic, and submit a pull request. I'll review your
                        changes and get them integrated into the codebase.</p>

                    <p className='mb-10'>Together, we can take Larascript Node to new heights and deliver an even more
                        powerful, flexible
                        and user-friendly Node.js framework for developers everywhere. So what are you waiting for?
                        Fork, code, and contribute today!</p>
                </div>
            </div>
        </section>
    )
}

export default PoweredBy