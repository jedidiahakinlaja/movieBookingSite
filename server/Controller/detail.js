const Detail = require('../Model/detailsModel')

exports.postDetails = (req, res) => {
    const {sendId, totalPrice, timeChosen, QR, title, img } = req.body;

    const detailObj = new Detail ({
        sendId, 
        totalPrice,
         timeChosen,
         QR,
         title,
         img
    });

    detailObj.save()
        .then(response => {
            res.status(200).json({
                message: "Details Saved Successfully",
                Details: response
            })
        })
        .catch( err => {
            res.status(500).json({ error: err })
        })
}


exports.getDetails = (req, res) => {


    Detail.find()
        .then(response => {
            res.status(200).json({
                Detail: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getDetailsById = async (req, res) => {

    const {id} = req.params;
    await Detail.find({_id:id})
    .then(response=>{
        res.status(200).json({
            movieId:response
        })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}