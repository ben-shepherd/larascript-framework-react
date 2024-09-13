
const MiddlewareExample = 
`export const authorize = () => async (req: BaseRequest, res: Response, next: NextFunction): Promise<void> => {
    const authorization = (req.headers.authorization ?? '').replace('Bearer ', '');

    const apiToken = await App.container('auth').attemptAuthenticateToken(authorization)

    const user = await apiToken?.user()

    if(!user || !apiToken) {
        throw new UnauthorizedError();
    }

    req.user = user;
    req.apiToken = apiToken

    next();
};`

export default MiddlewareExample