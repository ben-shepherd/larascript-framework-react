
const MiddlewareUsageExample = 
`return RouteGroup([
    Route({
        name: authConsts.routes.authUser,
        method: 'get',
        path: '/auth/user',
        action: user,
        middlewares: [authorize()]
    }),
])`

export default MiddlewareUsageExample