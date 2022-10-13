import React from 'react'
import {Product} from "../../models/Product";
import ProductCard from "../../components/ProductCard/ProductCard";
import {useAppSelector} from "../../hooks/hooks";

const Favourites: React.FC = () => {
    const {favouriteProducts} = useAppSelector((state) => state.product);
    console.log(favouriteProducts)
    return (
        <div className={'flex justify-around flex-wrap'}>
            {favouriteProducts.length==0?'There is no favourite':
                favouriteProducts.map((product:Product, index:number)=>(
                    <ProductCard product={product} key={`${product.developerEmail}_${index}`}/>
                ))}
        </div>
    )
}

export default Favourites;
