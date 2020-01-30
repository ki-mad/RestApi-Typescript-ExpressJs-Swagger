const jwt = require('express-jwt')

exports.authenticated = jwt({secret: 'my-secret-key'})

// exports.authenticated = (req: any, res: any) => {
//     const id = req.body.id
//     jwt({secret: id})
// }