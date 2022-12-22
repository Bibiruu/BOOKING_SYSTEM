import jwt from 'jsonwebtoken'

export default function (req, res, next) {
    const authHeader = req.headers['authorization']
    //extracting the token
    //bearer authentication
    const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            return res.status(401).json({
                success: false,
                response: "No token"
            })
        }
        jwt.verify(!authHeader, process.env.TOKEN_KEY, async (error, user) => {
             if (error) {       
                return res.status(403).json({
                    success: false,
                    response: "Error"
                })
             }
             //taking the user 
             const userData = await findUserByEmail(user.email)
             req.user = userData
             next()
             
        })   
}


