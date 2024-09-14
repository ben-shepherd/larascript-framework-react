
const DatabaseDocumentManagerExample = 
`const activeUsers = await App.container('db')
    .documentManager('mongodb')
    .table('users')
    .findMany({
        filters: {
            active: true,
            age: {
                $gte: 18
            }
        },
        order: {
            createdAt: 'desc'
        }
    })

const blogPosts = await App.container('db')
    .documentManager('postgres')
    .table('users')
    .findMany({
        filters: {
            deleted: false
        },
        order: {
            postedAt: 'desc'
        }
    })`

export default DatabaseDocumentManagerExample