import { Slide, SlideProps } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CodeItem from "./components/CodeItem";
import Slides from "./data/Slides";
import './styles.scss';

const CodePreview = () => {

    const randomizedSlides = [...Slides].sort(() => 0.5 - Math.random());

    const slideProps: Partial<SlideProps> = {
        canSwipe: true,
        indicators: true,
        pauseOnHover: true,
        transitionDuration: 250,
        defaultIndex: Math.floor(Math.random() * Slides.length),
        prevArrow: <></>,
        nextArrow: <></>,
    }
    
    return (
        <section id="code_preview" className="py-10">
            <div className="slide-container w-full md:w-4/5 lg:w-2/4 xl:w-1/2">
                <Slide {...slideProps}>
                    {randomizedSlides.map(({ content, title, description }) => {
                        return (
                            <CodeItem key={title} title={title} description={description} code={content} />
                        )
                    })}
                </Slide>
            </div>
        </section>
    )
}

export default CodePreview