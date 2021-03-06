const fetchData = require('../utils/fetchData');
const API = "https://rickandmortyapi.com/api/character/"

const anotherFunction = async (url_api)=>{
    try{
        const data = await fetchData(url_api)
        const character = await  fetchData (`${API}${data.results[0].id}`)
        const origin =await fetchData(character.origin.url)
        console.log("anotherFunction -> data", data.info.count)
        console.log("anotherFunction -> character", character.name)
        console.log("anotherFunction -> origin", origin.dimension)
    }catch(error){
        console.error(error)
    }
}

console.log('Before')
console.log(anotherFunction(API))
console.log('After')