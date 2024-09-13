
const ModelsUsageExample = 
`const repository = new ApiTokenRepository();

// Find the ApiToken by the token
const apiToken = await repository.findOneActiveToken(decoded.token);

// Revoke the token
apiToken.setAttribute('revokedAt', new Date());
await apiToken.save();`

export default ModelsUsageExample