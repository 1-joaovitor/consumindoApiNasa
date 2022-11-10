import { useEffect, useState } from "react";
import  HeaderMars  from "../components/HeaderMars"
import { PhotosMars } from "../service/informationsNasa";

export const Mars =()=>{
const [photos, setPhotos]= useState ([])   
const [loading, setLoading] = useState(true)
 

const getPhotosMarsy= async () => {
const response = await PhotosMars();
setLoading(false)
setPhotos(response);
}

useEffect(() =>{
setLoading(true)
getPhotosMarsy();
},[])  
console.log(photos)
return(
    <>
    <HeaderMars photos={photos} loading={loading}/>
    </>
)
}