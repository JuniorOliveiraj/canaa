
import {  ref, getDownloadURL,listAll  } from "firebase/storage";import { storage } from "../firebase"; 



export const getAll = async ()=>{ 
    const Photo = [];

    const list = Photo
    const imagensFolder = ref(storage,"imagens")
    const PhotoList = await listAll(imagensFolder);
    for( let i in PhotoList.items){
      let photoUrl = await getDownloadURL(PhotoList.items[i])
      Photo.push({
        name: PhotoList.items[i].name,
        url:photoUrl});
    }
    return list
   
  }