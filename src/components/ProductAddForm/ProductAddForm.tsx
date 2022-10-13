import React, {FormEvent, Fragment, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Category} from "../../models/Category";
import {useFormik} from "formik";
import {addProduct} from "../../store/product";

interface initialValues {
    name: string,
    price: number,
    description: string,
    category: string,
    avatar: string,
    developerEmail: string
}

interface Props {
    isOpen: boolean,
    setIsOpen: (data: boolean) => void
}

const ProductAddForm: React.FC<Props> = ({isOpen, setIsOpen}) => {
    const dispatch = useAppDispatch()
    const {categories} = useAppSelector((state) => state.category);
    const cancelButtonRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            price: 0,
            description: '',
            category: '',
            avatar: 'Hobby',
            developerEmail: 'ytahirkose@gmail.com'

        },
        onSubmit: values => {
            dispatch(addProduct(values));
        },
    });

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Product Informations
                                            </Dialog.Title>
                                            <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
                                                <div className="flex flex-wrap -mx-3 mb-6">
                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="name">
                                                            Product Name
                                                        </label>
                                                        <input
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            id="name" type="text" name="name" placeholder="Product Name"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.name}
                                                            onBlur={formik.handleBlur}/>

                                                    </div>
                                                    <div className="w-full md:w-1/2 px-3">
                                                        <label
                                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="price">
                                                            Price
                                                        </label>
                                                        <input
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            id="price" type="number" name="price" placeholder="Price"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.price}
                                                            onBlur={formik.handleBlur}/>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-6">
                                                    <div className="w-full px-3">
                                                        <label
                                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="description">
                                                            Description
                                                        </label>
                                                        <input
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            id="description" type="text" name="description"
                                                            placeholder="Description"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.description}
                                                            onBlur={formik.handleBlur}/>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-2">
                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="avatar">
                                                            Avatar
                                                        </label>
                                                        <input
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                            id="avatar" type="text" placeholder="Avatar"
                                                            onChange={formik.handleChange}
                                                            value={formik.values.avatar}
                                                            onBlur={formik.handleBlur}/>
                                                    </div>
                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label
                                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            htmlFor="category">
                                                            Category
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                id="category" name="category"
                                                                onChange={formik.handleChange}
                                                                value={formik.values.category}
                                                                onBlur={formik.handleBlur}>
                                                                {categories.map((category:Category)=>(
                                                                    <option key={category.name}>{category.name}</option>
                                                                ))}
                                                            </select>
                                                            <div
                                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg className="fill-current h-4 w-4"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 20 20">
                                                                    <path
                                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() => setIsOpen(false)}
                                                        ref={cancelButtonRef}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default ProductAddForm;
