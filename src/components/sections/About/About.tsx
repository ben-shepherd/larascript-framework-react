const About = () => {
    return (
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
    )
}

export default About