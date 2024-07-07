
import { CopyBlock as CodeBlockPlugin } from 'react-code-blocks';

type Props = {
    code?: string
    children?: string
    language: string
    showLineNumbers?: boolean
}

const CodeBlock = ({ code, children, language, showLineNumbers }: Props) => {
    const text = code ?? children

    return (
        <div className="codeBlock">
            <CodeBlockPlugin
                text={text ?? ''}
                language={language}
                showLineNumbers={showLineNumbers}
            />
        </div>
    );
}

export default CodeBlock