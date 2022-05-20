const express = require('express')
const quizTestRouter = express.Router()
const axios = require('axios')


quizTestRouter.get("/quizTest", async(req: any, res: any) => {

    try {
        const futClubsApi = await axios.get('https://futdb.app/api/clubs',{
            headers: {
                "Accept": "application/json",
                "X-AUTH-TOKEN": "52fd843f-b2b0-4418-9878-54fff17c1a89" 
            }
            
        })
        const futLeaguesApi = await axios.get('https://futdb.app/api/leagues',{
            headers: {
                "Accept": "application/json",
                "X-AUTH-TOKEN": "52fd843f-b2b0-4418-9878-54fff17c1a89" 
            }
            
        })

        let clubs:string[] = [];
        for (let i = 0; i < 5; i++) {
            clubs[i] = futClubsApi.data.items[i].name;
            
        }

        let leagues:string[] = [];
        for (let i = 0; i < 5; i++) {
            leagues[i] = futLeaguesApi.data.items[i].name;
            
        }

        let questions = [
            {
                q:"Tot welke ploeg behoort deze embleem",
                fotoUrl:`https://futdb.app/api/clubs/${futClubsApi.data.items[0].id}/image`,
                options:['Liverpool',`${clubs[0]}`,'Manchester United','Leeds'],
                answer:2
            },
            {
                q:"Tot welke league behoort deze embleem",
                fotoUrl:`https://futdb.app/api/leagues/${futLeaguesApi.data.items[0].id}/image`,
                options:[`${leagues[0]}`,`Premier League`,'La Liga','Bundesliga'],
                answer:1
            }
        ]

        res.render("quizTest",{club: clubs[0], league: leagues[0]});

    } catch (err: any) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.satus)
            console.log(err.response.headers)
        }
        else if (err.request) {
            console.log(err.request)
        }
        else{
            console.error('Error', err.message)
        }
    }
});

  export{}
  module.exports = quizTestRouter

