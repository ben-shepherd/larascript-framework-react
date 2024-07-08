
import { CopyBlock as CodeBlockPlugin } from 'react-code-blocks';

type Props = {
    children: string | string[]
    language?: string
    showLineNumbers?: boolean
}

const CodeBlock = ({ children, language = 'typescript', showLineNumbers = true }: Props) => {
    console.log('children', {children})
    return (
        <div className="codeBlock">
            <CodeBlockPlugin
                text={children as string}
                language={language}
                showLineNumbers={showLineNumbers}
            />
        </div>
    );
}

export default CodeBlock