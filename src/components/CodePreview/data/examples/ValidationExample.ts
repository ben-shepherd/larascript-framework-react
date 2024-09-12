
const ValidationExample = 
`class UpdateUserValidator extends BaseValidator {

    rules(): ObjectSchema {
        return Joi.object({
            password: Joi.string().min(6),
            firstName: Joi.string(),
            lastName: Joi.string(),
        })
    }

}`

export default ValidationExample