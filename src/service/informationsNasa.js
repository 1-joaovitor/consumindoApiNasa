
import api from "./api";
export const astronomyoftheday= async ()=>{
 
try{
const response = await api.get(`planetary/apod?api_key=${process.env.REACT_APP_API_KEY_PUBLIC}`)
return response?.data
}
catch{
    console.log('a comunicação falhou')
}

}
export const PhotosMars= async ()=>{
   
    try{
    const response = await api.get(`mars-photos/api/v1/rovers/curiosity/photos?sol=16&api_key=${process.env.REACT_APP_API_KEY_PUBLIC}`)
    return response?.data?.photos
    }
    catch{
        console.log('a comunicação falhou')
    }
    
    }
  