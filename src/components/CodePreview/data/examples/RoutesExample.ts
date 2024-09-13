
const RoutesExample = 
`const apiRoutes = RouteGroup([
    // Single route
    Route({
        name: 'index',
        method: 'get',
        path: '/',
        action: (req: Request, res: Response) => {
            res.send('OK!')
        }
    }),
    // Auto generated routes
    ...RouteResource({
        name: 'blog',
        resource: BlogModel,
        createValidator: BlogCreateValidator,
        updateValidator: BlogUpdateValidator,
        except: ['destory'],
    })
])

export default apiRoutes`

export default RoutesExample