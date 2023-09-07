"use client"

import React from 'react'
import { useGetProductsQuery } from '@/redux/services/amiiboApi'
import ProductComponent from '@/components/Product'
import { Product } from '@/types/types'

const Products = () => {

    const { data, isLoading, isFetching } = useGetProductsQuery(null)

    if (isLoading || isFetching) {
        return <div>Cargando..</div>
    }

    return (

        <div className='grid grid-cols-1 my-[20px] min-[580px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                data?.amiibo.slice(0, 6).map((product: Product, index) => {
                    return <ProductComponent key={index} data={product} />
                })
            }
        </div>

    )
}

export default Products