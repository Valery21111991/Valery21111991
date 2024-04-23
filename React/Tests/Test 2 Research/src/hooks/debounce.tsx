///нужен чтобы информация из инпута передавалась не на каждый нажатый симво, а в конце, когда уже все записано

import {useEffect,useState} from 'react'

export function useDebounce(value:string, delay=300){
    const[debounced, setDebounced] = useState(value);

    useEffect(()=>{
        const handler=setTimeout(()=>setDebounced(value), delay);
        return()=>clearTimeout(handler);
    }, [value,delay])

    return debounced;
}