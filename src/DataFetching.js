import { useEffect, useState } from 'react';
import axios from 'axios';


function AdviceGenerator (type){

    const[advice,setAdvice] = useState('');
    const[id,setId]= useState('');
  
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

    if(type === 'id'){
        return(
            <span>{id}</span>
        );
    }
    
    return(
            <span>{advice}</span>
    );
    
    
}
export default AdviceGenerator