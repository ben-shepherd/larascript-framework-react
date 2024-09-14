
const RoutesActionExample = 
`export default (req: IAuthorizedRequest, res: Response) => {
    try {
        const user = req.user;
        const data = user?.getData({ excludeGuarded: true });

        res.send({ 
            success: true,
            user: data
    }
    catch (error) {
        if (error instanceof Error) {
            responseError(req, res, error);
        }
    }
};
`

export default RoutesActionExample