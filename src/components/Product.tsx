
import React from 'react'
import { Product } from '@/types/types'

const Product = ({ data }: { data: Product }) => {

    return (
        <div className=" flex flex-col bg-white border border-gray-200 rounded-lg shadow m-[30px]">

            <div className='flex-1 flex justify-center items-center'>
                <img className="p-8 rounded-t-lg " src={data.image} alt="product image" />
            </div>

            <div className="px-5 pb-5">

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {
                        data.name ? data.name : "No text"
                    }
                </h5>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Product