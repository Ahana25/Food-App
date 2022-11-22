import axios from "axios"



let url="http://127.0.0.1:3003/food"
let getData=async()=>
{
    return await axios.get(url)
}

let postData=async(users)=>
{
   return await axios.post(url,users)
}

let deleteData=async(id)=>
{
    return await axios.delete(`${url}/${id}`)
}

export{getData,postData,deleteData}