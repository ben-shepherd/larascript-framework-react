import CodeBlock from "../../../../../utils/CodeBlock";

const ValidatorCreating = () => {
  return (
    <article>
      <p>To create a new validator, you can use the provided command-line tool:</p>

      <CodeBlock language="bash">
        yarn dev make:validator --name=UpdateUser
      </CodeBlock>

      <p>This command generates a new validator file named `UpdateUserValidator.ts` with the following structure:</p>

      <CodeBlock language="typescript">
        {`import BaseValidator from "@src/core/domains/validator/base/BaseValidator";
import Joi, { ObjectSchema } from "joi";

class UpdateUserValidator extends BaseValidator
{
    rules(): ObjectSchema {
        return Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }
}

export default UpdateUserValidator`}
      </CodeBlock>

      <h2>Custom Validation Methods</h2>
      <p>In addition to the standard Joi validation rules, you can create custom validation methods for more complex scenarios. Here's an example that uses a custom method to validate email availability:</p>

      <CodeBlock language="typescript">
        {`import UserRepository from "@src/app/repositories/auth/UserRepository";
import BaseValidator from "@src/core/domains/validator/base/BaseValidator";
import { IValidatorPayload } from "@src/core/domains/validator/interfaces/IValidator";
import Joi, { ObjectSchema } from "joi";

class CreateUserValidator extends BaseValidator
{
    public customValidatorMethods = [
        'validateEmailAvailability'
    ]

    async validateEmailAvailability(payload: IValidatorPayload) 
    {
        const repository = new UserRepository();
        const user = await repository.findOneByEmail(payload.email as string);

        if(user) {
            this.setCustomMessages({ email: 'User already exists' });
        }
    }

    rules(): ObjectSchema {
        return Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required().min(6),
            firstName: Joi.string(),
            lastName: Joi.string(),
        })
    }
}

export default CreateUserValidator`}
      </CodeBlock>

      <p>In this example, the <code>validateEmailAvailability</code> method checks if the email already exists in the database. If it does, it sets a custom error message.</p>

    </article>
  );
};

export default ValidatorCreating;