const {Country, Activity} = require('../db');
const axios = require('axios');
const {Op} = require('sequelize'); 

const dbInit = async () => {
    try {
        const apiUrl = await axios.get('https://restcountries.com/v3/all') 
        const apiInfo = apiUrl.data.map(c => {
            return {
                name: c.name["common"],
                alpha3Code: c.cca3,
                capital: c.capital ? c.capital[0] : "capital not found",
                continents: c.continents[0],
                area: c.area,
                region: c.subregion,
                flags: c.flags.find((flag) => flag.includes("svg")), 
                population: c.population
            }
        })
        if (!(await Country.findByPk("ARG"))) { //si no existe apiInfo con alpha3code 
            await Country.bulkCreate(apiInfo)   //crea apiInfo
        }
    } catch (err) {
        console.log(err)
    }
}


const getAllCountries = async (req, res) => {
    const { name } = req.query
    
    if (!name) {
        try {
            const result = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ["name", "difficulty", "duration", "season"],
                    through: {
                        attributes: [],
                    }
                }
            })
            return res.send(result)
        } catch (err) {
            console.log(err)
        }
    } else {
        try {
            const findCountry = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `${name}%`
                    }
                }
            })
            return res.send(findCountry)
        } catch (err) {
            console.log(err)
        } 
    }
}

const getCountryById = async (req, res, next) => {
    try{
        const {id} = req.params;
        const myCountry = await Country.findAll({
            where: { alpha3Code: id},
            include: { model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: {
                    attributes: []
                }
            }
        });
        myCountry.length ? res.status(200).send(myCountry) : res.status(404).json({error: `id ${id} not found`});
    }catch (error) {
        next(error)
    }
}






module.exports = {
    getAllCountries, 
    dbInit,
    getCountryById
    
} 