
const {SelectCommentById} = require("../__model/Comment.models");

exports.getCommentById = (req, res, next) => {

    const {review_id} = req.params
    
    SelectCommentById(review_id)  
    .then((comment) => {
        res.status(200).send({comment});
    })
        .catch((err) => {
         next(err);
    })
    }