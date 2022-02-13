const { Activity, Country } = require('../db');

const getActivities = async (req, res) => {
    try {
        const result = await Activity.findAll()
        res.json(result)

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}


const postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body
        const act = await Activity.create({ name, difficulty, duration, season, })
        countries.map((e) => act.addCountry(e))
        res.send(act)
    } catch (err) {
        res.send(err)
    }
}
//     const {name, difficulty, duration, season, countries} = req.body;
//     try {
//         const createActividad = await Activity.create({
//             name,
//             difficulty,
//             duration,
//             season,
//         })
//         countries.map((country) => createActividad.addCountry(country))
//         res.send(createActividad)
//     }catch(error) {
//         next(error)
//     }
// }



module.exports = {
   postActivity,
   getActivities
}
