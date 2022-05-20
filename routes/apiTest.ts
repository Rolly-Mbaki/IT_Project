const express = require('express')
const apiTestRouter = express.Router()
const axios = require('axios')

apiTestRouter.get('/apiTest', async(req: any, res: any) =>{

    try {

        const futClubsApi = await axios.get('https://futdb.app/api/clubs',{
            headers: {
                "Accept": "application/json",
                "X-AUTH-TOKEN": "52fd843f-b2b0-4418-9878-54fff17c1a89" 
            }
        })
        res.render('apiTest',{clubs: futClubsApi.data})

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
})
export{}
module.exports = apiTestRouter