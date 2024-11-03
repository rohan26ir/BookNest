import { toast } from "react-toastify";

const getStoredRead = () =>{
  // read-list
  const storedListStr = localStorage.getItem('read-list');

  if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }
  else{
    return [];
  }
}


const addToStoredRead = (id) =>{
  
  const storedList = getStoredRead();
  if(storedList.includes(id)){
    // already exixte. do not add it
    console.log(id, "alreadu exits in the read list");
    toast("This Boook already added to the Book List")

  }
  else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    // 
    toast("This Book is added to your Book List")
  }
}

export {addToStoredRead, getStoredRead}