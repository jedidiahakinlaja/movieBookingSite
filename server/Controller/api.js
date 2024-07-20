const request = require("request")
const url = "http://3.17.216.66:4000/events"
const upcomingUrl="http://3.17.216.66:4000/upcomingMovies" 
const detailPageUrl="http://3.17.216.66/latest/5ab12612f36d2879268f284a"
const lastest="http://3.17.216.66:4000/latest"
exports.getNewEvent = async(req,res)=>{
    request(url, (err, response, body) => {
        if (err) {
            console.log(err)
        } else {
            const outputs = JSON.parse(body)
            res.send({"newEvent":outputs})
            // res.render("main", { outputs })
        }
    })

}

exports.getComingEvent = async(req,res)=>{
    request(upcomingUrl, (err, response, body) => {
        if (err) {
            console.log(err)
        } else {
            const outputs = JSON.parse(body)
            // res.render("main", { outputs })
           res.send({"upcoming":outputs})
        }
    })

}

exports.detailPage= async(req,res)=>{
    request(detailPageUrl, (err,response, body)=>{
        if(err){
            console.log(err)
        }else{
            const outputs = JSON.parse(body) 
            res.send({"detail":outputs})
        }
    })
}

exports.latestPage= async(req,res)=>{
    request(lastest, (err,response, body)=>{
        if(err){
            console.log(err)
        }else{
            const outputs = JSON.parse(body) 
            res.send({"latest":outputs})
        }
    })
}