// add modules
const express = require("express")
const redis = require("redis")
// create an express app 
const app = express()
// create a redis client 
const client = redis.createClient({
    // connect to redis server in docker 
    host: "redis-server",
    // // redis default port
    // port:6379
})
// set visits variable to 0 in redis 
client.set("visits", 0)
// route handler for root path 
app.get("/", (req, res) => {
    // get visits variable in redis 
    client.get("visits", (err, visits) => {
        // send the number of visits  
        res.send("NUMBER OF VISITS IS : " + visits)
        // update the visits variable in redis 
        client.set("visits", parseInt(visits) + 1)
    })
})

// listen on port 8081
app.listen(4001, () => {
    console.log("Listening on PORT 8081");
})