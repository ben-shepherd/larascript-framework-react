const About = () => {
    return (
        <div id="section-about" className='section py-24'>
            <h1 className='text-center mb-10'>Meet The Author</h1>
            <div className="container">
                <div className='flex flex-wrap lg:flex-nowrap'>
                    <div className='author-container w-full lg:w-1/2'>
                        <div className='author-image mr-24 mt-5' style={{ backgroundImage: 'url(/images/author.jpg)' }}></div>
                    </div>
                    <div className="info-container w-full lg:w-1/2">
                        <h3 className='author-text text-2xl'>Benjamin Shepherd</h3>
                        <p className='role text-xs tex'>Software Developer</p>

                        <p className='mt-3 bio'>
                            Hello, I'm Benjamin, an experienced software developer with expertise in Node.js, Typescript, MongoDB, Express, PHP, Laravel, Symfony, SQL/Postgres, and React. My passion for technology drives me to constantly innovate and improve my skills. I believe in the power of code to transform ideas into reality and am committed to developing top-notch web applications. Feel free to connect with me to discuss projects, technology, or just to share ideas.
                        </p>


                        <p className='mt-10 email'>
                            <strong>Email Address</strong>:<br /> <a href='mailto:ben.shepherd@gmx.com'>ben.shepherd@gmx.com</a>
                        </p>
                        <p className='mt-3 github'>
                            <strong>GitHub</strong>:<br/> <a href='https://github.com/ben-shepherd'
                                                             target='_blank'>https://github.com/ben-shepherd</a>
                        </p>
                        <p className='mt-3 email'>
                            <strong>LinkedIn</strong>:<br/> <a href='https://www.linkedin.com/in/benjamin-programmer/'
                                                               target='_blank'>https://www.linkedin.com/in/benjamin-programmer/</a>
                        </p>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default About