import axios from 'axios';
import url from './URL'
import setupUser from './setupUser'

const registerUser=async(email,password,username)=>{
    const response=await axios.post(`${url}/auth/local/register`,{
        username,email,password
    }).catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
   if (response){
    setupUser(response)
   } 
    return response
    
    }

export default registerUser;