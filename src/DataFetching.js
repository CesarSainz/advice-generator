import { useEffect, useState } from 'react';
import axios from 'axios';
import RandomNumberGenerator from './RandomNumberGenerator.js';




function AdviceGenerator (){


/*Fetching data from "adviceslip" API, creating two useStates 
and an array to store the "id" and "advice" value. The array will be
exported will be used on SeparatingData.js
*/  

    const[advice,setAdvice] = useState('');
    const[id,setId]= useState('');
    const[update,setUpdate] = useState(0);
    let arr;
  
    useEffect(() =>{
      axios.get('https://api.adviceslip.com/advice')
      .then((response)  => {
        console.log(response.data)
        setAdvice(response.data.slip.advice)
        setId(response.data.slip.id)
        })
      .catch(err => {
        console.log(err)
        });
      },[update]
    )

    return(
      arr = [id,advice]
    )
    
    
}
export default AdviceGenerator