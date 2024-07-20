const Movies =require('../Model/moviesModel');
exports.getMovies=async (req,res)=>{

    await Movies.find()
        .then(response => {
            res.status(200).json({
                "movies":response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}

exports.getMoviesById = async (req,res)=>{
    const {id} = req.params;
    await Movies.find({_id:id},{})
    .then(response=>{
        res.status(200).json({
            movieId:response
        })
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
}