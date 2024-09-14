import { atomOneDark } from "react-code-blocks";
import CodeBlock from "../../utils/CodeBlock";

type Options = {
    title: string;
    description: string;
    code: string;
}

const CodeItem = ({ code, title, description }: Options) => {
    return (
        <div className='code_preview__item'>
            <h1 className="code_preview__item_title">{title}</h1>
            <h2 className="code_preview__item_title_small mb-10 my-3">{description}</h2>
            
            <div className="code_preview__item_code mb-10">
                <CodeBlock theme={atomOneDark}>
                    {code}
                </CodeBlock>
            </div>
        </div>
    )

}

export default CodeItem