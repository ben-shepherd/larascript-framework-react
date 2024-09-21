import { IBlogPost } from "../../../../../interfaces/IBlog";
import BlogPostContainer from "../../components/BlogPostContainer";

const FirstBlogPost = ({ post }: { post: IBlogPost }) => {
    return (
        <BlogPostContainer post={post}>
            <article>
                <h1>From TypeScript Novice to Framework Creator: A Developer's Journey</h1>

                <section>
                    <p>I initiated this project with the primary goal of deepening my understanding of TypeScript. Despite several months of experience building websites with React and TypeScript, I still felt uncertain about many aspects of the language. My main challenge was understanding generics - their purpose, implementation, and benefits remained elusive.</p>

                    <p>As I began working on the project, my initial aim was to create an application for a video game that could track real-time market events. However, early in the development process, I realized that with proper abstraction, I could create services generic enough to build something fully customizable and configurable. This realization gave birth to the idea of creating a framework.</p>
                </section>

                <section>
                    <p>Having used Laravel extensively for years, I knew that my framework should aim to recreate some of the most valuable features of this popular PHP framework. I identified several key components that I believed were essential for a framework to be considered complete:</p>

                    <ol>
                        <li>A web server capable of handling routing</li>
                        <li>A system for managing databases and handling data</li>
                        <li>Authentication functionality</li>
                        <li>Additional features that would work cohesively to facilitate the construction of robust APIs</li>
                    </ol>
                </section>

                <section>
                    <p>The first few weeks of development were challenging. I found that my ability to interpret TypeScript syntax wasn't as advanced as I had initially thought, and I often found myself stumped by seemingly minor hurdles. I discovered that the most effective approach was to code first and get it working, even if it wasn't optimal. This strategy allowed me to envision the end goal for each specific feature, providing a clearer picture of what the project could become with further refinement.</p>

                    <p>The initial month was dedicated to establishing the core concepts. Even though many of these early implementations were inefficient and barely functional, they served as crucial stepping stones. These rough drafts helped me visualize the project's potential and set clear objectives for improvement.</p>
                </section>

                <section>
                    <p>Three months later, we have a functional website and a project that I feel confident releasing as a beta version. This milestone presents an exciting opportunity to gather feedback from other developers, which will be invaluable for further expansion and enhancement of the framework.</p>

                    <p>It's important to note that the current state of the framework, which I've named Larascript, is far from perfect and certainly not complete. However, I'm extremely pleased with its progress so far. The potential I see in this project fills me with excitement for its future.</p>
                </section>

                <section>
                    <p>Looking ahead, there are several features I'm eager to implement to make Larascript even more powerful and user-friendly:</p>

                    <ol>
                        <li>Swagger auto-generated documentation: This will make it easier for developers to understand and interact with APIs built using the framework.</li>
                        <li>Views: Adding a robust view system will enhance the framework's capabilities for front-end development.</li>
                        <li>Caching: Implementing an efficient caching system will significantly improve performance for applications built with Larascript.</li>
                    </ol>

                    <p>These additions, along with continued refinement of existing features, will help shape Larascript into a more comprehensive and versatile framework. I'm looking forward to the challenges and learning opportunities that lie ahead as I continue to develop and expand this project.</p>
                </section>
            </article>
        </BlogPostContainer>
    );
}

export default FirstBlogPost;