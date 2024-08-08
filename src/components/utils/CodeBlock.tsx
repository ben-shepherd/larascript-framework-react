
import { CopyBlock as CodeBlockPlugin, dracula } from 'react-code-blocks';

type Props = {
    children: string | string[]
    language?: string
    showLineNumbers?: boolean
}

const CodeBlock = ({ children, language = 'typescript', showLineNumbers = true }: Props) => {
    return (
        <div className="codeBlock">
            <CodeBlockPlugin
                text={children as string}
                language={language}
                showLineNumbers={showLineNumbers}
                theme={dracula}
                codeBlock
            />
        </div>
    );
}

export default CodeBlock