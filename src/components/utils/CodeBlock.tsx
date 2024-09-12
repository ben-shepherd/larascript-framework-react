
import { atomOneDark, CopyBlock as CodeBlockPlugin } from 'react-code-blocks';


type Props = {
    children: string | string[]
    language?: string
    showLineNumbers?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theme?: any
}


const CodeBlock = ({ children, language = 'typescript', showLineNumbers = true, theme = atomOneDark }: Props) => {
    return (
        <div className="codeBlock">
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