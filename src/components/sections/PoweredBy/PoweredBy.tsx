const PoweredBy = () => {
    return (
        <section className='section__powered_by section'>
            <h1 className='section__powered_by__h1 text-center pt-10'>Technologies</h1>
            <div className="section__powered_by__logo_items container flex flex-wrap lg:flex-nowrap">
                <div className='section__powered_by__logo_items__item section__powered_by__logo_items__logo_nodejs w-full lg:w-2/5 md:w-1/2'
                    style={{ backgroundImage: 'url(/images/nodejs.png)' }}></div>
                <div className='section__powered_by__logo_items__item section__powered_by__logo_items__logo_typescript w-full lg:w-2/5 md:w-1/2'
                    style={{ backgroundImage: 'url(/images/typescript.png)' }}></div>
                <div className='section__powered_by__logo_items__item section__powered_by__logo_items__logo_express w-full lg:w-2/5 md:w-1/2'
                    style={{ backgroundImage: 'url(/images/express.png)' }}></div>
                <div className='section__powered_by__logo_items__item section__powered_by__logo_items__logo_mongodb w-full lg:w-2/5 md:w-1/2'
                    style={{ backgroundImage: 'url(/images/mongodb.png)' }}></div>
                <div className='section__powered_by__logo_items__item section__powered_by__logo_items__logo_postgres w-full lg:w-2/5 md:w-1/2'
                    style={{ backgroundImage: 'url(/images/postgres.png)' }}></div>
            </div>

            <h1 className='section__powered_by__h1 text-center pt-10 pb-3'>Essentials</h1>
            <h3 className='text-slate-600 text-center pb-10'>Learn about the core features that make up the
                foundation of Larascript.</h3>

            <div className='core_features__container mb-10'>
                <div className='container'>
                    <div className='flex flex-wrap lg:flex-nowrap text-slate-700'>
                        <div className='core_features__container_column w-full lg:w-1/2'>
                            <ul className='core_features__container__ul px-10'>
                                <li className="core_features__container__ul__li">Providers<br />
                                    <p>Streamline service configuration for your application.</p>
                                </li>
                                <li className="core_features__container__ul__li">Containers<br />
                                    <p>Encapsulate services for seamless deployment across your application.</p>
                                </li>
                                <li className="core_features__container__ul__li">Services<br />
                                    <p>Develop, configure, and integrate services within your application ecosystem.</p>
                                </li>
                                <li className="core_features__container__ul__li">Singletons<br />
                                    <p>Implement shared service instances for consistent functionality throughout your application.</p>
                                </li>
                                <li className="core_features__container__ul__li">MongoDB<br />
                                    <p>Intuitive MongoDB integration module for efficient data management.</p>
                                </li>
                                <li className="core_features__container__ul__li">Express<br />
                                    <p>Robust web server framework for building scalable APIs.</p>
                                </li>
                                <li className="core_features__container__ul__li">Routing<br />
                                    <p>Organize your application structure with modular routing files.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='core_features__container_column w-full lg:w-1/2'>
                            <ul className='core_features__container__ul px-10'>
                                <li className="core_features__container__ul__li">Models<br />
                                    <p>Design, configure, and utilize data models to enhance your application's architecture.</p>
                                </li>
                                <li className="core_features__container__ul__li">Repositories<br />
                                    <p>Centralize and manage database queries for improved consistency and maintainability.</p>
                                </li>
                                <li className="core_features__container__ul__li">Authentication<br />
                                    <p>Implement secure, token-based authorization using JSON Web Tokens.</p>
                                </li>
                                <li className="core_features__container__ul__li">Events<br />
                                    <p>Create and manage a flexible event-driven architecture within your application.</p>
                                </li>
                                <li className="core_features__container__ul__li">Observers<br />
                                    <p>Monitor and react to data changes dynamically across your application.</p>
                                </li>
                                <li className="core_features__container__ul__li">Console Commands<br />
                                    <p>Execute custom console commands to streamline application management and maintenance.</p>
                                </li>
                                <li className="core_features__container__ul__li">Queue Worker<br />
                                    <p>Process background tasks efficiently using a robust queue system.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='section__powered_by__h1 text-center pt-10 pb-3 mb-5'>Want to contribute?</h1>
            <div className="section__powered_by__contribute container flex justify-center">
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