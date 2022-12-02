import DataFetching from './DataFetching.js';

function SeparatingData(type){

    /* Creating two conditionals to call certaing value when rendering.*/


    let arr = DataFetching();

    if(type === "advice"){
            return(
                arr[1]
            );
        }

    if(type === "id"){
        return(
            arr[0]
        )
    }

    return("invalid")

}

export default SeparatingData