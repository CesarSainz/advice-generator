import { useEffect, useState } from 'react';
import axios from 'axios';

function AdviceGenerator (){

    const[advice,setAdvice] = useState('');
    const[id,setId]= useState('');
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
      }
    )

    return(
      arr = [id,advice]
    )
    
    
}
export default AdviceGenerator