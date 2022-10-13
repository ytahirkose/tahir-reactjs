import React from 'react';
import {Product} from "../../models/Product";
import {IconLike} from "../../utils/Icons";
import {useAppDispatch} from "../../hooks/hooks";
import {addFavourite, removeFavourite, setProductAsCategory, setSelectedProduct} from "../../store/product";
import {Link} from "react-router-dom";

type Props = {
    product: Product;
}
const ProductCard: React.FC<Props> = ({product}) => {
    const dispatch = useAppDispatch()

    const handleFav = () => {
        product.inFavourite?dispatch(removeFavourite(product._id)):dispatch(addFavourite(product))
        dispatch(setProductAsCategory(''));
    }

    return (
        <Link to='/detail' className="container mx-auto px-3 pb-3 m-3 bg-gray-100 w-72 flex flex-col justify-center rounded shadow" onClick={()=>dispatch(setSelectedProduct(product))}>
            <div
                className="relative flex flex-col flex-wrap items-center bg-opacity-75 "
                style={{cursor: 'auto'}}>
                {product.inFavourite? (
                    <span
                        className="absolute px-3 py-1 text-xs font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-400 to-red-600 -top-3 ">
                            <IconLike />
                        </span>
                ): ''}

                <img className={'h-48'} src={product.avatar}/>
                {product.name}
                <h3 className="text-4xl font-medium text-green-900 opacity-75 my-7">
                    ${product.price}
                </h3>
                <p className="pb-5 -mt-3 text-base text-green">
                    {product.description}
                </p>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm mb-3"
                    onClick={handleFav}
                >
                    {product.inFavourite? 'Remove': 'Add'} to favourite list
                </button>
            </div>
        </Link>
    )
}

export default ProductCard;
