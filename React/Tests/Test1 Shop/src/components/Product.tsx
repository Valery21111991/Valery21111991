import { useState } from "react"
import { IProduct } from "../models"


interface ProductProps {
    product:IProduct
}

export function Product ({product}:ProductProps) {
    // React.useState
    const [details,setDetails] = useState(false);
    // определяем класс для кнопок
    const btnBgClassName = details ? 'bg-yellow-400':'bg-blue-400';
    // обшие классы
    const btnClasses = ['py-2 px-4 border', btnBgClassName];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 border-collapse">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button className= {btnClasses.join(' ')}
                onClick={() => setDetails(prev=>!prev)}>
                {details ? 'Hide Details': 'Show Details'}
            </button>
            {/* <button className="py-2 px-4 border bg-blue-400" onClick={() => setDetails(false)}>
                Hide details
            </button> */}
            {details && <div>
            <p>{product.description}</p>
            <p>Rate:<span style={{fontWeight:'bolder'}}>{product?.rating?.rate}</span></p>
            </div>}
            
        </div>
    )
}