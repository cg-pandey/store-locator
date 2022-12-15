import { useMemo } from "react";
import { useQuery, useMutation } from "react-query";



const supportRequest = async ({url, formData}) => {

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2dAcHJwd2Vicy5jb206anByQEZFQjE5");
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
      };

    const response = await fetch(url, requestOptions);     
    console.log(response,'inside fetch')  
    
    return response.json(); 
      
}

export const useSupportForm = () => {

   return useMutation(supportRequest);

}