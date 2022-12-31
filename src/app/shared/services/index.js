const API_KEY = 'zzBti5MF8TJtTXdGKA46MgBbIqmhSIX4gstXdgsO';
const APOD = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`


export const getImage = async() =>{
    try{
        const response = await fetch(APOD);
        return await response.json();
    } catch(error){
        console.log("error getMovie: ",error);
    }
}