import axios from 'axios';
import url from './URL'
import setupUser from './setupUser'


const loginUser=async(email,password)=>{
    const response=await axios.post(`${url}/auth/local`,{
        identifier:email,
        password
    }).catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
   if (response){
    setupUser(response)
   } 
    return response
}

export default loginUser;