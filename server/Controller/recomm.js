const Recommend =require('../Model/recoModel');
exports.getRecommend=async (req,res)=>{

    await Recommend.find()
        .then(response => {
            res.status(200).json({
                "recommend":response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}