import React from 'react';
import {Product} from "../../models/Product";

type Props = {
    product: Product;
}
const ProductCard: React.FC<Props> = ({product}) => {
    return (
        <div className={'p-3 m-3 bg-gray-100 w-72 flex flex-col justify-center items-center rounded shadow'}>
            <img className={'h-48'} src={product.avatar}/>
            {product.name}
        </div>
    )
}

export default ProductCard;
