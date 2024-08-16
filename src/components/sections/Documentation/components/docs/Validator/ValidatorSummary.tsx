import CodeBlock from "../../../../../utils/CodeBlock";

const ValidatorSummary = () => {
    return (
        <article>
            <p>The framework provides a robust validation service that can be easily accessed using the container system. This service is a wrapper around Joi, a powerful schema description language and data validator for JavaScript.</p>
            
            <h3>Accessing the Validation Service</h3>
            <p>You can access the validation service using the following code:</p>
            
            <CodeBlock language="typescript">
                {`const validate = App.container('validate');`}
            </CodeBlock>
            
            <h3>On-the-Fly Validation</h3>
            <p>The validation service allows you to create and use validators dynamically. Here's an example:</p>
            
            <CodeBlock language="typescript">
                {`const validator = App.container('validate').validator({
    name: Joi.string().required(),
    email: Joi.string().email().required()
})

const result = validator.validate({
    name: 'test',
    email: 'test'
})

if(!result.success) {
    console.error(result.joi.error?.message ?? 'Validation failed')
}`}
            </CodeBlock>

        </article>
    );
}

export default ValidatorSummary;