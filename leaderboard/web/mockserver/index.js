const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
let teams = [
    {
        "id": "15e5a4c5-cdc7-4d32-8b49-3259271cba40",
        "teamName": "team1",
        "DownTimeMinutes": 30,
        "points": 300
    },
    {
        "id": "15e5a4c5-cdc7-4d32-8b49-3259271cba40",
        "teamName": "team2",
        "DownTimeMinutes": 0,
        "points": 400
    },
    {
        "id": "15e5a4c5-cdc7-4d32-8b49-3259271cba40",
        "teamName": "team3",
        "DownTimeMinutes": 100,
        "points": 10
    },
]

let homepage = "<a href=http://localhost:3000/api/leaderboard/teams/>/api/leaderboard/teams/  endpoint</a>"

app.get('/', (req, res) => res.send(homepage))
app.get('/api/leaderboard/teams/', (req, res) => res.send(JSON.stringify(teams)))
app.listen(8080, () => console.log('Example app listening on port 8080!'))