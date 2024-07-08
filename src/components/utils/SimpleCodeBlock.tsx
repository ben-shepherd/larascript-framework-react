
import CodeBlock from './CodeBlock';

type Props = {
    children: string | string[]
}

const SimpleCodeBlock = ({ children }: Props) => {
    return (
        <CodeBlock showLineNumbers={false}>{children}</CodeBlock>
    );
}

export default SimpleCodeBlock