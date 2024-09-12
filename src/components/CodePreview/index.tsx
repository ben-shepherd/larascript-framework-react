import { Slide, SlideProps } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CodeItem from "./components/CodeItem";
import Slides, { SlidePage } from "./data/Slides";
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
            <div className="code_preview__slide_container w-full md:w-4/5 lg:w-2/4 xl:w-1/2">
                <Slide {...slideProps}>
                    {randomizedSlides.map((slidePage: SlidePage) => {

                        const { title, description, content } = slidePage;
                        const examples = slidePage.examples ?? [{ title, description, content }]

                        return (
                            <div key={JSON.stringify(examples)} className='code_preview__slide_item'>
                                {examples.map((slideItem) =>
                                    <CodeItem
                                        key={slideItem.title}
                                        title={slideItem.title as string}
                                        description={slideItem.description as string}
                                        code={slideItem.content as string} />
                                )}
                            </div>
                        )
                    })}
                </Slide>
            </div>
        </section>
    )
}

export default CodePreview