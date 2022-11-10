import React from "react";
import { useEffect, useState} from "react";
import Header from "../components/Header"
import { astronomyoftheday } from "../service/informationsNasa";


export const Home = ()=>{
const [images, setImages]= useState ([])   
const [loading, setLoading] = useState(true)

const getImagesOftheDay = async () => {
const response = await astronomyoftheday();
setLoading(false)
setImages(response);
}

useEffect(() =>{
setLoading(true)
getImagesOftheDay();

},[])  
console.log(images)

    return(
        <>
        <Header images={images} loading={loading}/>
        </>
    )
}