import { useState } from 'react';

export const useCounter = ( initialcounter = 10 ) => {
 

const [counter, setcounter]=useState(initialcounter);

const increment = (  )=>{
    setcounter( counter + 1 );
}

const decrement = ( )=>{
    setcounter( counter -1  );
}

const reset = ( )=>{
    setcounter( initialcounter );
}

return {
    counter,
    increment,
    decrement,
    reset
};



}
