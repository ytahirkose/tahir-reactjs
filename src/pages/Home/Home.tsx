import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {createSession} from "../../store/auth";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import Cookie from "js-cookie";
import {getProducts} from "../../store/product";
import {getCategories} from "../../store/category";
import {Loader} from "../../components";
import {Category} from "../../models/Category";
import {Product} from "../../models/Product";
import {EyeGlassIcon, IconHome, ListStyleIcon} from "../../utils/Icons";
import ProductCard from "../../components/ProductCard/ProductCard";


const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const {token} = useAppSelector((state) => state.auth);
    const {products, isProductPending} = useAppSelector((state) => state.product);
    const {categories, isCategoriesPending} = useAppSelector((state) => state.category);

    useEffect(() => {
        if (!Cookie.get('developerToken')) {
            dispatch(createSession());
        }
    }, [])

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [token])

    useEffect(() => {
        console.log(products)
    }, [products])

    if (isCategoriesPending || isProductPending) {
        return (<Loader/>)
    }
    return (
        <div className={'w-full flex'}>
            <div className={'w-1/4'}>
                <aside className="flex-shrink-0 bg-x-gradient-grey-200-grey-400-80 leading-tight lg:w-376 lg:flex lg:flex-col z-30 h-screen w-full pr-2">
                    <div className="flex-grow w-inherit overflow-y-auto h-full">
                        <div className="h-full flex justify-center items-start">
                            <div className="px-200 pb-12 flex justify-center flex-col">
                                <h3 className={'text-3xl'}>Categories</h3>
                                <ul>
                                    <li className="mt-6">
                                        <span className="flex items-center text-nebula-600  hover:text-amber-700">
                                            <span className="flex w-8 h-8 mr-4 items-center justify-center fill-current">
                                                <EyeGlassIcon />
                                            </span>
                                            All Categories
                                        </span>
                                    </li>
                                    {categories?.map((category:Category)=>(
                                        <li className="mt-6" key={category.name}>
                                        <span className="flex items-center text-nebula-600  hover:text-amber-700">
                                            <span className="flex w-8 h-8 mr-4 items-center justify-center fill-current">
                                                <ListStyleIcon />
                                            </span>
                                            {category.name}
                                        </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className={'w-3/4'}>
                <div className={'flex justify-around flex-wrap'}>
                    {products?.map((product:Product, index:number)=>(
                        <ProductCard product={product} key={`${product.developerEmail}_${index}`}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home
