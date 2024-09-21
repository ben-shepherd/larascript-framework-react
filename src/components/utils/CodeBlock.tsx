
import { atomOneDark, CopyBlock as CodeBlockPlugin } from 'react-code-blocks';


type Props = {
    children: string | string[]
    language?: string
    showLineNumbers?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theme?: any;
    className?: string;
}


const CodeBlock = ({ children, language = 'typescript', showLineNumbers = true, theme = atomOneDark, className = '' }: Props) => {
    return (
        <div className={`codeBlock ${className}`}>
            <CodeBlockPlugin
                text={children as string}
                language={language}
                showLineNumbers={showLineNumbers}
                theme={theme}
            />
        </div>
    );
}

export default CodeBlock