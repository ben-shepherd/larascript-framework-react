
const ValidationOnFlyExample = 
`// Get the validation service
const validatorService = App.container('validate');

// Create a validator
const validator = validatorService.validator(
    Joi.object({
        email: Joi.string().email().required()
    })
);

// Validate the payload
const result = await validator.validate({
    email: 'badEmail@examplecom',
})

// Print the result
console.log(result.success, result.joi.error)`

export default ValidationOnFlyExample