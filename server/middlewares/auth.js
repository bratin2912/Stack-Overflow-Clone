import jwt from 'jsonwebtoken';

const auth=(req,res,next)=>{
    try {
        const decode=jwt.verify(req.headers.auth,'bkfeskvafa')
        req.userId=decode?._id

        next()
    } catch (error) {
        res.status(404).send({
            message:error.message
        })
    }
}

export default auth;