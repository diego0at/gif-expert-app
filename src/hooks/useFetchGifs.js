import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
   

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getItems = async ()=> {
      const items = await getGifs(category);
      setImages(items);
      setIsLoading(false);
   }

   useEffect(() => {

      // getGifs(category).
      //    then(items => setImages(items));
      getItems();

   }, [])

   return {
      images,
      isLoading
   }

}
